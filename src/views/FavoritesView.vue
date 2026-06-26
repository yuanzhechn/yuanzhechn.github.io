<template>
  <div class="favorites-launchpad">
    <AppHeader />
    <main class="desktop-preview">
      <p v-if="errorMessage" class="message error">{{ errorMessage }}</p>
      <FavoriteGroupTree :sites="sites" />
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import AppHeader from '@/components/common/AppHeader.vue'
import FavoriteGroupTree from '@/components/favorites/FavoriteGroupTree.vue'
import { favoriteApi } from '@/api/modules/favorite'
import type { FavoriteSite } from '@/types'

const sites = ref<FavoriteSite[]>([])
const errorMessage = ref('')

onMounted(async () => {
  try {
    sites.value = await favoriteApi.list()
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '收藏网站加载失败'
  }
})
</script>

<style scoped>
.favorites-launchpad {
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  height: 100vh;
  overflow: hidden;
  background:
    linear-gradient(125deg, rgb(255 255 255 / 5%) 0 12%, transparent 12%),
    linear-gradient(35deg, rgb(47 184 140 / 12%) 0 26%, transparent 26%),
    linear-gradient(155deg, transparent 0 42%, rgb(37 99 235 / 16%) 42% 64%, transparent 64%),
    linear-gradient(215deg, #101923 0%, #13283a 38%, #17362f 72%, #0c1520 100%);
}

.desktop-preview {
  min-width: 0;
  min-height: 0;
  padding: 0.65rem;
  overflow: auto;
}

.message {
  padding: 0.6rem 0.7rem;
  border-radius: var(--radius-sm);
}

.error {
  color: #b42318;
  background: #fef3f2;
}

[data-theme='dark'] .favorites-launchpad {
  background:
    linear-gradient(125deg, rgb(255 255 255 / 4%) 0 12%, transparent 12%),
    linear-gradient(35deg, rgb(47 184 140 / 10%) 0 26%, transparent 26%),
    linear-gradient(155deg, transparent 0 42%, rgb(37 99 235 / 14%) 42% 64%, transparent 64%),
    linear-gradient(215deg, #080d14 0%, #0d1b28 40%, #112a25 72%, #070c13 100%);
}

@media (max-width: 640px) {
  .favorites-launchpad {
    height: auto;
    min-height: 100vh;
    overflow: visible;
  }

  .desktop-preview {
    min-height: calc(100vh - var(--header-height));
  }
}
</style>
