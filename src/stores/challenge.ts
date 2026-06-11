import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { challengeApi } from '@/api/modules/challenge'
import type { Challenge, ChallengeListItem } from '@/types'

export const useChallengeStore = defineStore('challenge', () => {
  const challenges = ref<ChallengeListItem[]>([])
  const currentChallenge = ref<Challenge | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const latestChallenge = computed(() => {
    const today = new Date().toISOString().slice(0, 10)
    return (
      challenges.value.find((challenge) => challenge.publishedAt <= today) ??
      challenges.value.at(-1) ??
      null
    )
  })

  async function fetchChallenges() {
    loading.value = true
    error.value = null
    try {
      challenges.value = await challengeApi.getChallengeList()
    } catch (caught) {
      error.value = caught instanceof Error ? caught.message : '加载题目列表失败'
    } finally {
      loading.value = false
    }
  }

  async function fetchChallengeBySlug(slug: string) {
    loading.value = true
    error.value = null
    currentChallenge.value = null
    try {
      currentChallenge.value = await challengeApi.getChallengeBySlug(slug)
      if (!currentChallenge.value) error.value = '题目不存在'
    } catch (caught) {
      error.value = caught instanceof Error ? caught.message : '加载题目失败'
    } finally {
      loading.value = false
    }
  }

  return {
    challenges,
    currentChallenge,
    latestChallenge,
    loading,
    error,
    fetchChallenges,
    fetchChallengeBySlug,
  }
})
