import { apiRequest } from '@/api/client'
import type { Challenge, ChallengeListItem } from '@/types'

export const challengeApi = {
  getChallengeList() {
    return apiRequest<ChallengeListItem[]>('/api/challenges')
  },
  getChallengeBySlug(slug: string) {
    return apiRequest<Challenge>(`/api/challenges/${encodeURIComponent(slug)}`).catch(
      (error: unknown) => {
        if (error instanceof Error && 'status' in error && error.status === 404) return null
        throw error
      },
    )
  },
  async getLatestChallenge() {
    const challenges = await this.getChallengeList()
    return challenges[0] || null
  },
}
