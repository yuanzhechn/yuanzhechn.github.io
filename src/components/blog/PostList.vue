<template>
  <div class="post-list">
    <div v-if="loading" class="post-list-center">
      <LoadingSpinner />
    </div>
    <div v-else-if="error" class="post-list-center">
      <ErrorState :message="error" />
    </div>
    <div v-else-if="posts.length === 0" class="post-list-center">
      <EmptyState message="暂无文章" />
    </div>
    <TransitionGroup v-else name="list" tag="div" class="post-list-grid">
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import type { PostListItem } from '@/types'
import PostCard from './PostCard.vue'
import LoadingSpinner from '@/components/ui/LoadingSpinner.vue'
import EmptyState from '@/components/ui/EmptyState.vue'
import ErrorState from '@/components/ui/ErrorState.vue'

defineProps<{
  posts: PostListItem[]
  loading: boolean
  error?: string | null
}>()
</script>

<style scoped>
.post-list-grid {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.post-list-center {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.3s;
}

.list-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
</style>
