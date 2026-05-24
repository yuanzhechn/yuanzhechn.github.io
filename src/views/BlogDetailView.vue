<template>
  <BlogLayout>
    <template #content>
      <div v-if="postStore.loading" class="center">
        <LoadingSpinner />
      </div>
      <div v-else-if="postStore.error" class="center">
        <ErrorState :message="postStore.error" />
      </div>
      <article v-else-if="postStore.currentPost" class="post-article">
        <header class="post-header">
          <h1 class="post-title">{{ postStore.currentPost.title }}</h1>
          <PostMeta :post="postStore.currentPost" />
        </header>
        <div v-if="toc.length > 0" class="post-toc-mobile">
          <PostToc :items="toc" />
        </div>
        <div class="post-body" v-html="renderedContent" />
        <footer class="post-footer">
          <div class="post-tags">
            <PostTag
              v-for="tag in postStore.currentPost.tags"
              :key="tag"
              :tag="tag"
            />
          </div>
        </footer>
      </article>
    </template>
    <template #sidebar>
      <aside class="sidebar-widgets">
        <div v-if="toc.length > 0" class="widget">
          <h3 class="widget-title">目录</h3>
          <PostToc :items="toc" />
        </div>
      </aside>
    </template>
  </BlogLayout>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import BlogLayout from '@/layouts/BlogLayout.vue'
import PostMeta from '@/components/blog/PostMeta.vue'
import PostTag from '@/components/blog/PostTag.vue'
import PostToc from '@/components/blog/PostToc.vue'
import LoadingSpinner from '@/components/ui/LoadingSpinner.vue'
import ErrorState from '@/components/ui/ErrorState.vue'
import { usePostStore } from '@/stores/post'
import { renderMarkdown } from '@/utils/markdown'
import { extractToc } from '@/utils/markdown'

const route = useRoute()
const postStore = usePostStore()

const renderedContent = computed(() => {
  if (!postStore.currentPost) return ''
  return renderMarkdown(postStore.currentPost.content)
})

const toc = computed(() => {
  if (!postStore.currentPost) return []
  return extractToc(postStore.currentPost.content)
})

onMounted(() => {
  const slug = route.params.slug as string
  postStore.fetchPostBySlug(slug)
})
</script>

<style scoped>
.post-article {
  max-width: 100%;
}

.post-header {
  margin-bottom: var(--spacing-xl);
}

.post-title {
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: var(--spacing-md);
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
  background: var(--color-surface);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  border: 1px solid var(--color-border);
  position: sticky;
  top: calc(var(--header-height) + var(--spacing-lg));
}

.widget-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
}

@media (max-width: 768px) {
  .post-toc-mobile {
    display: block;
  }
}
</style>
