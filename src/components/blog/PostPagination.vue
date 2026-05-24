<template>
  <nav class="pagination">
    <button
      class="pagination-btn"
      :disabled="page <= 1"
      @click="$emit('change', page - 1)"
    >
      上一页
    </button>
    <span class="pagination-info">{{ page }} / {{ totalPages }}</span>
    <button
      class="pagination-btn"
      :disabled="page >= totalPages"
      @click="$emit('change', page + 1)"
    >
      下一页
    </button>
  </nav>
</template>

<script setup lang="ts">
defineProps<{
  page: number
  totalPages: number
}>()

defineEmits<{
  change: [page: number]
}>()
</script>

<style scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-md);
  margin-top: var(--spacing-xl);
}

.pagination-btn {
  padding: var(--spacing-sm) var(--spacing-lg);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-text);
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s;
}

.pagination-btn:hover:not(:disabled) {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.pagination-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.pagination-info {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
}
</style>
