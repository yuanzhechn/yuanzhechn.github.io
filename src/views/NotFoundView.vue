<template>
  <DefaultLayout>
    <div class="not-found">
      <h1 class="not-found-code">404</h1>
      <p class="not-found-text">页面不存在</p>
      <RouterLink to="/" class="not-found-link">返回首页</RouterLink>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
</script>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
}

.not-found-code {
  font-size: 6rem;
  font-weight: 700;
  color: var(--color-primary);
  line-height: 1;
  margin-bottom: var(--spacing-md);
}

.not-found-text {
  font-size: 1.25rem;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-xl);
}

.not-found-link {
  color: var(--color-primary);
  text-decoration: none;
  padding: var(--spacing-sm) var(--spacing-lg);
  border: 1px solid var(--color-primary);
  border-radius: var(--radius-md);
  transition: all 0.2s;
}

.not-found-link:hover {
  background: var(--color-primary);
  color: #fff;
}
</style>
