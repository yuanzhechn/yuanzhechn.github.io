<template>
  <DefaultLayout>
    <main class="document-library">
      <header class="page-heading">
        <p>KNOWLEDGE BASE</p>
        <h1>学习文档</h1>
        <span>按文档集整理持续积累的学习记录</span>
      </header>
      <section v-if="loading" class="state"><LoadingSpinner /></section>
      <p v-else-if="error" class="state">{{ error }}</p>
      <section v-else class="group-grid">
        <article v-for="group in groups" :key="group.slug" class="document-group">
          <header>
            <div>
              <span>{{ group.documents.length }} 篇</span>
              <h2>{{ group.title }}</h2>
            </div>
            <code>{{ group.slug }}</code>
          </header>
          <ol>
            <li v-for="document in group.documents" :key="document.id">
              <RouterLink :to="`/document/${group.slug}/${document.slug}`">
                <span>{{ document.order }}</span>
                <div>
                  <strong>{{ document.title }}</strong>
                  <small>{{ document.excerpt }}</small>
                </div>
              </RouterLink>
            </li>
          </ol>
        </article>
      </section>
    </main>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import LoadingSpinner from '@/components/ui/LoadingSpinner.vue'
import { documentApi } from '@/api/modules/document'
import type { DocumentGroup } from '@/types'

const groups = ref<DocumentGroup[]>([])
const loading = ref(true)
const error = ref('')
onMounted(async () => {
  try { groups.value = await documentApi.listGroups() }
  catch (reason) { error.value = reason instanceof Error ? reason.message : '加载失败' }
  finally { loading.value = false }
})
</script>

<style scoped>
.document-library { width: min(1040px, 100%); margin: 0 auto; }
.page-heading { margin-bottom: 1.5rem; }
.page-heading p { color: var(--color-primary); font-size: .72rem; font-weight: 800; }
.page-heading h1 { margin: .25rem 0; font-size: 1.8rem; }
.page-heading span { color: var(--color-text-secondary); }
.group-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
.document-group { border: 1px solid var(--color-border); border-radius: var(--radius-md); background: var(--color-surface); overflow: hidden; }
.document-group > header { display: flex; justify-content: space-between; gap: 1rem; padding: 1rem; border-bottom: 1px solid var(--color-border); background: var(--color-bg-secondary); }
.document-group header span, .document-group code { color: var(--color-text-secondary); font-size: .72rem; }
.document-group h2 { margin-top: .2rem; font-size: 1.1rem; }
.document-group ol { margin: 0; padding: .5rem; list-style: none; }
.document-group li + li { border-top: 1px solid var(--color-border-light); }
.document-group a { display: flex; gap: .75rem; padding: .75rem; color: var(--color-text); text-decoration: none; }
.document-group a > span { display: grid; width: 28px; height: 28px; place-items: center; border-radius: var(--radius-sm); color: var(--color-primary); background: var(--color-bg-secondary); font-size: .75rem; }
.document-group a div { display: grid; min-width: 0; gap: .2rem; }
.document-group small { overflow: hidden; color: var(--color-text-secondary); text-overflow: ellipsis; white-space: nowrap; }
.document-group a:hover strong { color: var(--color-primary); }
.state { display: grid; min-height: 240px; place-items: center; }
@media (max-width: 720px) { .group-grid { grid-template-columns: 1fr; } }
</style>
