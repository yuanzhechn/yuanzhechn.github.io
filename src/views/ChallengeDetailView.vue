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
        <section class="outline-section">
          <p class="widget-eyebrow">Outline</p>
          <h3>题目大纲</h3>
          <PostToc :items="toc" @navigate="scrollToHeading" />
        </section>
        <section class="tag-section">
        <h3>题目标签</h3>
        <div class="sidebar-tags">
          <span v-for="tag in challengeStore.currentChallenge.tags" :key="tag"># {{ tag }}</span>
        </div>
        </section>
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
import PostToc from '@/components/blog/PostToc.vue'
import ErrorState from '@/components/ui/ErrorState.vue'
import LoadingSpinner from '@/components/ui/LoadingSpinner.vue'
import { useChallengeStore } from '@/stores/challenge'
import { useMarkdownTheme } from '@/composables/useMarkdownTheme'
import { formatDate } from '@/utils/date'
import { extractToc } from '@/utils/markdown'

const route = useRoute()
const challengeStore = useChallengeStore()
const markdownRenderer = ref<InstanceType<typeof MarkdownRenderer>>()
const { pageThemeStyle } = useMarkdownTheme()

const difficultyLabel = computed(() => {
  const difficulty = challengeStore.currentChallenge?.difficulty
  return difficulty === 'hard' ? '挑战' : difficulty === 'medium' ? '进阶' : '入门'
})

const toc = computed(() =>
  challengeStore.currentChallenge ? extractToc(challengeStore.currentChallenge.content) : [],
)

function loadChallenge() {
  const groupParam = route.params.groupSlug
  const slugParam = route.params.slug
  const groupSlug = Array.isArray(groupParam) ? groupParam.join('/') : groupParam
  const slug = Array.isArray(slugParam) ? slugParam.join('/') : slugParam
  if (groupSlug && slug) challengeStore.fetchChallengeBySlug(groupSlug, slug)
}

function scrollToHeading(id: string) {
  markdownRenderer.value?.scrollToHeading(id)
}

watch(() => [route.params.groupSlug, route.params.slug], loadChallenge, { immediate: true })

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

.challenge-actions > a,



.challenge-sidebar {
  display: grid;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: color-mix(in srgb, var(--reader-surface) 92%, transparent);
  backdrop-filter: blur(14px);
  box-shadow: 0 18px 48px color-mix(in srgb, var(--reader-text) 8%, transparent);
}

.challenge-sidebar h3 {
  font-size: 0.95rem;
}

.outline-section,
.tag-section {
  display: grid;
  gap: 0.75rem;
}

.widget-eyebrow {
  margin: 0 0 -0.45rem;
  color: var(--color-primary);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
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
