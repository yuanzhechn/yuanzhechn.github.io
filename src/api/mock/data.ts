import type { Post, Category, Tag } from '@/types'

export const categories: Category[] = [
  { id: '1', name: '前端开发', slug: 'frontend', description: 'HTML/CSS/JavaScript/Vue/React 等前端技术文章', postCount: 0, color: '#4FC08D' },
  { id: '2', name: '后端开发', slug: 'backend', description: 'Node.js/Java/Python 等后端技术文章', postCount: 0, color: '#F7DF1E' },
  { id: '3', name: '工具效率', slug: 'tools', description: '开发工具、效率提升相关文章', postCount: 0, color: '#FF6B6B' },
  { id: '4', name: '生活随笔', slug: 'life', description: '日常生活、读书感悟分享', postCount: 0, color: '#845EC2' },
]

export const tags: Tag[] = [
  { id: '1', name: 'Vue', slug: 'vue', postCount: 0 },
  { id: '2', name: 'React', slug: 'react', postCount: 0 },
  { id: '3', name: 'TypeScript', slug: 'typescript', postCount: 0 },
  { id: '4', name: 'Node.js', slug: 'nodejs', postCount: 0 },
  { id: '5', name: 'CSS', slug: 'css', postCount: 0 },
  { id: '6', name: 'Git', slug: 'git', postCount: 0 },
  { id: '7', name: 'Docker', slug: 'docker', postCount: 0 },
  { id: '8', name: '算法', slug: 'algorithm', postCount: 0 },
] as Tag[]

const sampleContent = `
## 引言

这是一篇示例博客文章的内容。在这里你可以看到博客文章展示的效果。

## 代码示例

\`\`\`typescript
interface User {
  id: number
  name: string
  email: string
}

function getUser(id: number): Promise<User> {
  return fetch(\`/api/users/\${id}\`).then(res => res.json())
}
\`\`\`

## 列表

- 第一项
- 第二项
- 第三项

## 引用

> 这是一段引用文字，用来展示引用样式。

## 表格

| 名称 | 版本 | 说明 |
|------|------|------|
| Vue | 3.x | 前端框架 |
| Pinia | 2.x | 状态管理 |
| Vite | 5.x | 构建工具 |

感谢阅读！
`

export const posts: Post[] = [
  {
    id: '1',
    title: '使用 Vue 3 + TypeScript 搭建个人博客',
    slug: 'build-blog-with-vue3-typescript',
    excerpt: '本文详细介绍如何使用 Vue 3 Composition API 配合 TypeScript 从零搭建一个现代化个人博客系统，涵盖项目架构、状态管理、路由设计等核心内容。',
    content: sampleContent,
    coverImage: '',
    category: 'frontend',
    tags: ['vue', 'typescript', 'vite'],
    author: '博主',
    createdAt: '2025-05-15',
    updatedAt: '2025-05-20',
    isPublished: true,
    isTop: true,
    wordCount: 2500,
    readingTime: 8,
    viewCount: 1280,
  },
  {
    id: '2',
    title: 'Vite 8 新特性全面解析',
    slug: 'vite8-new-features',
    excerpt: 'Vite 8 带来了许多令人兴奋的新特性，包括更快的 HMR、原生的 CSS Modules 支持以及更优的构建策略。',
    content: sampleContent,
    coverImage: '',
    category: 'frontend',
    tags: ['vite', 'typescript'],
    author: '博主',
    createdAt: '2025-04-28',
    updatedAt: '2025-05-01',
    isPublished: true,
    isTop: false,
    wordCount: 1800,
    readingTime: 6,
    viewCount: 960,
  },
  {
    id: '3',
    title: 'Node.js 微服务架构实践',
    slug: 'nodejs-microservice-practice',
    excerpt: '在实际项目中落地 Node.js 微服务架构，从服务拆分、通信方式到部署运维，分享一手实践经验与踩坑记录。',
    content: sampleContent,
    coverImage: '',
    category: 'backend',
    tags: ['nodejs', 'docker'],
    author: '博主',
    createdAt: '2025-03-10',
    updatedAt: '2025-03-12',
    isPublished: true,
    isTop: false,
    wordCount: 3200,
    readingTime: 12,
    viewCount: 560,
  },
  {
    id: '4',
    title: 'CSS Container Queries 实战',
    slug: 'css-container-queries-practice',
    excerpt: 'Container Queries 正在改变响应式设计的范式。本文从实际场景出发，详解如何使用容器查询构建真正组件级的响应式布局。',
    content: sampleContent,
    coverImage: '',
    category: 'frontend',
    tags: ['css'],
    author: '博主',
    createdAt: '2025-02-22',
    updatedAt: '2025-02-22',
    isPublished: true,
    isTop: false,
    wordCount: 1500,
    readingTime: 5,
    viewCount: 720,
  },
  {
    id: '5',
    title: 'Git 高级技巧：从入门到精通',
    slug: 'git-advanced-tips',
    excerpt: '掌握 Git rebase、cherry-pick、bisect 等高级技巧，让你的版本控制效率提升一个档次。',
    content: sampleContent,
    coverImage: '',
    category: 'tools',
    tags: ['git'],
    author: '博主',
    createdAt: '2025-01-18',
    updatedAt: '2025-02-10',
    isPublished: true,
    isTop: false,
    wordCount: 2100,
    readingTime: 7,
    viewCount: 840,
  },
  {
    id: '6',
    title: '算法入门：排序算法可视化',
    slug: 'sorting-algorithm-visualization',
    excerpt: '通过可视化的方式理解常见排序算法的原理与实现，让抽象的算法变得直观。',
    content: sampleContent,
    coverImage: '',
    category: 'frontend',
    tags: ['algorithm', 'typescript'],
    author: '博主',
    createdAt: '2024-12-05',
    updatedAt: '2024-12-08',
    isPublished: true,
    isTop: false,
    wordCount: 2800,
    readingTime: 10,
    viewCount: 430,
  },
  {
    id: '7',
    title: 'Docker Compose 在生产环境中的最佳实践',
    slug: 'docker-compose-production',
    excerpt: '分享团队在生产环境中使用 Docker Compose 管理多容器应用的经验，包括日志管理、监控、备份等关键环节。',
    content: sampleContent,
    coverImage: '',
    category: 'backend',
    tags: ['docker', 'nodejs'],
    author: '博主',
    createdAt: '2024-11-20',
    updatedAt: '2024-11-22',
    isPublished: true,
    isTop: false,
    wordCount: 3500,
    readingTime: 14,
    viewCount: 380,
  },
  {
    id: '8',
    title: '2024 年终总结',
    slug: '2024-year-review',
    excerpt: '回顾 2024 年的技术成长与生活点滴，展望 2025 年的规划与目标。',
    content: sampleContent,
    coverImage: '',
    category: 'life',
    tags: [],
    author: '博主',
    createdAt: '2024-12-31',
    updatedAt: '2025-01-01',
    isPublished: true,
    isTop: false,
    wordCount: 1200,
    readingTime: 4,
    viewCount: 1020,
  },
]

function updateCategoryTagCounts() {
  categories.forEach(cat => {
    cat.postCount = posts.filter(p => p.category === cat.slug && p.isPublished).length
  })
  tags.forEach(tag => {
    tag.postCount = posts.filter(p => p.tags.includes(tag.slug) && p.isPublished).length
  })
}

updateCategoryTagCounts()
