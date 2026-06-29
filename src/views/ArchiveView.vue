<template>
  <DefaultLayout>
    <h1 class="page-title">文章归档</h1>
    <div v-if="loading" class="center">
      <LoadingSpinner />
    </div>
    <div v-else-if="archives.length === 0" class="center">
      <EmptyState message="暂无归档" />
    </div>
    <div v-else class="archive-list">
      <section v-for="item in archives" :key="item.year" class="archive-year">
        <h2 class="year-title">{{ item.year }}</h2>
        <div class="year-posts">
          <RouterLink
            v-for="post in item.posts"
            :key="post.id"
            :to="`/post/${post.slug || post.id}`"
            class="archive-post"
          >
            <span class="archive-date">{{ formatDate(post.createdAt) }}</span>
            <span class="archive-title">{{ post.title }}</span>
          </RouterLink>
        </div>
      </section>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import LoadingSpinner from '@/components/ui/LoadingSpinner.vue'
import EmptyState from '@/components/ui/EmptyState.vue'
import { blogApi } from '@/api'
import type { ArchiveItem } from '@/types'
import { formatDate } from '@/utils/date'

const archives = ref<ArchiveItem[]>([])
const loading = ref(false)

onMounted(async () => {
  loading.value = true
  try {
    archives.value = await blogApi.getArchives()
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.page-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: var(--spacing-xl);
}

.archive-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2xl);
}

.year-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: var(--spacing-md);
  padding-bottom: var(--spacing-xs);
  border-bottom: 2px solid var(--color-primary);
}

.year-posts {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.archive-post {
  display: flex;
  align-items: baseline;
  gap: var(--spacing-md);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-sm);
  text-decoration: none;
  transition: background 0.2s;
}

.archive-post:hover {
  background: var(--color-bg-secondary);
}

.archive-date {
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  white-space: nowrap;
  font-family: monospace;
}

.archive-title {
  color: var(--color-text);
}

.archive-post:hover .archive-title {
  color: var(--color-primary);
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
}
</style>
