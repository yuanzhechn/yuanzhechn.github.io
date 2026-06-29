<template>
  <DefaultLayout>
    <main class="tag-content-page">
      <header class="page-heading">
        <p>TAG CONTENT</p>
        <h1>标签：{{ tag }}</h1>
        <span>共 {{ total }} 项内容</span>
      </header>

      <section v-if="loading" class="state"><LoadingSpinner /></section>
      <ErrorState v-else-if="error" :message="error" />
      <EmptyState v-else-if="total === 0" message="该标签下暂无内容" />
      <div v-else class="content-sections">
        <section v-if="result.posts.length" class="content-section">
          <header><h2>博客文章</h2><span>{{ result.posts.length }}</span></header>
          <RouterLink v-for="item in result.posts" :key="item.id" :to="`/post/${item.slug || item.id}`" class="content-item">
            <div><strong>{{ item.title }}</strong><p>{{ item.excerpt }}</p></div>
            <span>文章</span>
          </RouterLink>
        </section>

        <section v-if="result.documents.length" class="content-section">
          <header><h2>学习文档</h2><span>{{ result.documents.length }}</span></header>
          <RouterLink
            v-for="item in result.documents"
            :key="item.id"
            :to="`/document/${item.groupSlug}/${item.slug}`"
            class="content-item"
          >
            <div><small>{{ item.groupTitle }}</small><strong>{{ item.title }}</strong><p>{{ item.excerpt }}</p></div>
            <span>文档</span>
          </RouterLink>
        </section>

        <section v-if="result.challenges.length" class="content-section">
          <header><h2>训练计划</h2><span>{{ result.challenges.length }}</span></header>
          <RouterLink
            v-for="item in result.challenges"
            :key="item.id"
            :to="`/challenge/${item.groupSlug}/${item.slug}`"
            class="content-item"
          >
            <div><small>{{ item.groupTitle }}</small><strong>{{ item.title }}</strong><p>{{ item.excerpt }}</p></div>
            <span>题目</span>
          </RouterLink>
        </section>
      </div>
    </main>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import LoadingSpinner from '@/components/ui/LoadingSpinner.vue'
import ErrorState from '@/components/ui/ErrorState.vue'
import EmptyState from '@/components/ui/EmptyState.vue'
import { blogApi } from '@/api'
import type { TagContentResult } from '@/types'

const route = useRoute()
const loading = ref(false)
const error = ref('')
const result = reactive<TagContentResult>({ tag: '', posts: [], documents: [], challenges: [] })
const tag = computed(() => String(route.params.slug || ''))
const total = computed(() => result.posts.length + result.documents.length + result.challenges.length)

async function loadContent() {
  loading.value = true
  error.value = ''
  try { Object.assign(result, await blogApi.getContentByTag(tag.value)) }
  catch (reason) { error.value = reason instanceof Error ? reason.message : '加载标签内容失败' }
  finally { loading.value = false }
}

watch(tag, loadContent, { immediate: true })
</script>

<style scoped>
.tag-content-page { width: min(920px, 100%); margin: 0 auto; }
.page-heading { margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 1px solid var(--color-border); }
.page-heading p { color: var(--color-primary); font-size: .72rem; font-weight: 800; }
.page-heading h1 { margin: .25rem 0; font-size: 1.7rem; }
.page-heading span { color: var(--color-text-secondary); font-size: .82rem; }
.content-sections { display: grid; gap: 1rem; }
.content-section { border: 1px solid var(--color-border); border-radius: var(--radius-md); background: var(--color-surface); overflow: hidden; }
.content-section > header { display: flex; align-items: center; justify-content: space-between; padding: .8rem 1rem; background: var(--color-bg-secondary); }
.content-section h2 { font-size: 1rem; }
.content-section header span { color: var(--color-text-secondary); font-size: .75rem; }
.content-item { display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: .9rem 1rem; color: var(--color-text); text-decoration: none; }
.content-item + .content-item { border-top: 1px solid var(--color-border-light); }
.content-item > div { display: grid; min-width: 0; gap: .2rem; }
.content-item small { color: var(--color-primary); font-size: .72rem; }
.content-item p { overflow: hidden; color: var(--color-text-secondary); font-size: .82rem; text-overflow: ellipsis; white-space: nowrap; }
.content-item > span { flex: 0 0 auto; padding: .25rem .45rem; border-radius: var(--radius-sm); color: var(--color-text-secondary); background: var(--color-bg-secondary); font-size: .7rem; }
.content-item:hover strong { color: var(--color-primary); }
.state { display: grid; min-height: 220px; place-items: center; }
</style>
