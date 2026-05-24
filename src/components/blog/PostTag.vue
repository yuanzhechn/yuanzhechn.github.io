<template>
  <RouterLink :to="`/tag/${tag}`" class="post-tag">
    # {{ tag }}
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  tag: string
}>()
</script>

<style scoped>
.post-tag {
  display: inline-block;
  padding: 2px 10px;
  background: var(--color-bg-secondary);
  border-radius: var(--radius-full);
  font-size: 0.8rem;
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: all 0.2s;
}

.post-tag:hover {
  background: var(--color-primary);
  color: #fff;
}
</style>
