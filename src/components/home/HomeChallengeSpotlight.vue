<template>
  <section class="challenge-spotlight" aria-labelledby="challenge-spotlight-title">
    <div class="challenge-rail">
      <span>每期一题</span>
      <strong v-if="challenge">NO. {{ String(challenge.sequence).padStart(2, '0') }}</strong>
    </div>

    <div v-if="challenge" class="challenge-content">
      <div class="challenge-heading">
        <div>
          <p>{{ difficultyLabel }} · 截止 {{ formatDate(challenge.dueAt) }}</p>
          <h2 id="challenge-spotlight-title">{{ challenge.title }}</h2>
        </div>
        <RouterLink :to="`/challenge/${challenge.groupSlug}/${challenge.slug}`" class="challenge-action">
          查看题目 <span aria-hidden="true">→</span>
        </RouterLink>
      </div>
      <p class="challenge-excerpt">{{ challenge.excerpt }}</p>
      <div class="challenge-tags">
        <span v-for="tag in challenge.tags" :key="tag"># {{ tag }}</span>
      </div>
    </div>

    <div v-else class="challenge-content">
      <h2 id="challenge-spotlight-title">题目正在准备中</h2>
      <RouterLink to="/challenges" class="challenge-action">查看题目栏目</RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import type { ChallengeListItem } from '@/types'
import { formatDate } from '@/utils/date'

const props = defineProps<{
  challenge: ChallengeListItem | null
}>()

const difficultyLabel = computed(() => {
  if (props.challenge?.difficulty === 'hard') return '挑战'
  if (props.challenge?.difficulty === 'medium') return '进阶'
  return '入门'
})
</script>

<style scoped>
.challenge-spotlight {
  display: grid;
  grid-template-columns: 128px minmax(0, 1fr);
  margin-bottom: var(--spacing-2xl);
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
}

.challenge-rail {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  padding: var(--spacing-lg);
  color: #fff;
  background:
    linear-gradient(165deg, rgba(255, 255, 255, 0.2), transparent 42%), var(--color-primary);
}

.challenge-rail span {
  font-size: 0.76rem;
  font-weight: 800;
  writing-mode: vertical-rl;
}

.challenge-rail strong {
  font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
  font-size: 0.82rem;
}

.challenge-content {
  display: grid;
  gap: 0.8rem;
  padding: 1.35rem 1.5rem;
}

.challenge-heading {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 1rem;
}

.challenge-heading p {
  margin-bottom: 0.3rem;
  color: var(--color-text-secondary);
  font-size: 0.76rem;
}

.challenge-heading h2 {
  font-size: 1.25rem;
}

.challenge-action {
  flex-shrink: 0;
  color: var(--color-primary);
  font-size: 0.84rem;
  font-weight: 800;
  text-decoration: none;
}

.challenge-excerpt {
  max-width: 760px;
  color: var(--color-text-secondary);
  font-size: 0.92rem;
}

.challenge-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  color: color-mix(in srgb, var(--color-primary) 75%, var(--color-text-secondary));
  font-size: 0.76rem;
}

@media (max-width: 640px) {
  .challenge-spotlight {
    grid-template-columns: 1fr;
  }

  .challenge-rail {
    flex-direction: row;
    padding: 0.7rem 1rem;
  }

  .challenge-rail span {
    writing-mode: initial;
  }

  .challenge-heading {
    flex-direction: column;
  }
}
</style>
