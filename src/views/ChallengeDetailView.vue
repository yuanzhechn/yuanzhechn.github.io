<template>
  <BlogLayout immersive :style="pageThemeStyle">
    <template #content>
      <LoadingSpinner v-if="challengeStore.loading" />
      <ErrorState v-else-if="challengeStore.error" :message="challengeStore.error" />
      <article v-else-if="challengeStore.currentChallenge" class="challenge-article">
        <header class="challenge-heading">
          <div>
            <p class="challenge-number">
              CHALLENGE {{ String(challengeStore.currentChallenge.sequence).padStart(2, '0') }}
            </p>
            <h1>{{ challengeStore.currentChallenge.title }}</h1>
            <div class="challenge-meta">
              <span>{{ formatDate(challengeStore.currentChallenge.publishedAt) }}</span>
              <span>截止 {{ formatDate(challengeStore.currentChallenge.dueAt) }}</span>
              <span>{{ difficultyLabel }}</span>
            </div>
          </div>
          <div class="challenge-actions">
            <RouterLink
              v-if="authenticated"
              :to="{ name: 'admin-publish', query: { edit: challengeStore.currentChallenge.slug, collection: 'challenges' } }"
            >
              编辑题目
            </RouterLink>
            <MarkdownThemePicker />
          </div>
        </header>
        <MarkdownRenderer
          ref="markdownRenderer"
          :content="challengeStore.currentChallenge.content"
        />
      </article>
    </template>

    <template #sidebar>
      <aside v-if="challengeStore.currentChallenge" class="challenge-sidebar">
        <h3>题目标签</h3>
        <div class="sidebar-tags">
          <span v-for="tag in challengeStore.currentChallenge.tags" :key="tag"># {{ tag }}</span>
        </div>
        <RouterLink to="/challenges">返回 {{ challengeStore.currentChallenge.groupTitle }}</RouterLink>
      </aside>
    </template>
  </BlogLayout>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import BlogLayout from '@/layouts/BlogLayout.vue'
import MarkdownRenderer from '@/components/common/MarkdownRenderer.vue'
import MarkdownThemePicker from '@/components/common/MarkdownThemePicker.vue'
import ErrorState from '@/components/ui/ErrorState.vue'
import LoadingSpinner from '@/components/ui/LoadingSpinner.vue'
import { useChallengeStore } from '@/stores/challenge'
import { useMarkdownTheme } from '@/composables/useMarkdownTheme'
import { formatDate } from '@/utils/date'
import { useAdminSession } from '@/composables/useAdminSession'

const route = useRoute()
const challengeStore = useChallengeStore()
const markdownRenderer = ref<InstanceType<typeof MarkdownRenderer>>()
const { pageThemeStyle } = useMarkdownTheme()
const { authenticated, checkSession } = useAdminSession()

const difficultyLabel = computed(() => {
  const difficulty = challengeStore.currentChallenge?.difficulty
  return difficulty === 'hard' ? '挑战' : difficulty === 'medium' ? '进阶' : '入门'
})

function loadChallenge() {
  const groupParam = route.params.groupSlug
  const slugParam = route.params.slug
  const groupSlug = Array.isArray(groupParam) ? groupParam.join('/') : groupParam
  const slug = Array.isArray(slugParam) ? slugParam.join('/') : slugParam
  if (groupSlug && slug) challengeStore.fetchChallengeBySlug(groupSlug, slug)
}

watch(() => [route.params.groupSlug, route.params.slug], loadChallenge, { immediate: true })
onMounted(() => checkSession())
</script>

<style scoped>
.challenge-heading {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
}

.challenge-number {
  margin-bottom: 0.5rem;
  color: var(--color-primary);
  font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
  font-size: 0.76rem;
  font-weight: 800;
}

.challenge-heading h1 {
  margin-bottom: 0.65rem;
  font-size: 1.8rem;
}

.challenge-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem 1rem;
  color: var(--color-text-secondary);
  font-size: 0.82rem;
}

.challenge-actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.challenge-actions > a {
  padding: 0.55rem 0.8rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  color: var(--color-text);
  font-size: 0.82rem;
  font-weight: 700;
  text-decoration: none;
}

.challenge-sidebar {
  position: sticky;
  top: calc(var(--header-height) + var(--spacing-lg));
  display: grid;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: color-mix(in srgb, var(--reader-surface) 92%, transparent);
  backdrop-filter: blur(14px);
}

.challenge-sidebar h3 {
  font-size: 0.95rem;
}

.sidebar-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.sidebar-tags span {
  color: var(--color-text-secondary);
  font-size: 0.78rem;
}

.challenge-sidebar a {
  color: var(--color-primary);
  font-size: 0.84rem;
  font-weight: 700;
  text-decoration: none;
}

@media (max-width: 640px) {
  .challenge-heading {
    flex-direction: column;
  }
}
</style>
