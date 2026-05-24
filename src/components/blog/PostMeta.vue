<template>
  <div class="post-meta">
    <span class="meta-item">
      <span class="meta-label">作者</span>
      <span class="meta-value">{{ post.author }}</span>
    </span>
    <span class="meta-item">
      <span class="meta-label">发布于</span>
      <time class="meta-value" :datetime="post.createdAt">{{ formatDate(post.createdAt) }}</time>
    </span>
    <span v-if="post.updatedAt !== post.createdAt" class="meta-item">
      <span class="meta-label">更新于</span>
      <time class="meta-value" :datetime="post.updatedAt">{{ formatDate(post.updatedAt) }}</time>
    </span>
    <span class="meta-item">
      <span class="meta-label">字数</span>
      <span class="meta-value">{{ formatNumber(post.wordCount) }}</span>
    </span>
    <span class="meta-item">
      <span class="meta-label">阅读</span>
      <span class="meta-value">{{ post.readingTime }} 分钟</span>
    </span>
  </div>
</template>

<script setup lang="ts">
import type { Post } from '@/types'
import { formatDate } from '@/utils/date'
import { formatNumber } from '@/utils/format'

defineProps<{
  post: Post
}>()
</script>

<style scoped>
.post-meta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm) var(--spacing-md);
  color: var(--color-text-secondary);
  font-size: 0.85rem;
}

.meta-item {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.meta-label {
  opacity: 0.7;
}

.meta-label::after {
  content: ':';
}
</style>
