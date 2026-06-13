<template>
  <section class="group-tree" :class="{ nested: depth > 0 }">
    <header v-if="title">
      <h2>{{ title }}</h2>
      <span>{{ totalSites }} 个网站</span>
    </header>
    <div v-if="directSites.length" class="site-grid">
      <FavoriteSiteCard v-for="site in directSites" :key="site.id" :site="site" />
    </div>
    <div v-if="children.length" class="child-groups">
      <FavoriteGroupTree
        v-for="child in children"
        :key="child.name"
        :title="child.name"
        :sites="child.sites"
        :depth="depth + 1"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import FavoriteSiteCard from './FavoriteSiteCard.vue'
import type { FavoriteSite } from '@/types'

const props = withDefaults(
  defineProps<{ title?: string; sites: FavoriteSite[]; depth?: number }>(),
  { title: '', depth: 0 },
)

const directSites = computed(() => props.sites.filter((site) => props.depth >= site.groupPath.length))
const children = computed(() => {
  const groups = new Map<string, FavoriteSite[]>()
  for (const site of props.sites) {
    const name = site.groupPath[props.depth]
    if (!name) continue
    groups.set(name, [...(groups.get(name) || []), site])
  }
  return [...groups.entries()].map(([name, sites]) => ({ name, sites }))
})
const totalSites = computed(() => props.sites.length)
</script>

<style scoped>
.group-tree {
  min-width: 0;
}
.group-tree.nested {
  display: inline-block;
  width: 100%;
  margin-bottom: .85rem;
  padding: .85rem;
  border: 1px solid rgb(255 255 255 / 16%);
  border-radius: var(--radius-md);
  background: rgb(8 18 28 / 42%);
  box-shadow: inset 0 1px 0 rgb(255 255 255 / 10%), 0 12px 28px rgb(0 0 0 / 12%);
  backdrop-filter: blur(10px);
  break-inside: avoid;
}
.group-tree > header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: .75rem;
  color: #f3f8fc;
}
.group-tree h2 {
  color: #fff;
  font-size: .95rem;
  text-shadow: 0 1px 8px rgb(0 0 0 / 45%);
}
.group-tree header span {
  color: #fff;
  font-size: .68rem;
  opacity: .82;
}
.site-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(76px, 96px));
  gap: .75rem;
  align-items: start;
  justify-content: start;
}
.child-groups {
  column-width: 280px;
  column-gap: .85rem;
}
.group-tree:not(.nested) > .child-groups {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: start;
  gap: .75rem;
  columns: auto;
}
.group-tree:not(.nested) > .child-groups > .group-tree {
  margin-bottom: 0;
}
.site-grid + .child-groups {
  margin-top: .85rem;
}
[data-theme='dark'] .group-tree.nested {
  border-color: rgb(255 255 255 / 12%);
  background: rgb(15 23 42 / 34%);
}
[data-theme='dark'] .group-tree > header {
  color: #f8fafc;
}
@media (max-width: 640px) {
  .group-tree:not(.nested) > .child-groups { grid-template-columns: 1fr; }
  .child-groups { columns: 1; }
  .site-grid { grid-template-columns: repeat(3, minmax(72px, 1fr)); }
}
@media (min-width: 641px) and (max-width: 820px) {
  .group-tree:not(.nested) > .child-groups { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .site-grid { grid-template-columns: repeat(2, minmax(64px, 1fr)); }
}
</style>
