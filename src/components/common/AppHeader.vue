<template>
  <header class="app-header">
    <div class="header-inner">
      <RouterLink to="/" class="header-logo">
        <span class="logo-text">{{ siteTitle }}</span>
      </RouterLink>
      <nav class="header-nav" :class="{ open: appStore.sidebarOpen }">
        <RouterLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="nav-link"
          active-class="nav-link--active"
        >
          {{ link.name }}
        </RouterLink>
      </nav>
      <div class="header-actions">
        <button class="theme-toggle" @click="appStore.toggleTheme" :title="appStore.isDark ? '切换到亮色模式' : '切换到暗色模式'">
          {{ appStore.isDark ? '☀' : '☾' }}
        </button>
        <button class="menu-toggle" @click="appStore.toggleSidebar">
          <span class="menu-bar" />
          <span class="menu-bar" />
          <span class="menu-bar" />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useAppStore } from '@/stores/app'

const siteTitle = 'My Blog'
const appStore = useAppStore()

const navLinks = [
  { name: '首页', path: '/' },
  { name: '文章', path: '/posts' },
  { name: '分类', path: '/categories' },
  { name: '标签', path: '/tags' },
  { name: '归档', path: '/archives' },
  { name: '关于', path: '/about' },
]
</script>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 100;
  height: var(--header-height);
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  backdrop-filter: blur(8px);
}

.header-inner {
  max-width: var(--content-max-width);
  height: 100%;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-logo {
  text-decoration: none;
}

.logo-text {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-text);
}

.header-nav {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
}

.nav-link {
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--radius-md);
  text-decoration: none;
  color: var(--color-text-secondary);
  font-size: 0.95rem;
  transition: all 0.2s;
}

.nav-link:hover {
  color: var(--color-text);
  background: var(--color-bg-secondary);
}

.nav-link--active {
  color: var(--color-primary);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.theme-toggle {
  background: none;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  width: 36px;
  height: 36px;
  cursor: pointer;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text);
  transition: background 0.2s;
}

.theme-toggle:hover {
  background: var(--color-bg-secondary);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--spacing-xs);
}

.menu-bar {
  display: block;
  width: 20px;
  height: 2px;
  background: var(--color-text);
  border-radius: 1px;
}

@media (max-width: 768px) {
  .header-nav {
    position: fixed;
    top: var(--header-height);
    left: 0;
    right: 0;
    bottom: 0;
    flex-direction: column;
    background: var(--color-surface);
    padding: var(--spacing-lg);
    align-items: stretch;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }

  .header-nav.open {
    transform: translateX(0);
  }

  .nav-link {
    padding: var(--spacing-sm) var(--spacing-md);
    font-size: 1.1rem;
  }

  .menu-toggle {
    display: flex;
  }
}
</style>
