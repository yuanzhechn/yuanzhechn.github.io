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
            <MarkdownThemePicker />
          </div>
        </header>
        <div v-if="toc.length > 0" class="detail-toc-mobile">
          <PostToc :items="toc" @navigate="scrollToHeading" />
        </div>
        <MarkdownRenderer
          ref="markdownRenderer"
          :content="document.content"
        />
      </article>
    </template>
    <template #sidebar>
      <aside v-if="document" class="outline-widget">
        <p class="widget-eyebrow">Outline</p>
        <h3>文档大纲</h3>
        <PostToc :items="toc" @navigate="scrollToHeading" />
      </aside>
    </template>
  </BlogLayout>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import BlogLayout from '@/layouts/BlogLayout.vue'
import MarkdownRenderer from '@/components/common/MarkdownRenderer.vue'
import MarkdownThemePicker from '@/components/common/MarkdownThemePicker.vue'
import PostToc from '@/components/blog/PostToc.vue'
import LoadingSpinner from '@/components/ui/LoadingSpinner.vue'
import ErrorState from '@/components/ui/ErrorState.vue'
import { documentApi } from '@/api/modules/document'
import { useMarkdownTheme } from '@/composables/useMarkdownTheme'
import { extractToc } from '@/utils/markdown'
import type { LearningDocument } from '@/types'

const route = useRoute()
const document = ref<LearningDocument>()
const loading = ref(true)
const error = ref('')
const { pageThemeStyle } = useMarkdownTheme()
const markdownRenderer = ref<InstanceType<typeof MarkdownRenderer>>()

const toc = computed(() => document.value ? extractToc(document.value.content) : [])

function scrollToHeading(id: string) {
  markdownRenderer.value?.scrollToHeading(id)
}

onMounted(async () => {
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
.actions > button:disabled { opacity: .55; cursor: not-allowed; }
.state { display: grid; min-height: 240px; place-items: center; }
.outline-widget { padding: 1rem; border: 1px solid var(--color-border); border-radius: var(--radius-md); background: color-mix(in srgb, var(--reader-surface) 92%, transparent); box-shadow: 0 18px 48px color-mix(in srgb, var(--reader-text) 8%, transparent); backdrop-filter: blur(14px); }
.outline-widget h3 { margin: 0 0 .85rem; font-size: 1.05rem; }
.widget-eyebrow { margin: 0 0 .25rem; color: var(--color-primary); font-size: .72rem; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }
.detail-toc-mobile { display: none; margin-bottom: 1rem; padding: 1rem; border: 1px solid var(--color-border); border-radius: var(--radius-md); background: color-mix(in srgb, var(--reader-surface) 92%, transparent); }
@media (max-width: 768px) { .detail-toc-mobile { display: block; } }
@media (max-width: 640px) { .document-detail > header { flex-direction: column; } }
</style>
