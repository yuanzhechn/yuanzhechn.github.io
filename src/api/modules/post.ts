import type { Post, PostListItem, PostListResult } from '@/types'
import { posts, categories, tags } from '../mock/data'

function toListItem(post: Post): PostListItem {
  return {
    id: post.id,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    coverImage: post.coverImage,
    category: post.category,
    tags: post.tags,
    createdAt: post.createdAt,
    isTop: post.isTop,
    readingTime: post.readingTime,
  }
}

function delay<T>(data: T, ms = 300): Promise<T> {
  return new Promise(resolve => setTimeout(() => resolve(data), ms))
}

export const mockApi = {
  async getPostList(params: {
    page?: number
    pageSize?: number
    category?: string
    tag?: string
    keyword?: string
    year?: string
  }): Promise<PostListResult> {
    const { page = 1, pageSize = 10, category, tag, keyword, year } = params
    let filtered: Post[] = posts.filter((p: Post) => p.isPublished)

    if (category) {
      filtered = filtered.filter((p: Post) => p.category === category)
    }
    if (tag) {
      filtered = filtered.filter((p: Post) => p.tags.includes(tag))
    }
    if (keyword) {
      const kw = keyword.toLowerCase()
      filtered = filtered.filter(
        (p: Post) => p.title.toLowerCase().includes(kw) || p.excerpt.toLowerCase().includes(kw),
      )
    }
    if (year) {
      filtered = filtered.filter((p: Post) => p.createdAt.startsWith(year))
    }

    const topPosts = filtered.filter((p: Post) => p.isTop)
    const normalPosts = filtered.filter((p: Post) => !p.isTop)

    const sortedNormal = normalPosts.sort(
      (a: Post, b: Post) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )
    const allSorted = [...topPosts, ...sortedNormal]

    const total = allSorted.length
    const totalPages = Math.ceil(total / pageSize)
    const start = (page - 1) * pageSize
    const paged = allSorted.slice(start, start + pageSize)

    return delay({
      list: paged.map(toListItem),
      total,
      page,
      pageSize,
      totalPages,
    })
  },

  async getPostBySlug(slug: string): Promise<Post | null> {
    const post = posts.find((p: Post) => p.slug === slug && p.isPublished)
    return delay(post ?? null)
  },

  async getCategories() {
    return delay(categories.filter((c: typeof categories[number]) => c.postCount > 0))
  },

  async getTags() {
    return delay(tags.filter((t: typeof tags[number]) => t.postCount > 0))
  },

  async getArchives() {
    const yearMap = new Map<string, PostListItem[]>()
    posts
      .filter((p: Post) => p.isPublished)
      .sort(
        (a: Post, b: Post) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      )
      .forEach((p: Post) => {
        const year = p.createdAt.slice(0, 4)
        if (!yearMap.has(year)) yearMap.set(year, [])
        yearMap.get(year)!.push(toListItem(p))
      })

    const archives = Array.from(yearMap.entries()).map(([year, posts]) => ({
      year,
      posts,
    }))
    return delay(archives)
  },
}
