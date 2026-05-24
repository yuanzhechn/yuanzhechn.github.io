<template>
  <div class="error-state">
    <p class="error-text">{{ message }}</p>
    <button class="error-retry" @click="$emit('retry')">重试</button>
  </div>
</template>

<script setup lang="ts">
defineProps<{ message: string }>()
defineEmits<{ retry: [] }>()
</script>

<style scoped>
.error-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-2xl);
}

.error-text {
  color: var(--color-error);
  font-size: 0.95rem;
}

.error-retry {
  padding: var(--spacing-xs) var(--spacing-lg);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-text);
  cursor: pointer;
  font-size: 0.9rem;
}
</style>
