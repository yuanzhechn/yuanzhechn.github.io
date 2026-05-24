<template>
  <div class="default-layout">
    <AppHeader />
    <main class="main-content">
      <slot />
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
.default-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  max-width: var(--content-max-width);
  width: 100%;
  margin: 0 auto;
  padding: var(--spacing-lg) var(--spacing-md);
}
</style>
