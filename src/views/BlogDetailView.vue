<template>
  <BlogLayout immersive :style="pageThemeStyle">
    <template #content>
      <div v-if="postStore.loading" class="center">
        <LoadingSpinner />
      </div>
      <div v-else-if="postStore.error" class="center">
        <ErrorState :message="postStore.error" />
      </div>
      <article v-else-if="postStore.currentPost" class="post-article">
        <header class="post-header">
          <div class="post-heading">
            <div>
              <h1 class="post-title">{{ postStore.currentPost.title }}</h1>
              <PostMeta :post="postStore.currentPost" />
            </div>
            <div class="post-actions">
              <RouterLink
                v-if="authenticated"
                class="edit-link"
                :to="{ name: 'admin-publish', query: { edit: postStore.currentPost.slug } }"
              >
                编辑文章
              </RouterLink>
              <MarkdownThemePicker />
            </div>
          </div>
        </header>
        <div v-if="toc.length > 0" class="post-toc-mobile">
          <PostToc :items="toc" @navigate="scrollToHeading" />
        </div>
        <MarkdownRenderer
          ref="markdownRenderer"
          class="post-body"
          :content="postStore.currentPost.content"
        />
        <footer class="post-footer">
          <div class="post-tags">
            <PostTag v-for="tag in postStore.currentPost.tags" :key="tag" :tag="tag" />
          </div>
        </footer>
      </article>
    </template>
    <template #sidebar>
      <aside class="sidebar-widgets">
        <div v-if="toc.length > 0" class="widget">
          <h3 class="widget-title">目录</h3>
          <PostToc :items="toc" @navigate="scrollToHeading" />
        </div>
      </aside>
    </template>
  </BlogLayout>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import BlogLayout from '@/layouts/BlogLayout.vue'
import MarkdownRenderer from '@/components/common/MarkdownRenderer.vue'
import MarkdownThemePicker from '@/components/common/MarkdownThemePicker.vue'
import PostMeta from '@/components/blog/PostMeta.vue'
import PostTag from '@/components/blog/PostTag.vue'
import PostToc from '@/components/blog/PostToc.vue'
import LoadingSpinner from '@/components/ui/LoadingSpinner.vue'
import ErrorState from '@/components/ui/ErrorState.vue'
import { usePostStore } from '@/stores/post'
import { useMarkdownTheme } from '@/composables/useMarkdownTheme'
import { extractToc } from '@/utils/markdown'
import { useAdminSession } from '@/composables/useAdminSession'

const route = useRoute()
const postStore = usePostStore()
const markdownRenderer = ref<InstanceType<typeof MarkdownRenderer>>()
const { pageThemeStyle } = useMarkdownTheme()
const { authenticated, checkSession } = useAdminSession()

const toc = computed(() => {
  if (!postStore.currentPost) return []
  return extractToc(postStore.currentPost.content)
})

function loadPost() {
  const slugParam = route.params.slug
  const slug = Array.isArray(slugParam) ? slugParam.join('/') : slugParam

  if (!slug) return
  postStore.fetchPostBySlug(slug)
}

function scrollToHeading(id: string) {
  markdownRenderer.value?.scrollToHeading(id)
}

watch(() => route.params.slug, loadPost, { immediate: true })
onMounted(() => checkSession())
</script>

<style scoped>
.post-article {
  max-width: 100%;
}

.post-header {
  margin-bottom: var(--spacing-xl);
}

.post-heading {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: var(--spacing-lg);
}

.post-title {
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: var(--spacing-md);
}

.post-actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.edit-link {
  min-height: 40px;
  display: inline-flex;
  align-items: center;
  padding: 0.55rem 0.8rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  color: var(--color-text);
  background: color-mix(in srgb, var(--reader-surface) 92%, transparent);
  font-size: 0.82rem;
  font-weight: 700;
  text-decoration: none;
}

.post-body {
  line-height: 1.8;
  font-size: 1rem;
}

.post-footer {
  margin-top: var(--spacing-2xl);
  padding-top: var(--spacing-lg);
  border-top: 1px solid var(--color-border);
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
}

.post-toc-mobile {
  display: none;
  margin-bottom: var(--spacing-lg);
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
}

.sidebar-widgets {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.widget {
  background: color-mix(in srgb, var(--reader-surface) 92%, transparent);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  border: 1px solid var(--color-border);
  position: sticky;
  top: calc(var(--header-height) + var(--spacing-lg));
  backdrop-filter: blur(14px);
}

.widget-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
}

@media (max-width: 768px) {
  .post-heading {
    flex-direction: column;
  }

  .post-toc-mobile {
    display: block;
  }
}
</style>
