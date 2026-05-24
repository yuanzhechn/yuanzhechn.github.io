export interface Post {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage: string
  category: string
  tags: string[]
  author: string
  createdAt: string
  updatedAt: string
  isPublished: boolean
  isTop: boolean
  wordCount: number
  readingTime: number
  viewCount: number
}

export interface PostListItem {
  id: string
  title: string
  slug: string
  excerpt: string
  coverImage: string
  category: string
  tags: string[]
  createdAt: string
  isTop: boolean
  readingTime: number
}

export interface PostQueryParams {
  page?: number
  pageSize?: number
  category?: string
  tag?: string
  keyword?: string
  year?: string
  sortBy?: 'createdAt' | 'updatedAt' | 'viewCount'
  sortOrder?: 'asc' | 'desc'
}

export interface PostListResult {
  list: PostListItem[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}
