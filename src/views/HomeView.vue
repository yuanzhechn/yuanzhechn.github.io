<template>
  <DefaultLayout>
    <h1 class="home-title">{{ site.title }}</h1>
    <p class="home-subtitle">{{ site.subtitle }}</p>
    <section class="home-section">
      <h2 class="section-title">最新文章</h2>
      <PostList :posts="postStore.posts" :loading="postStore.loading" />
      <div v-if="postStore.hasPosts" class="view-all">
        <RouterLink to="/posts">查看全部文章 →</RouterLink>
      </div>
    </section>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PostList from '@/components/blog/PostList.vue'
import { usePostStore } from '@/stores/post'

const site = {
  title: '我的博客',
  subtitle: '记录技术与生活的点点滴滴',
}

const postStore = usePostStore()

onMounted(() => {
  postStore.fetchPosts({ pageSize: 5 })
})
</script>

<style scoped>
.home-title {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: var(--spacing-sm);
}

.home-subtitle {
  text-align: center;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-2xl);
}

.home-section {
  margin-bottom: var(--spacing-2xl);
}

.section-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: var(--spacing-lg);
  padding-bottom: var(--spacing-xs);
  border-bottom: 2px solid var(--color-primary);
}

.view-all {
  text-align: center;
  margin-top: var(--spacing-lg);
}

.view-all a {
  color: var(--color-primary);
  text-decoration: none;
}

.view-all a:hover {
  text-decoration: underline;
}
</style>
