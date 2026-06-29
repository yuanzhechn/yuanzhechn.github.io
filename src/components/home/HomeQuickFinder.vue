<template>
  <section class="quick-finder" aria-labelledby="quick-finder-title">
    <div class="finder-heading">
      <div>
        <p>Command Search</p>
        <h2 id="quick-finder-title">快速定位内容</h2>
      </div>
      <span>{{ posts.length }} 篇可检索</span>
    </div>

    <label class="search-field">
      <span aria-hidden="true">⌕</span>
      <input v-model.trim="keyword" type="search" placeholder="输入标题、摘要、分类或标签" />
      <kbd>/</kbd>
    </label>

    <div v-if="keyword" class="search-results">
      <RouterLink
        v-for="post in results"
        :key="post.id"
        :to="`/post/${post.slug || post.id}`"
        class="result-row"
      >
        <span class="result-title">{{ post.title }}</span>
        <span class="result-meta">{{ post.category }} · {{ post.readingTime }} 分钟</span>
      </RouterLink>
      <p v-if="results.length === 0" class="empty-result">没有找到匹配内容</p>
    </div>

    <div v-else class="finder-suggestions">
      <span>试试：</span>
      <button
        v-for="suggestion in suggestions"
        :key="suggestion"
        type="button"
        @click="keyword = suggestion"
      >
        {{ suggestion }}
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import type { PostListItem } from '@/types'

const props = defineProps<{
  posts: PostListItem[]
}>()

const keyword = ref('')

const suggestions = computed(() => {
  const values = new Set<string>()
  for (const post of props.posts) {
    for (const tag of post.tags) {
      values.add(tag)
      if (values.size >= 4) return [...values]
    }
  }
  return [...values]
})

const results = computed(() => {
  const query = keyword.value.toLowerCase()
  if (!query) return []

  return props.posts
    .filter((post) =>
      [post.title, post.excerpt, post.category, ...post.tags]
        .join(' ')
        .toLowerCase()
        .includes(query),
    )
    .slice(0, 6)
})

function focusSearch(event: KeyboardEvent) {
  if (event.key !== '/' || event.metaKey || event.ctrlKey || event.altKey) return
  const target = event.target as HTMLElement | null
  if (target?.matches('input, textarea, [contenteditable="true"]')) return

  event.preventDefault()
  document.querySelector<HTMLInputElement>('.quick-finder input')?.focus()
}

onMounted(() => window.addEventListener('keydown', focusSearch))
onBeforeUnmount(() => window.removeEventListener('keydown', focusSearch))
</script>

<style scoped>
.quick-finder {
  position: relative;
  display: grid;
  grid-template-columns: minmax(180px, 0.42fr) minmax(320px, 0.78fr);
  gap: var(--spacing-xl);
  align-items: center;
  margin-bottom: var(--spacing-2xl);
  padding: 1.15rem 0;
  border-block: 1px solid var(--color-border);
}

.finder-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 1rem;
}

.finder-heading p {
  color: var(--color-primary);
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
}

.finder-heading h2 {
  font-size: 1.08rem;
}

.finder-heading > span {
  color: var(--color-text-secondary);
  font-size: 0.72rem;
}

.search-field {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 0.72rem;
  align-items: center;
  min-height: 48px;
  padding: 0 0.85rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  box-shadow: var(--shadow-sm);
}

.search-field:focus-within {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 14%, transparent);
}

.search-field > span {
  color: var(--color-text-secondary);
  font-size: 1.25rem;
}

.search-field input {
  min-width: 0;
  border: 0;
  outline: 0;
  color: var(--color-text);
  font: inherit;
  background: transparent;
}

.search-field input::placeholder {
  color: var(--color-text-secondary);
}

.search-field kbd {
  padding: 0.08rem 0.42rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  color: var(--color-text-secondary);
  font-size: 0.72rem;
  background: var(--color-bg-secondary);
}

.search-results {
  position: absolute;
  z-index: 10;
  top: calc(100% - 0.4rem);
  right: 0;
  width: min(680px, 100%);
  padding: 0.45rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  box-shadow: var(--shadow-lg);
}

.result-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 1rem;
  align-items: center;
  min-height: 42px;
  padding: 0 0.65rem;
  border-radius: var(--radius-md);
  color: var(--color-text);
  text-decoration: none;
}

.result-row:hover {
  background: var(--color-bg-secondary);
}

.result-title {
  overflow: hidden;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.result-meta,
.empty-result {
  color: var(--color-text-secondary);
  font-size: 0.76rem;
}

.empty-result {
  padding: 0.8rem;
  text-align: center;
}

.finder-suggestions {
  position: absolute;
  right: 0.8rem;
  bottom: -1.65rem;
  display: flex;
  gap: 0.45rem;
  align-items: center;
  color: var(--color-text-secondary);
  font-size: 0.72rem;
}

.finder-suggestions button {
  border: 0;
  color: var(--color-primary);
  background: transparent;
  cursor: pointer;
}

@media (max-width: 780px) {
  .quick-finder {
    grid-template-columns: 1fr;
    gap: 0.8rem;
    padding-bottom: 2rem;
  }

  .finder-suggestions {
    right: auto;
    bottom: 0.45rem;
    left: 0;
    max-width: 100%;
    overflow: hidden;
  }

  .search-results {
    top: calc(100% - 1.6rem);
  }
}

@media (max-width: 520px) {
  .finder-heading > span,
  .search-field kbd {
    display: none;
  }

  .result-row {
    grid-template-columns: 1fr;
    gap: 0;
    padding-block: 0.45rem;
  }
}
</style>
