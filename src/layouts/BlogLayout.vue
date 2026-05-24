<template>
  <div class="blog-layout">
    <AppHeader />
    <main class="blog-main">
      <div class="blog-container">
        <section class="blog-content">
          <slot name="content" />
        </section>
        <aside class="blog-sidebar">
          <slot name="sidebar" />
        </aside>
      </div>
    </main>
    <AppFooter />
    <BackToTop />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/common/AppHeader.vue'
import AppFooter from '@/components/common/AppFooter.vue'
import BackToTop from '@/components/common/BackToTop.vue'
</script>

<style scoped>
.blog-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.blog-main {
  flex: 1;
  max-width: var(--content-max-width);
  width: 100%;
  margin: 0 auto;
  padding: var(--spacing-lg) var(--spacing-md);
}

.blog-container {
  display: flex;
  gap: var(--spacing-xl);
}

.blog-content {
  flex: 1;
  min-width: 0;
}

.blog-sidebar {
  width: 280px;
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .blog-container {
    flex-direction: column;
  }
  .blog-sidebar {
    width: 100%;
  }
}
</style>
