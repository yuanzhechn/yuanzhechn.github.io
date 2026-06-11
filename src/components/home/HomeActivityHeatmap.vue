<template>
  <section class="activity-panel" aria-labelledby="activity-title">
    <div class="activity-heading">
      <div>
        <p>Writing Activity</p>
        <h2 id="activity-title">写作活跃度</h2>
      </div>
      <div class="activity-summary">
        <strong>{{ posts.length }}</strong>
        <span>篇内容 · {{ activeWeeks }} 个活跃周</span>
      </div>
    </div>

    <div class="heatmap-scroll">
      <div class="heatmap" :style="{ '--week-count': String(weeks.length) }">
        <div v-for="week in weeks" :key="week.key" class="heatmap-week">
          <RouterLink
            v-for="day in week.days"
            :key="day.date"
            :to="day.post ? `/post/${day.post.slug}` : '/archives'"
            class="heatmap-cell"
            :class="`level-${day.level}`"
            :title="day.title"
          />
        </div>
      </div>
    </div>

    <div class="heatmap-legend">
      <span>{{ startLabel }}</span>
      <div>
        <span>少</span>
        <i v-for="level in 4" :key="level" :class="`level-${level - 1}`" />
        <span>多</span>
      </div>
      <span>{{ endLabel }}</span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import type { PostListItem } from '@/types'

const props = defineProps<{
  posts: PostListItem[]
}>()

const dateFormatter = new Intl.DateTimeFormat('zh-CN', { month: 'short', day: 'numeric' })

const weeks = computed(() => {
  const newestDate = props.posts.reduce(
    (latest, post) => (post.createdAt > latest ? post.createdAt : latest),
    new Date().toISOString().slice(0, 10),
  )
  const end = new Date(`${newestDate}T00:00:00`)
  end.setDate(end.getDate() + (6 - end.getDay()))
  const start = new Date(end)
  start.setDate(start.getDate() - 15 * 7 + 1)

  const byDate = new Map(props.posts.map((post) => [post.createdAt, post]))
  return Array.from({ length: 16 }, (_, weekIndex) => {
    const weekStart = new Date(start)
    weekStart.setDate(start.getDate() + weekIndex * 7)
    return {
      key: weekStart.toISOString().slice(0, 10),
      days: Array.from({ length: 7 }, (_, dayIndex) => {
        const date = new Date(weekStart)
        date.setDate(weekStart.getDate() + dayIndex)
        const key = date.toISOString().slice(0, 10)
        const post = byDate.get(key)
        return {
          date: key,
          post,
          level: post ? Math.min(3, Math.max(1, post.tags.length)) : 0,
          title: post ? `${key} · ${post.title}` : `${key} · 暂无文章`,
        }
      }),
    }
  })
})

const activeWeeks = computed(
  () => weeks.value.filter((week) => week.days.some((day) => day.level > 0)).length,
)
const startLabel = computed(() => dateFormatter.format(new Date(`${weeks.value[0]?.key}T00:00:00`)))
const endLabel = computed(() => {
  const lastWeek = weeks.value.at(-1)
  const lastDate = lastWeek?.days.at(-1)?.date
  return lastDate ? dateFormatter.format(new Date(`${lastDate}T00:00:00`)) : ''
})
</script>

<style scoped>
.activity-panel {
  margin-bottom: var(--spacing-2xl);
  padding: var(--spacing-lg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background:
    linear-gradient(
      120deg,
      color-mix(in srgb, var(--color-primary) 7%, transparent),
      transparent 42%
    ),
    var(--color-surface);
}

.activity-heading,
.heatmap-legend,
.activity-summary,
.heatmap-legend > div {
  display: flex;
  align-items: center;
}

.activity-heading,
.heatmap-legend {
  justify-content: space-between;
  gap: 1rem;
}

.activity-heading {
  margin-bottom: 1.15rem;
}

.activity-heading p {
  color: var(--color-primary);
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
}

.activity-heading h2 {
  font-size: 1.15rem;
}

.activity-summary {
  gap: 0.45rem;
  color: var(--color-text-secondary);
  font-size: 0.78rem;
}

.activity-summary strong {
  color: var(--color-text);
  font-size: 1.35rem;
}

.heatmap-scroll {
  overflow-x: auto;
  padding-bottom: 0.35rem;
}

.heatmap {
  display: grid;
  grid-template-columns: repeat(var(--week-count), 1fr);
  gap: 0.34rem;
  min-width: 620px;
}

.heatmap-week {
  display: grid;
  gap: 0.34rem;
}

.heatmap-cell,
.heatmap-legend i {
  display: block;
  aspect-ratio: 1;
  border-radius: 3px;
  background: var(--color-bg-secondary);
}

.heatmap-cell {
  min-width: 0;
  border: 1px solid color-mix(in srgb, var(--color-border) 50%, transparent);
}

.heatmap-cell:hover {
  outline: 2px solid color-mix(in srgb, var(--color-primary) 48%, transparent);
  outline-offset: 1px;
}

.level-1 {
  background: color-mix(in srgb, var(--color-primary) 30%, var(--color-bg-secondary)) !important;
}

.level-2 {
  background: color-mix(in srgb, var(--color-primary) 62%, var(--color-bg-secondary)) !important;
}

.level-3 {
  background: var(--color-primary) !important;
}

.heatmap-legend {
  margin-top: 0.7rem;
  color: var(--color-text-secondary);
  font-size: 0.7rem;
}

.heatmap-legend > div {
  gap: 0.28rem;
}

.heatmap-legend i {
  width: 11px;
}

@media (max-width: 640px) {
  .activity-heading {
    align-items: start;
    flex-direction: column;
  }
}
</style>
