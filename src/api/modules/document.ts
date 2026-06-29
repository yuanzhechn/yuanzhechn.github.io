import { apiRequest, shouldUseStaticContent } from '@/api/client'
import { staticContentApi } from '@/api/staticContent'
import type { DocumentGroup, LearningDocument } from '@/types'

async function withStaticFallback<T>(request: () => Promise<T>, fallback: () => Promise<T>) {
  if (shouldUseStaticContent) return fallback()
  return request().catch(fallback)
}

export const documentApi = {
  listGroups() {
    return withStaticFallback(() => apiRequest<DocumentGroup[]>('/api/documents'), staticContentApi.listDocumentGroups)
  },
  getBySlug(groupSlug: string, slug: string) {
    return withStaticFallback(
      () => apiRequest<LearningDocument>(
        `/api/documents/${encodeURIComponent(groupSlug)}/${encodeURIComponent(slug)}`,
      ),
      async () => {
        const document = await staticContentApi.getDocumentBySlug(groupSlug, slug)
        if (!document) throw new Error('学习文档不存在')
        return document as LearningDocument
      },
    )
  },
}
