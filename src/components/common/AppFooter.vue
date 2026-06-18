<template>
  <footer class="app-footer">
    <div class="footer-inner">
      <div class="footer-info">
        <span class="footer-copy">&copy; {{ currentYear }} {{ siteTitle }}</span>
        <span class="footer-divider">/</span>
        <span class="footer-note">文章、训练计划与学习文档的长期整理处</span>
      </div>
      <nav class="footer-links" aria-label="页脚导航">
        <RouterLink v-for="link in footerLinks" :key="link.name" :to="link.to" class="footer-link">
          {{ link.name }}
        </RouterLink>
      </nav>
    </div>
  </footer>
</template>

<script setup lang="ts">
const siteTitle = 'RootUser'
const currentYear = new Date().getFullYear()
const footerLinks = [
  { name: '归档', to: '/archives' },
  { name: '导航', to: '/favorites' },
  { name: '关于', to: '/about' },
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
