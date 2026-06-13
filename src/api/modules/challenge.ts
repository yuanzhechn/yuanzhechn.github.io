import { apiRequest } from '@/api/client'
import type { Challenge, ChallengeGroup } from '@/types'

export const challengeApi = {
  getChallengeList() {
    return apiRequest<ChallengeGroup[]>('/api/challenges')
  },
  getChallengeBySlug(groupSlug: string, slug: string) {
    return apiRequest<Challenge>(
      `/api/challenges/${encodeURIComponent(groupSlug)}/${encodeURIComponent(slug)}`,
    ).catch(
      (error: unknown) => {
        if (error instanceof Error && 'status' in error && error.status === 404) return null
        throw error
      },
    )
  },
  async getLatestChallenge() {
    const groups = await this.getChallengeList()
    return groups.flatMap((group) => group.challenges)[0] || null
  },
}
