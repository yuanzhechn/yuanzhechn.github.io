<template>
  <DefaultLayout>
    <section class="challenge-page">
      <header class="challenge-header">
        <div>
          <p>Periodic Challenge</p>
          <h1>每期一题</h1>
        </div>
        <span>{{ challengeStore.challenges.length }} 道题目</span>
      </header>

      <p class="challenge-intro">
        定期发布一道值得动手的题目。题型可以是算法、JavaScript、CSS、系统设计或工程实践。
      </p>

      <LoadingSpinner v-if="challengeStore.loading" />
      <ErrorState v-else-if="challengeStore.error" :message="challengeStore.error" />
      <div v-else class="challenge-list">
        <ChallengeCard
          v-for="challenge in challengeStore.challenges"
          :key="challenge.id"
          :challenge="challenge"
        />
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
.challenge-page {
  max-width: 880px;
  margin: 0 auto;
}

.challenge-header {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: var(--spacing-lg);
  padding: var(--spacing-lg) 0;
  border-bottom: 1px solid var(--color-border);
}

.challenge-header p {
  margin-bottom: 0.35rem;
  color: var(--color-primary);
  font-size: 0.76rem;
  font-weight: 800;
  text-transform: uppercase;
}

.challenge-header h1 {
  font-size: 2rem;
}

.challenge-header > span {
  color: var(--color-text-secondary);
  font-size: 0.86rem;
}

.challenge-intro {
  max-width: 680px;
  margin: var(--spacing-lg) 0 var(--spacing-xl);
  color: var(--color-text-secondary);
}

@media (max-width: 640px) {
  .challenge-header {
    align-items: start;
    flex-direction: column;
  }
}
</style>
