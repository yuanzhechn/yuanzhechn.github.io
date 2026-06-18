<template>
  <BlogLayout immersive :style="pageThemeStyle">
    <template #content>
      <div v-if="loading" class="state"><LoadingSpinner /></div>
      <ErrorState v-else-if="error" :message="error" />
      <article v-else-if="document" class="document-detail">
        <header>
          <div>
            <RouterLink to="/documents" class="back-link">{{ document.groupTitle || '零散记录' }}</RouterLink>
            <h1>{{ document.title }}</h1>
            <p>{{ document.updatedAt }} · {{ document.readingTime }} 分钟阅读</p>
          </div>
          <div class="actions">
            <RouterLink v-if="authenticated" :to="{ name: 'admin-publish', query: { edit: document.slug, collection: 'documents' } }">编辑文档</RouterLink>
            <button
              v-if="authenticated"
              type="button"
              :disabled="deleting"
              @click="deleteCurrentDocument"
            >
              {{ deleting ? 'Deleting...' : 'Delete' }}
            </button>
            <MarkdownThemePicker />
          </div>
        </header>
        <MarkdownRenderer :content="document.content" />
      </article>
    </template>
  </BlogLayout>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import BlogLayout from '@/layouts/BlogLayout.vue'
import MarkdownRenderer from '@/components/common/MarkdownRenderer.vue'
import MarkdownThemePicker from '@/components/common/MarkdownThemePicker.vue'
import LoadingSpinner from '@/components/ui/LoadingSpinner.vue'
import ErrorState from '@/components/ui/ErrorState.vue'
import { documentApi } from '@/api/modules/document'
import { useAdminSession } from '@/composables/useAdminSession'
import { useMarkdownTheme } from '@/composables/useMarkdownTheme'
import { adminApi } from '@/api/modules/admin'
import type { LearningDocument } from '@/types'

const route = useRoute()
const router = useRouter()
const document = ref<LearningDocument>()
const loading = ref(true)
const error = ref('')
const deleting = ref(false)
const { authenticated, checkSession } = useAdminSession()
const { pageThemeStyle } = useMarkdownTheme()

async function deleteCurrentDocument() {
  if (!document.value) return
  const confirmed = window.confirm(`确定删除《${document.value.title}》吗？这个操作会同时删除后端 Markdown 和资源文件。`)
  if (!confirmed) return
  deleting.value = true
  try {
    await adminApi.deleteContent('documents', document.value.slug)
    await router.push('/documents')
  } finally {
    deleting.value = false
  }
}

onMounted(async () => {
  await checkSession()
  try {
    document.value = await documentApi.getBySlug(
      String(route.params.groupSlug),
      String(route.params.slug),
    )
  }
  catch (reason) { error.value = reason instanceof Error ? reason.message : '加载失败' }
  finally { loading.value = false }
})
</script>

<style scoped>
.document-detail > header { display: flex; align-items: flex-start; justify-content: space-between; gap: 1rem; margin-bottom: 1.5rem; }
.document-detail h1 { margin: .35rem 0; font-size: 1.75rem; }
.document-detail header p, .back-link { color: var(--color-text-secondary); font-size: .82rem; }
.back-link { text-decoration: none; }
.actions { display: flex; align-items: center; gap: .5rem; }
.actions > a, .actions > button { padding: .55rem .8rem; border: 1px solid var(--color-border); border-radius: var(--radius-sm); color: var(--color-text); text-decoration: none; font-size: .82rem; font-weight: 700; }
.actions > button { color: #b42318; background: transparent; cursor: pointer; }
.actions > button:disabled { opacity: .55; cursor: not-allowed; }
.state { display: grid; min-height: 240px; place-items: center; }
@media (max-width: 640px) { .document-detail > header { flex-direction: column; } }
</style>
