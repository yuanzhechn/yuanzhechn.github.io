import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: { title: '首页' },
  },
  {
    path: '/posts',
    name: 'blog-list',
    component: () => import('@/views/BlogListView.vue'),
    meta: { title: '文章列表' },
  },
  {
    path: '/post/:slug',
    name: 'blog-detail',
    component: () => import('@/views/BlogDetailView.vue'),
    meta: { title: '文章详情' },
  },
  {
    path: '/categories',
    name: 'categories',
    component: () => import('@/views/CategoryView.vue'),
    meta: { title: '分类' },
  },
  {
    path: '/category/:slug',
    name: 'category-detail',
    component: () => import('@/views/BlogListView.vue'),
    meta: { title: '分类文章' },
  },
  {
    path: '/tags',
    name: 'tags',
    component: () => import('@/views/TagView.vue'),
    meta: { title: '标签' },
  },
  {
    path: '/tag/:slug',
    name: 'tag-detail',
    component: () => import('@/views/BlogListView.vue'),
    meta: { title: '标签文章' },
  },
  {
    path: '/archives',
    name: 'archives',
    component: () => import('@/views/ArchiveView.vue'),
    meta: { title: '归档' },
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: () => import('@/views/FavoritesView.vue'),
    meta: { title: '常用网站' },
  },
  {
    path: '/challenges',
    name: 'challenges',
    component: () => import('@/views/ChallengeListView.vue'),
    meta: { title: '每期一题' },
  },
  {
    path: '/challenge/:slug',
    name: 'challenge-detail',
    component: () => import('@/views/ChallengeDetailView.vue'),
    meta: { title: '题目详情' },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
    meta: { title: '关于' },
  },
  {
    path: '/admin',
    name: 'admin-publish',
    component: () => import('@/views/AdminPublishView.vue'),
    meta: { title: '内容发布' },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue'),
    meta: { title: '页面不存在' },
  },
]

export default routes
