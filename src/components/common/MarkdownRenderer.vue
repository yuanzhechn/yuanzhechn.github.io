<template>
  <div ref="host" class="markdown-renderer-host" />
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useMarkdownTheme } from '@/composables/useMarkdownTheme'
import { getMarkdownThemeCss } from '@/data/markdownThemes'
import { renderMarkdown } from '@/utils/markdown'

const props = defineProps<{
  content: string
}>()

const host = ref<HTMLElement>()
const html = computed(() => renderMarkdown(props.content))
const { selectedThemeId } = useMarkdownTheme()

let shadowRoot: ShadowRoot | null = null
let styleElement: HTMLStyleElement | null = null
let articleElement: HTMLElement | null = null

function ensureShadowContent() {
  if (!host.value) return

  shadowRoot ??= host.value.attachShadow({ mode: 'open' })
  if (!styleElement) {
    styleElement = document.createElement('style')
    shadowRoot.append(styleElement)
  }
  if (!articleElement) {
    articleElement = document.createElement('article')
    articleElement.id = 'write'
    shadowRoot.append(articleElement)
  }
}

function updateTheme() {
  ensureShadowContent()
  if (!styleElement || !articleElement) return

  styleElement.textContent = getMarkdownThemeCss(selectedThemeId.value)
  articleElement.dataset.markdownTheme = selectedThemeId.value
}

function updateHtml() {
  ensureShadowContent()
  if (!articleElement) return

  articleElement.innerHTML = html.value
  requestAnimationFrame(scrollToCurrentHash)
}

function scrollToHeading(id: string) {
  const target = shadowRoot?.getElementById(id)
  if (!target) return

  target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  history.replaceState(null, '', `#${encodeURIComponent(id)}`)
}

function scrollToCurrentHash() {
  const hash = decodeURIComponent(location.hash.slice(1))
  if (hash) shadowRoot?.getElementById(hash)?.scrollIntoView({ block: 'start' })
}

watch(
  host,
  () => {
    updateTheme()
    updateHtml()
  },
  { immediate: true, flush: 'post' },
)
watch(selectedThemeId, updateTheme)
watch(html, updateHtml)

onMounted(() => window.addEventListener('hashchange', scrollToCurrentHash))
onBeforeUnmount(() => window.removeEventListener('hashchange', scrollToCurrentHash))

defineExpose({ scrollToHeading })
</script>

<style scoped>
.markdown-renderer-host {
  display: block;
  min-width: 0;
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  box-shadow: var(--shadow-sm);
}
</style>
