<template>
  <a
    class="favorite-app"
    :href="site.url"
    :title="site.description"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div class="app-icon-shell">
      <div class="app-icon">
        <img
          v-if="!iconFailed"
          class="app-logo"
          :src="site.iconUrl"
          :alt="`${site.name} 图标`"
          loading="lazy"
          decoding="async"
          @error="iconFailed = true"
        />
        <span v-else class="app-fallback">{{ fallbackLabel }}</span>
      </div>
    </div>

    <div class="app-labels">
      <strong>{{ site.name }}</strong>
      <span>{{ site.domain }}</span>
    </div>
  </a>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { FavoriteSite } from '@/types'

const props = defineProps<{
  site: FavoriteSite
}>()

const iconFailed = ref(false)

const fallbackLabel = computed(() => props.site.name.slice(0, 2).toUpperCase())
</script>

<style scoped>
.favorite-app {
  display: grid;
  justify-items: center;
  gap: 0.48rem;
  min-width: 0;
  padding: 0.25rem;
  color: #f8fafc;
  text-decoration: none;
}

.app-icon-shell {
  display: grid;
  place-items: center;
  width: 100%;
  max-width: 66px;
  aspect-ratio: 1;
  padding: 0;
  transition: transform 0.18s ease;
}

.favorite-app:hover .app-icon-shell {
  transform: translateY(-4px) scale(1.04);
}

.app-icon {
  position: relative;
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
}

.app-logo {
  position: relative;
  z-index: 1;
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.88);
  object-fit: contain;
  box-shadow:
    0 1px 1px rgba(255, 255, 255, 0.72),
    0 10px 18px rgba(15, 23, 42, 0.2);
}

.app-fallback {
  position: relative;
  z-index: 1;
  color: #fff;
  display: grid;
  place-items: center;
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: rgba(15, 23, 42, 0.84);
  font-size: 1rem;
  font-weight: 900;
  line-height: 1;
  box-shadow: 0 10px 18px rgba(15, 23, 42, 0.2);
  text-shadow: 0 4px 14px rgba(15, 23, 42, 0.28);
}

.app-labels {
  display: grid;
  gap: 0.16rem;
  width: 100%;
  text-align: center;
}

.app-labels strong {
  overflow: hidden;
  font-size: 0.84rem;
  font-weight: 700;
  text-shadow: 0 1px 8px rgba(15, 23, 42, 0.55);
  text-overflow: ellipsis;
  white-space: nowrap;
}

.app-labels span {
  overflow: hidden;
  color: rgba(248, 250, 252, 0.82);
  font-size: 0.68rem;
  text-shadow: 0 1px 8px rgba(15, 23, 42, 0.46);
  text-overflow: ellipsis;
  white-space: nowrap;
}

[data-theme='dark'] .app-logo {
  background: rgba(248, 250, 252, 0.9);
  box-shadow: 0 12px 20px rgba(2, 6, 23, 0.42);
}

@media (prefers-reduced-motion: reduce) {
  .favorite-app:hover .app-icon-shell {
    transform: none;
  }
}
</style>
