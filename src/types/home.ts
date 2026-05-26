import type { Category } from './category'
import type { PostListItem } from './post'
import type { Tag } from './tag'

export interface HomeHeroContent {
  eyebrow: string
  title: string
  subtitle: string
}

export interface HomeStat {
  key: 'posts' | 'categories' | 'tags'
  label: string
  value: number | string
}

export interface HomeDashboardData {
  categories: Category[]
  tags: Tag[]
  recentPosts: PostListItem[]
}
