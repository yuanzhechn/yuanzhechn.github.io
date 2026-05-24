<template>
  <BlogLayout>
    <template #content>
      <h1 class="page-title">{{ pageTitle }}</h1>
      <PostList
        :posts="postStore.posts"
        :loading="postStore.loading"
        :error="postStore.error"
      />
      <PostPagination
        v-if="postStore.totalPages > 1"
        :page="postStore.page"
        :total-pages="postStore.totalPages"
        @change="handlePageChange"
      />
    </template>
    <template #sidebar>
      <aside class="sidebar-widgets">
        <div class="widget">
          <h3 class="widget-title">分类</h3>
          <ul class="widget-list">
            <li v-for="cat in categoryStore.categories" :key="cat.id">
              <RouterLink :to="`/category/${cat.slug}`" class="widget-link">
                {{ cat.name }} ({{ cat.postCount }})
              </RouterLink>
            </li>
          </ul>
        </div>
        <div class="widget">
          <h3 class="widget-title">标签</h3>
          <div class="tag-cloud">
            <RouterLink
              v-for="tag in tagStore.tags"
              :key="tag.id"
              :to="`/tag/${tag.slug}`"
              class="tag-item"
            >
              {{ tag.name }}
            </RouterLink>
          </div>
        </div>
      </aside>
    </template>
  </BlogLayout>
</template>

<script setup lang="ts">
import { computed, onMounted, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import BlogLayout from '@/layouts/BlogLayout.vue'
import PostList from '@/components/blog/PostList.vue'
import PostPagination from '@/components/blog/PostPagination.vue'
import { usePostStore } from '@/stores/post'
import { useCategoryStore } from '@/stores/category'
import { useTagStore } from '@/stores/tag'

const route = useRoute()
const postStore = usePostStore()
const categoryStore = useCategoryStore()
const tagStore = useTagStore()

const pageTitle = computed(() => {
  if (route.name === 'category-detail') return `分类: ${route.params.slug}`
  if (route.name === 'tag-detail') return `标签: ${route.params.slug}`
  return '文章列表'
})

function loadPosts(page = 1) {
  const params: Record<string, string | number> = { page, pageSize: 10 }
  if (route.params.slug && route.name === 'category-detail') {
    params.category = route.params.slug as string
  }
  if (route.params.slug && route.name === 'tag-detail') {
    params.tag = route.params.slug as string
  }
  postStore.fetchPosts(params)
}

function handlePageChange(newPage: number) {
  loadPosts(newPage)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  loadPosts()
  categoryStore.fetchCategories()
  tagStore.fetchTags()
})

watch(
  () => route.params.slug,
  () => loadPosts(),
)
</script>

<style scoped>
.page-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: var(--spacing-lg);
}

.sidebar-widgets {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.widget {
  background: var(--color-surface);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  border: 1px solid var(--color-border);
}

.widget-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
}

.widget-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.widget-list li {
  padding: var(--spacing-xs) 0;
  border-bottom: 1px dashed var(--color-border-light);
}

.widget-list li:last-child {
  border-bottom: none;
}

.widget-link {
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color 0.2s;
}

.widget-link:hover {
  color: var(--color-primary);
}

.tag-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
}

.tag-item {
  display: inline-block;
  padding: 2px 10px;
  background: var(--color-bg-secondary);
  border-radius: var(--radius-full);
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: all 0.2s;
}

.tag-item:hover {
  background: var(--color-primary);
  color: #fff;
}
</style>
