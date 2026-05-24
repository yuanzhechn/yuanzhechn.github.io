<template>
  <DefaultLayout>
    <h1 class="page-title">文章分类</h1>
    <div v-if="categoryStore.loading" class="center">
      <LoadingSpinner />
    </div>
    <div v-else-if="categoryStore.categories.length === 0" class="center">
      <EmptyState message="暂无分类" />
    </div>
    <div v-else class="category-grid">
      <RouterLink
        v-for="cat in categoryStore.categories"
        :key="cat.id"
        :to="`/category/${cat.slug}`"
        class="category-card"
      >
        <div class="cat-color" :style="{ backgroundColor: cat.color }" />
        <div class="cat-info">
          <h3 class="cat-name">{{ cat.name }}</h3>
          <p class="cat-desc">{{ cat.description }}</p>
          <span class="cat-count">{{ cat.postCount }} 篇文章</span>
        </div>
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
import { useCategoryStore } from '@/stores/category'

const categoryStore = useCategoryStore()

onMounted(() => {
  categoryStore.fetchCategories()
})
</script>

<style scoped>
.page-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: var(--spacing-xl);
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--spacing-md);
}

.category-card {
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

.category-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.cat-color {
  width: 6px;
  flex-shrink: 0;
}

.cat-info {
  padding: var(--spacing-md);
  flex: 1;
}

.cat-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: var(--spacing-xs);
}

.cat-desc {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-sm);
}

.cat-count {
  font-size: 0.8rem;
  color: var(--color-primary);
  font-weight: 500;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
}
</style>
