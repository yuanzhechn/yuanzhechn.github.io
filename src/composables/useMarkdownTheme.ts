import { computed, ref } from 'vue'
import { getMarkdownTheme, markdownThemes, type MarkdownThemeId } from '@/data/markdownThemes'

const storageKey = 'blog-markdown-theme'

function readSavedTheme(): MarkdownThemeId {
  const saved = localStorage.getItem(storageKey) as MarkdownThemeId | null
  return saved && markdownThemes.some((theme) => theme.id === saved) ? saved : 'mint'
}

const selectedThemeId = ref<MarkdownThemeId>(readSavedTheme())

export function useMarkdownTheme() {
  const selectedTheme = computed(() => getMarkdownTheme(selectedThemeId.value))

  function setMarkdownTheme(themeId: MarkdownThemeId) {
    selectedThemeId.value = themeId
    localStorage.setItem(storageKey, themeId)
  }

  return {
    markdownThemes,
    selectedTheme,
    selectedThemeId,
    setMarkdownTheme,
  }
}
