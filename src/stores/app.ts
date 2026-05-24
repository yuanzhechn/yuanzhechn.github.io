import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export type ThemeMode = 'light' | 'dark'

export const useAppStore = defineStore('app', () => {
  const sidebarOpen = ref(false)
  const theme = ref<ThemeMode>((localStorage.getItem('blog-theme') as ThemeMode) || 'light')
  const searchKeyword = ref('')

  const isDark = computed(() => theme.value === 'dark')

  function toggleSidebar() {
    sidebarOpen.value = !sidebarOpen.value
  }

  function setTheme(mode: ThemeMode) {
    theme.value = mode
    localStorage.setItem('blog-theme', mode)
    document.documentElement.setAttribute('data-theme', mode)
  }

  function toggleTheme() {
    setTheme(theme.value === 'light' ? 'dark' : 'light')
  }

  function initTheme() {
    const saved = (localStorage.getItem('blog-theme') as ThemeMode) || 'light'
    document.documentElement.setAttribute('data-theme', saved)
  }

  return {
    sidebarOpen,
    theme,
    searchKeyword,
    isDark,
    toggleSidebar,
    setTheme,
    toggleTheme,
    initTheme,
  }
})
