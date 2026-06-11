<template>
  <div class="favorites-launchpad">
    <AppHeader />
    <section class="launchpad-screen" aria-label="常用网站启动台">
      <main class="launchpad-main">
        <section class="app-grid" aria-label="网站应用">
          <FavoriteSiteCard v-for="site in favoriteSites" :key="site.id" :site="site" />
        </section>
      </main>
    </section>
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/common/AppHeader.vue'
import FavoriteSiteCard from '@/components/favorites/FavoriteSiteCard.vue'
import { favoriteSites } from '@/data/favorites'
</script>

<style scoped>
.favorites-launchpad {
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  height: 100vh;
  overflow: hidden;
  background:
    linear-gradient(125deg, rgba(255, 255, 255, 0.5) 0 12%, transparent 12% 100%),
    linear-gradient(35deg, rgba(68, 212, 146, 0.24) 0 26%, transparent 26% 100%),
    linear-gradient(155deg, transparent 0 42%, rgba(32, 129, 226, 0.28) 42% 64%, transparent 64%),
    linear-gradient(215deg, #dcecff 0%, #b9d9ef 34%, #d5efe5 68%, #f4f8ff 100%);
}

.launchpad-screen {
  display: grid;
  height: 100%;
  min-height: 0;
  overflow: hidden;
}

.launchpad-main {
  display: grid;
  grid-template-rows: minmax(0, 1fr);
  min-height: 0;
  padding: 1.35rem 1.2rem;
  overflow: hidden;
}

.app-grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(88px, 112px));
  gap: 1.15rem 1.45rem;
  align-content: center;
  justify-content: center;
  min-height: 0;
}

[data-theme='dark'] .favorites-launchpad {
  background:
    radial-gradient(circle at 18% 20%, rgba(255, 255, 255, 0.08), transparent 18%),
    radial-gradient(circle at 78% 22%, rgba(14, 165, 233, 0.16), transparent 20%),
    radial-gradient(circle at 28% 88%, rgba(79, 192, 141, 0.12), transparent 24%),
    linear-gradient(145deg, #102033 0%, #0f1b2d 48%, #0b1726 100%);
}

@media (max-width: 900px) {
  .app-grid {
    grid-template-columns: repeat(4, minmax(78px, 1fr));
    gap: 0.85rem 0.65rem;
  }
}

@media (max-width: 640px) {
  .favorites-launchpad {
    height: auto;
    min-height: 100vh;
    overflow: visible;
  }

  .launchpad-screen {
    height: auto;
    min-height: 100vh;
    overflow: visible;
  }

  .launchpad-main {
    height: auto;
    min-height: calc(100vh - var(--header-height));
    padding: 0.72rem;
    overflow: visible;
  }

  .app-grid {
    grid-template-columns: repeat(3, minmax(78px, 1fr));
    gap: 0.66rem 0.45rem;
  }
}
</style>
