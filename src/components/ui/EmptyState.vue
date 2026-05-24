<template>
  <div class="empty-state">
    <span class="empty-icon">📭</span>
    <p class="empty-text">{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ message: string }>()
</script>

<style scoped>
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-2xl);
}

.empty-icon {
  font-size: 2.5rem;
}

.empty-text {
  color: var(--color-text-secondary);
  font-size: 0.95rem;
}
</style>
