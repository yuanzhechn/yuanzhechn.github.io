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
      <ContentTaxonomySidebar />
    </template>
  </BlogLayout>
</template>

<script setup lang="ts">
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import BlogLayout from '@/layouts/BlogLayout.vue'
import PostList from '@/components/blog/PostList.vue'
import PostPagination from '@/components/blog/PostPagination.vue'
import { usePostStore } from '@/stores/post'
import ContentTaxonomySidebar from '@/components/content/ContentTaxonomySidebar.vue'

const route = useRoute()
const postStore = usePostStore()

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

</style>
