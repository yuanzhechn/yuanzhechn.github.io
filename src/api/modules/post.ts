import { apiRequest } from '@/api/client'
import type { ArchiveItem, Category, Post, PostListResult, PostQueryParams, Tag } from '@/types'

function queryString(params: PostQueryParams): string {
  const search = new URLSearchParams()
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== '') search.set(key, String(value))
  }
  const query = search.toString()
  return query ? `?${query}` : ''
}

export const blogApi = {
  getPostList(params: PostQueryParams = {}) {
    return apiRequest<PostListResult>(`/api/posts${queryString(params)}`)
  },
  getPostBySlug(slug: string) {
    return apiRequest<Post>(`/api/posts/${encodeURIComponent(slug)}`).catch((error: unknown) => {
      if (error instanceof Error && 'status' in error && error.status === 404) return null
      throw error
    })
  },
  getCategories() {
    return apiRequest<Category[]>('/api/categories')
  },
  getTags() {
    return apiRequest<Tag[]>('/api/tags')
  },
  getArchives() {
    return apiRequest<ArchiveItem[]>('/api/archives')
  },
}
