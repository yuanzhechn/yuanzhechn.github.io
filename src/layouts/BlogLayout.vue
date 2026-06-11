<template>
  <div class="blog-layout" :class="{ 'blog-layout--immersive': immersive }">
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

withDefaults(
  defineProps<{
    immersive?: boolean
  }>(),
  {
    immersive: false,
  },
)
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

.blog-layout--immersive {
  --color-primary: var(--reader-primary);
  --color-primary-hover: color-mix(in srgb, var(--reader-primary) 84%, var(--reader-text));
  --color-text: var(--reader-text);
  --color-text-secondary: var(--reader-muted);
  --color-bg: var(--reader-background);
  --color-bg-secondary: color-mix(in srgb, var(--reader-surface) 82%, var(--reader-background));
  --color-surface: var(--reader-surface);
  --color-border: var(--reader-border);
  --color-border-light: color-mix(in srgb, var(--reader-border) 66%, transparent);

  background: var(--reader-background);
  color: var(--reader-text);
  transition:
    color 0.22s ease,
    background-color 0.22s ease;
}

.blog-layout--immersive .blog-main {
  max-width: none;
  margin: 0;
  padding: 0;
}

.blog-layout--immersive .blog-container {
  width: 100%;
  max-width: 1240px;
  min-height: calc(100vh - var(--header-height));
  margin: 0 auto;
  padding: clamp(1.25rem, 3vw, 2.5rem) clamp(1rem, 4vw, 3rem) 3rem;
}

.blog-layout--immersive .blog-content {
  min-width: 0;
}

.blog-layout--immersive .blog-sidebar {
  padding-top: 0.15rem;
}

@media (max-width: 768px) {
  .blog-container {
    flex-direction: column;
  }
  .blog-sidebar {
    width: 100%;
  }

  .blog-layout--immersive .blog-container {
    padding: 1.25rem 1rem 2rem;
  }
}
</style>
