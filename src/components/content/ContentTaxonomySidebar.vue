<template>
  <aside class="taxonomy-sidebar">
    <section v-if="props.showCategories" class="widget">
      <h3>分类</h3>
      <ul>
        <li v-for="category in categoryStore.categories" :key="category.id">
          <RouterLink :to="`/category/${category.slug}`">
            <span>{{ category.name }}</span>
            <small>{{ category.postCount }}</small>
          </RouterLink>
        </li>
      </ul>
    </section>

    <section class="widget">
      <h3>标签</h3>
      <div class="tag-cloud">
        <RouterLink
          v-for="tag in tagStore.tags"
          :key="tag.id"
          :to="`/tag/${tag.slug}`"
        >
          {{ tag.name }}
        </RouterLink>
      </div>
    </section>
  </aside>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useCategoryStore } from '@/stores/category'
import { useTagStore } from '@/stores/tag'

const props = withDefaults(
  defineProps<{
    showCategories?: boolean
  }>(),
  {
    showCategories: true,
  },
)

const categoryStore = useCategoryStore()
const tagStore = useTagStore()

onMounted(() => {
  if (props.showCategories) categoryStore.fetchCategories()
  tagStore.fetchTags()
})
</script>

<style scoped>
.taxonomy-sidebar {
  position: sticky;
  top: calc(var(--header-height) + var(--spacing-lg));
  display: grid;
  gap: var(--spacing-lg);
}

.widget {
  padding: var(--spacing-md);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
}

.widget h3 {
  margin-bottom: var(--spacing-sm);
  font-size: 1rem;
}

.widget ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.widget li + li {
  border-top: 1px dashed var(--color-border-light);
}

.widget li a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: var(--spacing-xs) 0;
  color: var(--color-text-secondary);
  text-decoration: none;
}

.widget li a:hover {
  color: var(--color-primary);
}

.widget small {
  font-size: 0.72rem;
}

.tag-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
}

.tag-cloud a {
  padding: 2px 10px;
  border-radius: var(--radius-full);
  color: var(--color-text-secondary);
  background: var(--color-bg-secondary);
  font-size: 0.82rem;
  text-decoration: none;
}

.tag-cloud a:hover {
  color: #fff;
  background: var(--color-primary);
}

@media (max-width: 768px) {
  .taxonomy-sidebar {
    position: static;
  }
}
</style>
