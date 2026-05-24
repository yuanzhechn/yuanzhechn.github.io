<template>
  <RouterLink :to="`/post/${post.slug}`" class="post-card">
    <div v-if="post.coverImage" class="post-cover">
      <img :src="post.coverImage" :alt="post.title" />
    </div>
    <div class="post-body">
      <h2 class="post-title">
        <span v-if="post.isTop" class="top-badge">置顶</span>
        {{ post.title }}
      </h2>
      <p class="post-excerpt">{{ post.excerpt }}</p>
      <div class="post-footer">
        <span class="post-category">{{ post.category }}</span>
        <span class="post-date">{{ formatDate(post.createdAt) }}</span>
        <span class="post-reading-time">{{ post.readingTime }} 分钟阅读</span>
      </div>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { PostListItem } from '@/types'
import { formatDate } from '@/utils/date'

defineProps<{
  post: PostListItem
}>()
</script>

<style scoped>
.post-card {
  display: flex;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  overflow: hidden;
  text-decoration: none;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.post-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.post-cover {
  width: 200px;
  flex-shrink: 0;
}

.post-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.post-body {
  flex: 1;
  padding: var(--spacing-md);
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.post-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: var(--spacing-sm);
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
}

.top-badge {
  display: inline-block;
  padding: 1px 6px;
  font-size: 0.75rem;
  background: var(--color-primary);
  color: #fff;
  border-radius: var(--radius-sm);
  flex-shrink: 0;
}

.post-excerpt {
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
  flex: 1;
  margin-bottom: var(--spacing-sm);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.post-footer {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  font-size: 0.8rem;
  color: var(--color-text-secondary);
}

.post-category {
  color: var(--color-primary);
}

@media (max-width: 640px) {
  .post-card {
    flex-direction: column;
  }

  .post-cover {
    width: 100%;
    height: 160px;
  }
}
</style>
