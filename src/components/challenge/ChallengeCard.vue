<template>
  <RouterLink :to="`/challenge/${challenge.groupSlug}/${challenge.slug}`" class="challenge-card">
    <div class="challenge-index">NO. {{ String(challenge.sequence).padStart(2, '0') }}</div>
    <div class="challenge-copy">
      <div class="challenge-meta">
        <span :class="['difficulty', `difficulty-${challenge.difficulty}`]">
          {{ difficultyLabel }}
        </span>
        <span>{{ formatDate(challenge.publishedAt) }}</span>
        <span>{{ challenge.readingTime }} 分钟</span>
      </div>
      <h2>{{ challenge.title }}</h2>
      <p>{{ challenge.excerpt }}</p>
      <div class="challenge-tags">
        <span v-for="tag in challenge.tags" :key="tag"># {{ tag }}</span>
      </div>
    </div>
    <span class="challenge-arrow" aria-hidden="true">→</span>
  </RouterLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import type { ChallengeListItem } from '@/types'
import { formatDate } from '@/utils/date'

const props = defineProps<{
  challenge: ChallengeListItem
}>()

const difficultyLabel = computed(
  () =>
    ({
      easy: '入门',
      medium: '进阶',
      hard: '挑战',
    })[props.challenge.difficulty],
)
</script>

<style scoped>
.challenge-card {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 1.1rem;
  align-items: start;
  padding: 1.2rem 0;
  border-bottom: 1px solid var(--color-border);
  color: var(--color-text);
  text-decoration: none;
}

.challenge-card:first-child {
  border-top: 1px solid var(--color-border);
}

.challenge-index {
  min-width: 68px;
  padding-top: 0.2rem;
  color: var(--color-primary);
  font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
  font-size: 0.74rem;
  font-weight: 800;
}

.challenge-copy {
  display: grid;
  gap: 0.48rem;
  min-width: 0;
}

.challenge-meta,
.challenge-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem 0.75rem;
  color: var(--color-text-secondary);
  font-size: 0.76rem;
}

.difficulty {
  font-weight: 800;
}

.difficulty-easy {
  color: #16845b;
}

.difficulty-medium {
  color: #b76800;
}

.difficulty-hard {
  color: #d33d56;
}

.challenge-copy h2 {
  font-size: 1.08rem;
  line-height: 1.45;
}

.challenge-copy p {
  display: -webkit-box;
  overflow: hidden;
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  line-height: 1.65;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.challenge-tags span {
  color: color-mix(in srgb, var(--color-primary) 74%, var(--color-text-secondary));
}

.challenge-arrow {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-text-secondary);
  transition:
    transform 0.18s ease,
    border-color 0.18s ease,
    color 0.18s ease;
}

.challenge-card:hover .challenge-arrow {
  border-color: var(--color-primary);
  color: var(--color-primary);
  transform: translateX(3px);
}

@media (max-width: 640px) {
  .challenge-card {
    grid-template-columns: 1fr auto;
  }

  .challenge-index {
    grid-column: 1 / -1;
  }
}
</style>
