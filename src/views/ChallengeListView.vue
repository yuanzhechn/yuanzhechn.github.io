<template>
  <DefaultLayout>
    <section class="challenge-page">
      <header class="challenge-header">
        <div>
          <p>TRAINING LIBRARY</p>
          <h1>训练计划</h1>
        </div>
        <span>{{ challengeStore.challenges.length }} 道题目</span>
      </header>

      <p class="challenge-intro">
        按训练集整理不同方向的题目，每个训练集都可以持续追加独立的 Markdown 题目。
      </p>

      <LoadingSpinner v-if="challengeStore.loading" />
      <ErrorState v-else-if="challengeStore.error" :message="challengeStore.error" />
      <div v-else class="group-list">
        <section v-for="group in challengeStore.groups" :key="group.slug" class="challenge-group">
          <header>
            <div>
              <span>{{ group.challenges.length }} 道题</span>
              <h2>{{ group.title }}</h2>
            </div>
            <code>{{ group.slug }}</code>
          </header>
          <div>
            <ChallengeCard
              v-for="challenge in group.challenges"
              :key="challenge.id"
              :challenge="challenge"
            />
          </div>
        </section>
      </div>
    </section>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import ChallengeCard from '@/components/challenge/ChallengeCard.vue'
import ErrorState from '@/components/ui/ErrorState.vue'
import LoadingSpinner from '@/components/ui/LoadingSpinner.vue'
import { useChallengeStore } from '@/stores/challenge'

const challengeStore = useChallengeStore()
onMounted(() => challengeStore.fetchChallenges())
</script>

<style scoped>
.challenge-page { max-width: 920px; margin: 0 auto; }
.challenge-header { display: flex; align-items: end; justify-content: space-between; gap: var(--spacing-lg); padding: var(--spacing-lg) 0; border-bottom: 1px solid var(--color-border); }
.challenge-header p { margin-bottom: .35rem; color: var(--color-primary); font-size: .76rem; font-weight: 800; }
.challenge-header h1 { font-size: 2rem; }
.challenge-header > span, .challenge-intro { color: var(--color-text-secondary); }
.challenge-intro { max-width: 680px; margin: var(--spacing-lg) 0 var(--spacing-xl); }
.group-list { display: grid; gap: 1rem; }
.challenge-group { border: 1px solid var(--color-border); border-radius: var(--radius-md); background: var(--color-surface); overflow: hidden; }
.challenge-group > header { display: flex; justify-content: space-between; gap: 1rem; padding: 1rem 1.2rem; border-bottom: 1px solid var(--color-border); background: var(--color-bg-secondary); }
.challenge-group header span, .challenge-group code { color: var(--color-text-secondary); font-size: .72rem; }
.challenge-group h2 { margin-top: .2rem; font-size: 1.15rem; }
.challenge-group > div { padding: 0 1.2rem; }
@media (max-width: 640px) { .challenge-header { align-items: start; flex-direction: column; } }
</style>
