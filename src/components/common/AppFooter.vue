<template>
  <footer class="app-footer">
    <div class="footer-inner">
      <div class="footer-info">
        <span class="footer-copy">&copy; {{ currentYear }} {{ siteTitle }}</span>
        <span class="footer-divider">|</span>
        <span class="footer-tech">Powered by Vue 3 + Vite</span>
      </div>
      <div class="footer-links">
        <a v-for="link in footerLinks" :key="link.name" :href="link.url" target="_blank" rel="noopener noreferrer" class="footer-link">{{ link.name }}</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const siteTitle = 'My Blog'
const currentYear = new Date().getFullYear()
const footerLinks = [
  { name: 'GitHub', url: '#' },
  { name: 'RSS', url: '#' },
]
</script>

<style scoped>
.app-footer {
  background: var(--color-surface);
  border-top: 1px solid var(--color-border);
  padding: var(--spacing-xl) 0;
  margin-top: var(--spacing-2xl);
}

.footer-inner {
  max-width: var(--content-max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-info {
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.footer-links {
  display: flex;
  gap: var(--spacing-md);
}

.footer-link {
  color: var(--color-text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s;
}

.footer-link:hover {
  color: var(--color-primary);
}

@media (max-width: 640px) {
  .footer-inner {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
}
</style>
