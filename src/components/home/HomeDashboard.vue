<template>
  <section class="home-dashboard" aria-label="知识仪表盘">
    <article class="dashboard-panel category-panel">
      <div class="panel-heading">
        <span>知识版图</span>
        <RouterLink to="/categories">全部分类</RouterLink>
      </div>
      <div class="category-map">
        <RouterLink
          v-for="category in categories"
          :key="category.id"
          :to="`/category/${category.slug}`"
          class="category-track"
          :style="{
            '--category-color': category.color,
            '--category-width': `${Math.max(18, (category.postCount / maxCategoryCount) * 100)}%`,
          }"
        >
          <span class="category-fill" />
          <span class="category-name">{{ category.name }}</span>
          <strong>{{ category.postCount }}</strong>
        </RouterLink>
      </div>
    </article>

    <article class="dashboard-panel tag-panel">
      <div class="panel-heading">
        <span>主题索引</span>
        <RouterLink to="/tags">标签墙</RouterLink>
      </div>
      <div class="tag-cloud">
        <RouterLink
          v-for="(tag, index) in tags"
          :key="tag.id"
          :to="`/tag/${tag.slug}`"
          class="tag-chip"
          :style="{ '--tag-order': index }"
        >
          <span>#</span> {{ tag.name }}
          <small>{{ tag.postCount }}</small>
        </RouterLink>
      </div>
    </article>

    <article class="dashboard-panel rhythm-panel">
      <div class="panel-heading">
        <span>最近提交</span>
        <RouterLink to="/archives">时间线</RouterLink>
      </div>
      <ol class="rhythm-list">
        <li v-for="post in recentPosts" :key="post.id">
          <span class="timeline-node" />
          <time>{{ formatDate(post.createdAt) }}</time>
          <RouterLink :to="`/post/${post.slug}`">{{ post.title }}</RouterLink>
          <small>{{ post.readingTime }} min</small>
        </li>
      </ol>
    </article>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import type { HomeDashboardData } from '@/types'
import { formatDate } from '@/utils/date'

const props = defineProps<HomeDashboardData>()
const maxCategoryCount = computed(() =>
  Math.max(1, ...props.categories.map((category) => category.postCount)),
)
</script>

<style scoped>
.home-dashboard {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr 1.25fr;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-2xl);
}

.dashboard-panel {
  min-width: 0;
  padding: var(--spacing-lg);
  border-top: 2px solid var(--color-text);
  border-bottom: 1px solid var(--color-border);
  background: transparent;
}

.panel-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-md);
  margin-bottom: 1.1rem;
}

.panel-heading span {
  font-weight: 850;
}

.panel-heading a {
  color: var(--color-text-secondary);
  font-size: 0.78rem;
  text-decoration: none;
}

.panel-heading a:hover {
  color: var(--color-primary);
}

.category-map {
  display: grid;
  gap: 0.62rem;
}

.category-track {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  min-height: 38px;
  overflow: hidden;
  border-radius: 4px;
  color: var(--color-text);
  text-decoration: none;
  background: var(--color-bg-secondary);
}

.category-fill {
  position: absolute;
  inset: 0 auto 0 0;
  width: var(--category-width);
  background: color-mix(in srgb, var(--category-color) 24%, transparent);
  transition: width 0.25s ease;
}

.category-track:hover .category-fill {
  width: 100%;
}

.category-name,
.category-track strong {
  position: relative;
  z-index: 1;
  padding: 0 0.7rem;
  font-size: 0.82rem;
}

.category-track strong {
  color: var(--category-color);
}

.tag-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 0.52rem;
}

.tag-chip {
  display: inline-flex;
  gap: 0.3rem;
  align-items: center;
  padding: 0.34rem 0.58rem;
  border-bottom: 1px solid var(--color-border);
  color: var(--color-text-secondary);
  font-size: 0.78rem;
  text-decoration: none;
}

.tag-chip span {
  color: var(--color-primary);
  font-weight: 850;
}

.tag-chip small {
  color: color-mix(in srgb, var(--color-text-secondary) 58%, transparent);
}

.tag-chip:hover {
  border-color: var(--color-primary);
  color: var(--color-text);
}

.rhythm-list {
  position: relative;
  display: grid;
  gap: 0.85rem;
  padding: 0;
  margin: 0;
  list-style: none;
}

.rhythm-list::before {
  content: '';
  position: absolute;
  top: 0.4rem;
  bottom: 0.4rem;
  left: 4px;
  width: 1px;
  background: var(--color-border);
}

.rhythm-list li {
  display: grid;
  grid-template-columns: 9px 76px minmax(0, 1fr) auto;
  gap: 0.65rem;
  align-items: baseline;
}

.timeline-node {
  position: relative;
  z-index: 1;
  width: 9px;
  height: 9px;
  border: 2px solid var(--color-surface);
  border-radius: 50%;
  background: var(--color-primary);
  box-shadow: 0 0 0 1px var(--color-primary);
}

.rhythm-list time,
.rhythm-list small {
  color: var(--color-text-secondary);
  font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
  font-size: 0.7rem;
}

.rhythm-list a {
  overflow: hidden;
  color: var(--color-text);
  font-size: 0.82rem;
  font-weight: 700;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.rhythm-list a:hover {
  color: var(--color-primary);
}

@media (prefers-reduced-motion: reduce) {
  .category-fill {
    transition: none;
  }
}

@media (max-width: 980px) {
  .home-dashboard {
    grid-template-columns: 1fr 1fr;
  }

  .rhythm-panel {
    grid-column: 1 / -1;
  }
}

@media (max-width: 640px) {
  .home-dashboard {
    grid-template-columns: 1fr;
  }

  .rhythm-panel {
    grid-column: auto;
  }

  .rhythm-list li {
    grid-template-columns: 9px minmax(0, 1fr) auto;
  }

  .rhythm-list time {
    display: none;
  }
}
</style>
