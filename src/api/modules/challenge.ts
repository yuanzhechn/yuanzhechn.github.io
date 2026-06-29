import { apiRequest, shouldUseStaticContent } from '@/api/client'
import { staticContentApi } from '@/api/staticContent'
import type { Challenge, ChallengeGroup } from '@/types'

async function withStaticFallback<T>(request: () => Promise<T>, fallback: () => Promise<T>) {
  if (shouldUseStaticContent) return fallback()
  return request().catch(fallback)
}

export const challengeApi = {
  getChallengeList() {
    return withStaticFallback(() => apiRequest<ChallengeGroup[]>('/api/challenges'), staticContentApi.listChallengeGroups)
  },
  getChallengeBySlug(groupSlug: string, slug: string) {
    return withStaticFallback(
      () => apiRequest<Challenge>(
        `/api/challenges/${encodeURIComponent(groupSlug)}/${encodeURIComponent(slug)}`,
      ).catch(
        (error: unknown) => {
          if (error instanceof Error && 'status' in error && error.status === 404) return null
          throw error
        },
      ),
      () => staticContentApi.getChallengeBySlug(groupSlug, slug),
    )
  },
  async getLatestChallenge() {
    const groups = await this.getChallengeList()
    return groups.flatMap((group) => group.challenges)[0] || null
  },
}
