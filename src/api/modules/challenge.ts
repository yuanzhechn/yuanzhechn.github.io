import { getChallengeBySlug, getChallengeList, getLatestChallenge } from '@/content/challenges'

function delay<T>(data: T, ms = 120): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(data), ms))
}

export const challengeApi = {
  async getChallengeList() {
    return delay(getChallengeList())
  },
  async getChallengeBySlug(slug: string) {
    return delay(getChallengeBySlug(slug))
  },
  async getLatestChallenge() {
    return delay(getLatestChallenge())
  },
}
