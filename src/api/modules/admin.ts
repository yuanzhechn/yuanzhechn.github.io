import { apiRequest } from '@/api/client'
import type { ChallengeCadence, ChallengeDifficulty } from '@/types'

export type AdminCollection = 'posts' | 'challenges' | 'documents'

export interface EditableContent {
  collection: AdminCollection
  title: string
  slug: string
  category?: string
  groupSlug?: string
  groupTitle?: string
  order?: number
  tags: string[]
  excerpt?: string
  isTop?: boolean
  isPublished: boolean
  difficulty?: ChallengeDifficulty
  sequence?: number
  cadence?: ChallengeCadence
  dueAt?: string
  content: string
}

export const adminApi = {
  session() {
    return apiRequest<{ authenticated: boolean }>('/api/admin/session')
  },
  login(password: string) {
    return apiRequest<{ authenticated: boolean }>('/api/admin/login', {
      method: 'POST',
      body: JSON.stringify({ password }),
    })
  },
  logout() {
    return apiRequest<{ authenticated: boolean }>('/api/admin/logout', { method: 'POST' })
  },
  getContent(collection: AdminCollection, slug: string) {
    return apiRequest<EditableContent>(`/api/admin/content/${collection}/${slug}`)
  },
  createContent(collection: AdminCollection, input: EditableContent) {
    return apiRequest<{ slug: string; collection: AdminCollection }>(
      `/api/admin/content/${collection}`,
      { method: 'POST', body: JSON.stringify(input) },
    )
  },
  updateContent(collection: AdminCollection, slug: string, input: EditableContent) {
    return apiRequest<{ slug: string; collection: AdminCollection }>(
      `/api/admin/content/${collection}/${slug}`,
      { method: 'PUT', body: JSON.stringify(input) },
    )
  },
}
