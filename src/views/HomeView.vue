<template>
  <DefaultLayout>
    <div class="home-page">
      <HomeHero :site="site" :stats="heroStats" :featured-post="featuredPost" />

      <HomeDashboard
        :categories="featuredCategories"
        :tags="featuredTags"
        :recent-posts="recentPosts"
      />

      <section class="home-section" aria-labelledby="latest-posts-title">
        <div class="section-heading">
          <div>
            <p class="section-kicker">Latest Notes</p>
            <h2 id="latest-posts-title" class="section-title">最新文章</h2>
          </div>
          <RouterLink v-if="postStore.hasPosts" to="/posts" class="view-all"> 查看全部 </RouterLink>
        </div>

        <PostList :posts="postStore.posts" :loading="postStore.loading" :error="postStore.error" />
      </section>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PostList from '@/components/blog/PostList.vue'
import HomeDashboard from '@/components/home/HomeDashboard.vue'
import HomeHero from '@/components/home/HomeHero.vue'
import { useCategoryStore } from '@/stores/category'
import { usePostStore } from '@/stores/post'
import { useTagStore } from '@/stores/tag'
import type { HomeHeroContent, HomeStat } from '@/types'

const site: HomeHeroContent = {
  eyebrow: 'Personal Knowledge Studio',
  title: '我的博客',
  subtitle: '把技术实践、工具心得和生活观察整理成可回看、可连接、可继续生长的笔记。',
}

const postStore = usePostStore()
const categoryStore = useCategoryStore()
const tagStore = useTagStore()

const featuredPost = computed(
  () => postStore.posts.find((post) => post.isTop) ?? postStore.posts[0],
)

const featuredCategories = computed(() => categoryStore.categories.slice(0, 4))
const featuredTags = computed(() => tagStore.tags.slice(0, 10))
const recentPosts = computed(() => postStore.posts.slice(0, 3))

const heroStats = computed<HomeStat[]>(() => [
  { key: 'posts', label: '文章', value: postStore.total || postStore.posts.length },
  { key: 'categories', label: '分类', value: categoryStore.categories.length },
  { key: 'tags', label: '标签', value: tagStore.tags.length },
])

onMounted(() => {
  postStore.fetchPosts({ pageSize: 5 })
  categoryStore.fetchCategories()
  tagStore.fetchTags()
})
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
}

.home-section {
  margin-bottom: var(--spacing-2xl);
}

.section-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  padding-bottom: var(--spacing-sm);
  border-bottom: 1px solid var(--color-border);
}

.section-kicker {
  margin-bottom: var(--spacing-xs);
  color: var(--color-primary);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0;
  text-transform: uppercase;
}

.section-title {
  color: var(--color-text);
  font-size: 1.55rem;
  font-weight: 800;
}

.view-all {
  flex-shrink: 0;
  padding: 0.42rem 0.82rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
}

.view-all:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

@media (max-width: 640px) {
  .section-heading {
    align-items: stretch;
    flex-direction: column;
    gap: var(--spacing-sm);
  }

  .view-all {
    width: 100%;
    text-align: center;
  }
}
</style>
