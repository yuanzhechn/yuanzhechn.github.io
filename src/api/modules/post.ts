import { apiRequest, shouldUseStaticContent } from '@/api/client'
import { staticContentApi } from '@/api/staticContent'
import type { ArchiveItem, Category, Post, PostListResult, PostQueryParams, Tag, TagContentResult } from '@/types'

async function withStaticFallback<T>(request: () => Promise<T>, fallback: () => Promise<T>) {
  if (shouldUseStaticContent) return fallback()
  return request().catch(fallback)
}

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
    return withStaticFallback(
      () => apiRequest<PostListResult>(`/api/posts${queryString(params)}`),
      () => staticContentApi.getPostList(params),
    )
  },
  getPostBySlug(slug: string) {
    return withStaticFallback(
      () => apiRequest<Post>(`/api/posts/${encodeURIComponent(slug)}`).catch((error: unknown) => {
        if (error instanceof Error && 'status' in error && error.status === 404) return null
        throw error
      }),
      () => staticContentApi.getPostBySlug(slug),
    )
  },
  getCategories() {
    return withStaticFallback(() => apiRequest<Category[]>('/api/categories'), staticContentApi.getCategories)
  },
  getTags() {
    return withStaticFallback(() => apiRequest<Tag[]>('/api/tags'), staticContentApi.getTags)
  },
  getContentByTag(tag: string) {
    return withStaticFallback(
      () => apiRequest<TagContentResult>(`/api/tags/${encodeURIComponent(tag)}/content`),
      () => staticContentApi.getContentByTag(tag),
    )
  },
  getArchives() {
    return withStaticFallback(() => apiRequest<ArchiveItem[]>('/api/archives'), staticContentApi.getArchives)
  },
}
