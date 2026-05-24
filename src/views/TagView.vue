<template>
  <DefaultLayout>
    <h1 class="page-title">标签墙</h1>
    <div v-if="tagStore.loading" class="center">
      <LoadingSpinner />
    </div>
    <div v-else-if="tagStore.tags.length === 0" class="center">
      <EmptyState message="暂无标签" />
    </div>
    <div v-else class="tag-wall">
      <RouterLink
        v-for="tag in tagStore.tags"
        :key="tag.id"
        :to="`/tag/${tag.slug}`"
        class="tag-card"
      >
        <span class="tag-name"># {{ tag.name }}</span>
        <span class="tag-count">{{ tag.postCount }} 篇</span>
      </RouterLink>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import LoadingSpinner from '@/components/ui/LoadingSpinner.vue'
import EmptyState from '@/components/ui/EmptyState.vue'
import { useTagStore } from '@/stores/tag'

const tagStore = useTagStore()

onMounted(() => {
  tagStore.fetchTags()
})
</script>

<style scoped>
.page-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: var(--spacing-xl);
}

.tag-wall {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.tag-card {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  text-decoration: none;
  transition: all 0.2s;
}

.tag-card:hover {
  background: var(--color-primary);
  border-color: var(--color-primary);
}

.tag-card:hover .tag-name,
.tag-card:hover .tag-count {
  color: #fff;
}

.tag-name {
  color: var(--color-text);
  font-size: 0.95rem;
}

.tag-count {
  color: var(--color-text-secondary);
  font-size: 0.8rem;
  background: var(--color-bg-secondary);
  padding: 1px 8px;
  border-radius: var(--radius-full);
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
}
</style>
