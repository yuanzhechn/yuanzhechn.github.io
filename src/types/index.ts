export type { Post, PostListItem, PostQueryParams, PostListResult } from './post'
export type { Category } from './category'
export type { Tag } from './tag'
export type { HomeDashboardData, HomeHeroContent, HomeStat } from './home'
export type { FavoriteCategory, FavoriteSite } from './favorite'
export type {
  Challenge,
  ChallengeCadence,
  ChallengeDifficulty,
  ChallengeListItem,
} from './challenge'

import type { PostListItem } from './post'

export interface SiteConfig {
  title: string
  subtitle: string
  description: string
  author: string
  avatar: string
  social: SocialLink[]
  navLinks: NavLink[]
  footerLinks: FooterLink[]
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface NavLink {
  name: string
  path: string
}

export interface FooterLink {
  name: string
  url: string
}

export interface ArchiveItem {
  year: string
  posts: PostListItem[]
}

export interface TableOfContent {
  id: string
  text: string
  level: number
}
