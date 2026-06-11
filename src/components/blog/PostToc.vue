<template>
  <nav class="post-toc">
    <ul class="toc-list">
      <li v-for="item in items" :key="item.id" :class="['toc-item', `toc-level-${item.level}`]">
        <a :href="`#${item.id}`" class="toc-link" @click.prevent="emit('navigate', item.id)">
          {{ item.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import type { TableOfContent } from '@/types'

defineProps<{
  items: TableOfContent[]
}>()

const emit = defineEmits<{
  navigate: [id: string]
}>()
</script>

<style scoped>
.toc-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.toc-item {
  margin-bottom: var(--spacing-xs);
}

.toc-level-2 {
  padding-left: 0;
}

.toc-level-3 {
  padding-left: var(--spacing-md);
}

.toc-level-4 {
  padding-left: calc(var(--spacing-md) * 2);
}

.toc-link {
  color: var(--color-text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  line-height: 1.6;
  transition: color 0.2s;
  display: block;
  padding: 2px 0;
}

.toc-link:hover {
  color: var(--color-primary);
}
</style>
