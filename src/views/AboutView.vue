<template>
  <DefaultLayout>
    <div class="about-page">
      <div class="about-header">
        <div class="avatar-placeholder">{{ initials }}</div>
        <h1>关于我</h1>
        <p class="about-bio">一个热爱技术、热爱生活的开发者的个人博客</p>
      </div>
      <div class="about-section">
        <h2>关于本站</h2>
        <p>这是一个使用 Vue 3 + TypeScript + Vite 构建的个人博客系统，包含以下特性：</p>
        <ul>
          <li>Vue 3 Composition API + TypeScript 类型安全</li>
          <li>Pinia 状态管理，模块化拆分</li>
          <li>Vue Router 路由管理，动态路由</li>
          <li>Mock 数据层，可无缝切换真实 API</li>
          <li>响应式布局，支持暗色主题</li>
          <li>ESLint + Oxlint + Prettier 代码规范</li>
        </ul>
      </div>
      <div class="about-section">
        <h2>技能</h2>
        <div class="skill-tags">
          <span
            v-for="skill in skills"
            :key="skill"
            class="skill-tag"
          >{{ skill }}</span>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const site = { title: '我的博客', author: '博主' }
const initials = computed(() => site.author.slice(0, 1))

const skills = [
  'Vue', 'React', 'TypeScript', 'Node.js',
  'CSS', 'Git', 'Docker', 'RESTful API',
  'Webpack', 'Vite',
]
</script>

<style scoped>
.about-page {
  max-width: 720px;
  margin: 0 auto;
}

.about-header {
  text-align: center;
  margin-bottom: var(--spacing-2xl);
}

.avatar-placeholder {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--color-primary);
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-md);
}

.about-header h1 {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: var(--spacing-xs);
}

.about-bio {
  color: var(--color-text-secondary);
}

.about-section {
  margin-bottom: var(--spacing-2xl);
}

.about-section h2 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: var(--spacing-md);
  padding-left: var(--spacing-sm);
  border-left: 3px solid var(--color-primary);
}

.about-section p {
  line-height: 1.8;
  color: var(--color-text-secondary);
}

.about-section ul {
  padding-left: var(--spacing-lg);
  line-height: 2;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.skill-tag {
  padding: var(--spacing-xs) var(--spacing-md);
  background: var(--color-bg-secondary);
  border-radius: var(--radius-full);
  font-size: 0.9rem;
  color: var(--color-text-secondary);
}
</style>
