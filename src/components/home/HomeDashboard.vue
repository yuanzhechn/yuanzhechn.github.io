<template>
  <section class="home-dashboard" aria-label="阅读仪表盘">
    <article class="dashboard-panel category-panel">
      <div class="panel-heading">
        <span>分类星图</span>
        <RouterLink to="/categories">全部分类</RouterLink>
      </div>
      <div class="category-list">
        <RouterLink
          v-for="category in categories"
          :key="category.id"
          :to="`/category/${category.slug}`"
          class="category-row"
          :style="{ '--category-color': category.color }"
        >
          <span class="category-mark" />
          <span class="category-name">{{ category.name }}</span>
          <span class="category-count">{{ category.postCount }}</span>
        </RouterLink>
      </div>
    </article>

    <article class="dashboard-panel tag-panel">
      <div class="panel-heading">
        <span>主题雷达</span>
        <RouterLink to="/tags">标签墙</RouterLink>
      </div>
      <div class="tag-cloud">
        <RouterLink v-for="tag in tags" :key="tag.id" :to="`/tag/${tag.slug}`" class="tag-chip">
          # {{ tag.name }}
        </RouterLink>
      </div>
    </article>

    <article class="dashboard-panel rhythm-panel">
      <div class="panel-heading">
        <span>近期节奏</span>
        <RouterLink to="/archives">时间线</RouterLink>
      </div>
      <ol class="rhythm-list">
        <li v-for="post in recentPosts" :key="post.id">
          <span>{{ formatDate(post.createdAt) }}</span>
          <RouterLink :to="`/post/${post.slug}`">{{ post.title }}</RouterLink>
        </li>
      </ol>
    </article>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { HomeDashboardData } from '@/types'
import { formatDate } from '@/utils/date'

defineProps<HomeDashboardData>()
</script>

<style scoped>
.home-dashboard {
  display: grid;
  grid-template-columns: 1.05fr 1fr 1.25fr;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-2xl);
}

.dashboard-panel {
  min-width: 0;
  padding: var(--spacing-lg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  box-shadow: var(--shadow-sm);
}

.panel-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
}

.panel-heading span {
  color: var(--color-text);
  font-weight: 800;
}

.panel-heading a {
  color: var(--color-text-secondary);
  font-size: 0.85rem;
  text-decoration: none;
}

.panel-heading a:hover {
  color: var(--color-primary);
}

.category-list,
.rhythm-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.category-row {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: var(--spacing-sm);
  align-items: center;
  min-height: 40px;
  padding: 0 var(--spacing-sm);
  border: 1px solid transparent;
  border-radius: var(--radius-md);
  color: var(--color-text);
  text-decoration: none;
  background: color-mix(in srgb, var(--category-color) 9%, transparent);
}

.category-row:hover {
  border-color: color-mix(in srgb, var(--category-color) 45%, var(--color-border));
}

.category-mark {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: var(--radius-sm);
  background: var(--category-color);
}

.category-name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.category-count {
  color: var(--color-text-secondary);
  font-size: 0.86rem;
  font-weight: 700;
}

.tag-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.tag-chip {
  padding: 0.32rem 0.68rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-text-secondary);
  font-size: 0.88rem;
  text-decoration: none;
  background: var(--color-bg-secondary);
  transition:
    color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;
}

.tag-chip:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
  transform: translateY(-2px);
}

.rhythm-list {
  padding: 0;
  margin: 0;
  list-style: none;
}

.rhythm-list li {
  display: grid;
  grid-template-columns: 96px minmax(0, 1fr);
  gap: var(--spacing-md);
  align-items: baseline;
  padding-bottom: var(--spacing-sm);
  border-bottom: 1px dashed var(--color-border-light);
}

.rhythm-list li:last-child {
  padding-bottom: 0;
  border-bottom: 0;
}

.rhythm-list span {
  color: var(--color-text-secondary);
  font-family: ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
  font-size: 0.78rem;
}

.rhythm-list a {
  overflow: hidden;
  color: var(--color-text);
  font-weight: 700;
  line-height: 1.55;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.rhythm-list a:hover {
  color: var(--color-primary);
}

@media (prefers-reduced-motion: reduce) {
  .tag-chip:hover {
    transform: none;
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
    grid-template-columns: 1fr;
    gap: var(--spacing-xs);
  }
}
</style>
