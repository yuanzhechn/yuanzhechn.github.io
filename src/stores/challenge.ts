import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { challengeApi } from '@/api/modules/challenge'
import type { Challenge, ChallengeGroup, ChallengeListItem } from '@/types'

export const useChallengeStore = defineStore('challenge', () => {
  const challenges = ref<ChallengeListItem[]>([])
  const groups = ref<ChallengeGroup[]>([])
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
      groups.value = await challengeApi.getChallengeList()
      challenges.value = groups.value.flatMap((group) => group.challenges)
    } catch (caught) {
      error.value = caught instanceof Error ? caught.message : '加载题目列表失败'
    } finally {
      loading.value = false
    }
  }

  async function fetchChallengeBySlug(groupSlug: string, slug: string) {
    loading.value = true
    error.value = null
    currentChallenge.value = null
    try {
      currentChallenge.value = await challengeApi.getChallengeBySlug(groupSlug, slug)
      if (!currentChallenge.value) error.value = '题目不存在'
    } catch (caught) {
      error.value = caught instanceof Error ? caught.message : '加载题目失败'
    } finally {
      loading.value = false
    }
  }

  return {
    challenges,
    groups,
    currentChallenge,
    latestChallenge,
    loading,
    error,
    fetchChallenges,
    fetchChallengeBySlug,
  }
})
