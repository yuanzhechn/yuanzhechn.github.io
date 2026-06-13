import { apiRequest } from '@/api/client'
import type { DocumentGroup, LearningDocument } from '@/types'

export const documentApi = {
  listGroups() {
    return apiRequest<DocumentGroup[]>('/api/documents')
  },
  getBySlug(slug: string) {
    return apiRequest<LearningDocument>(`/api/documents/${encodeURIComponent(slug)}`)
  },
}
