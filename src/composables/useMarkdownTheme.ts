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
  const pageThemeStyle = computed(() => {
    const theme = selectedTheme.value

    return {
      '--reader-primary': theme.colors[0],
      '--reader-background': theme.pageBackground,
      '--reader-surface': theme.pageSurface,
      '--reader-text': theme.pageText,
      '--reader-muted': theme.pageMuted,
      '--reader-border':
        theme.mode === 'dark'
          ? `color-mix(in srgb, ${theme.colors[0]} 18%, ${theme.pageSurface})`
          : `color-mix(in srgb, ${theme.colors[0]} 22%, ${theme.pageSurface})`,
      '--reader-shadow':
        theme.mode === 'dark'
          ? '0 18px 48px rgba(0, 0, 0, 0.28)'
          : '0 18px 48px rgba(40, 65, 70, 0.09)',
    }
  })

  function setMarkdownTheme(themeId: MarkdownThemeId) {
    selectedThemeId.value = themeId
    localStorage.setItem(storageKey, themeId)
  }

  return {
    markdownThemes,
    selectedTheme,
    selectedThemeId,
    pageThemeStyle,
    setMarkdownTheme,
  }
}
