import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { mockApi } from '@/api'
import type { Post, PostListItem, PostQueryParams } from '@/types'

export const usePostStore = defineStore('post', () => {
  const posts = ref<PostListItem[]>([])
  const currentPost = ref<Post | null>(null)
  const total = ref(0)
  const page = ref(1)
  const totalPages = ref(0)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const hasPosts = computed(() => posts.value.length > 0)
  const hasMore = computed(() => page.value < totalPages.value)
  const isEmpty = computed(() => !loading.value && posts.value.length === 0)

  async function fetchPosts(params: PostQueryParams = {}) {
    loading.value = true
    error.value = null
    try {
      const result = await mockApi.getPostList(params)
      posts.value = result.list
      total.value = result.total
      page.value = result.page
      totalPages.value = result.totalPages
    } catch (e) {
      error.value = e instanceof Error ? e.message : '加载文章列表失败'
    } finally {
      loading.value = false
    }
  }

  async function fetchPostBySlug(slug: string) {
    loading.value = true
    error.value = null
    currentPost.value = null
    try {
      const post = await mockApi.getPostBySlug(slug)
      currentPost.value = post
      if (!post) error.value = '文章不存在'
    } catch (e) {
      error.value = e instanceof Error ? e.message : '加载文章失败'
    } finally {
      loading.value = false
    }
  }

  function $reset() {
    posts.value = []
    currentPost.value = null
    total.value = 0
    page.value = 1
    totalPages.value = 0
    loading.value = false
    error.value = null
  }

  return {
    posts,
    currentPost,
    total,
    page,
    totalPages,
    loading,
    error,
    hasPosts,
    hasMore,
    isEmpty,
    fetchPosts,
    fetchPostBySlug,
    $reset,
  }
})
