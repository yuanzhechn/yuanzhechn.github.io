import markdownFiles from 'virtual:blog-posts'
import type { Post, PostListItem, Category, Tag, ArchiveItem } from '@/types'
import { slugifyHeading } from '@/utils/markdown'

interface FrontmatterInput {
  title?: unknown
  slug?: unknown
  date?: unknown
  updated?: unknown
  category?: unknown
  tags?: unknown
  excerpt?: unknown
  coverImage?: unknown
  isTop?: unknown
  isPublished?: unknown
  draft?: unknown
  author?: unknown
}

interface MarkdownFile {
  filepath: string
  data: FrontmatterInput
  content: string
}

const categoryConfig: Record<string, { name: string; description: string; color: string }> = {
  frontend: {
    name: '前端开发',
    description: 'HTML/CSS/JavaScript/Vue/React 等前端技术文章',
    color: '#4FC08D',
  },
  backend: {
    name: '后端开发',
    description: 'Node.js/Java/Python 等后端技术文章',
    color: '#F7DF1E',
  },
  tools: { name: '工具效率', description: '开发工具、效率提升相关文章', color: '#FF6B6B' },
  life: { name: '生活随笔', description: '日常生活、读书感悟分享', color: '#845EC2' },
  guides: {
    name: '使用指南',
    description: '博客维护、内容管理和主题使用说明',
    color: '#3B82F6',
  },
  notes: { name: '随笔记录', description: '未单独归类的 Markdown 文章', color: '#38BDF8' },
}

function normalizeText(value: unknown, fallback = ''): string {
  return typeof value === 'string' && value.trim() ? value.trim() : fallback
}

function normalizeBoolean(value: unknown, fallback = false): boolean {
  if (typeof value === 'boolean') return value
  return fallback
}

function normalizeDate(value: unknown, fallback = '1970-01-01'): string {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10)
  }

  if (typeof value === 'string' && value.trim()) {
    const date = new Date(value)
    if (!Number.isNaN(date.getTime())) return date.toISOString().slice(0, 10)
  }

  return fallback
}

function normalizeTags(tags: unknown): string[] {
  if (!tags) return []
  if (Array.isArray(tags)) return tags.map((tag) => String(tag).trim()).filter(Boolean)
  if (typeof tags === 'string')
    return tags
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean)
  return []
}

function computeWordCount(content: string): number {
  const cn = content.match(/[\u4e00-\u9fff]/g)?.length ?? 0
  const en = content.match(/[a-zA-Z]+/g)?.reduce((sum, w) => sum + w.length, 0) ?? 0
  return cn + Math.ceil(en / 5)
}

function computeReadingTime(wordCount: number): number {
  return Math.max(1, Math.ceil(wordCount / 300))
}

function relativePath(filepath: string): string {
  return filepath.replace(/^\/content\//, '').replace(/\\/g, '/')
}

function pathWithoutExt(filepath: string): string {
  return relativePath(filepath)
    .replace(/\.md$/i, '')
    .replace(/\/index$/i, '')
}

function slugFromPath(filepath: string): string {
  return pathWithoutExt(filepath)
    .split('/')
    .map((segment) => slugifyHeading(segment) || 'note')
    .join('-')
}

function inferTitle(filepath: string, content: string): string {
  const heading = content.match(/^#\s+(.+)$/m)?.[1]?.trim()
  if (heading) return heading

  const fileName = pathWithoutExt(filepath).split('/').at(-1) ?? '未命名文章'
  return fileName.replace(/[-_]+/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())
}

function createExcerpt(content: string, fallback: string): string {
  const plain = content
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[*_>#~-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

  return plain ? plain.slice(0, 140) : fallback
}

function readFiles(): { posts: Post[]; categories: Category[]; tags: Tag[] } {
  const rawPosts: Post[] = []

  for (const file of markdownFiles as MarkdownFile[]) {
    const { filepath, content } = file
    const fm = file.data

    if (fm.isPublished === false || normalizeBoolean(fm.draft)) continue

    const tags = normalizeTags(fm.tags)
    const bodyContent = content.trim()
    const wordCount = computeWordCount(bodyContent)
    const title = normalizeText(fm.title, inferTitle(filepath, bodyContent))
    const createdAt = normalizeDate(fm.date)

    rawPosts.push({
      id: normalizeText(fm.slug, slugFromPath(filepath)),
      title,
      slug: normalizeText(fm.slug, slugFromPath(filepath)),
      excerpt: normalizeText(fm.excerpt, createExcerpt(bodyContent, title)),
      content: bodyContent,
      coverImage: normalizeText(fm.coverImage),
      category: normalizeText(fm.category),
      tags,
      author: normalizeText(fm.author, '博主'),
      createdAt,
      updatedAt: normalizeDate(fm.updated, createdAt),
      isPublished: true,
      isTop: normalizeBoolean(fm.isTop),
      wordCount,
      readingTime: computeReadingTime(wordCount),
      viewCount: 0,
    })
  }

  rawPosts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

  const categoryMap = new Map<string, number>()
  const tagMap = new Map<string, number>()

  for (const post of rawPosts) {
    categoryMap.set(post.category, (categoryMap.get(post.category) ?? 0) + 1)
    for (const tag of post.tags) {
      tagMap.set(tag, (tagMap.get(tag) ?? 0) + 1)
    }
  }

  const categories: Category[] = Array.from(categoryMap.entries()).map(([slug, count]) => {
    const config = categoryConfig[slug] ?? { name: slug, description: '', color: '#64748B' }
    return {
      id: slug,
      name: config.name,
      slug,
      description: config.description,
      postCount: count,
      color: config.color,
    }
  })

  const tags: Tag[] = Array.from(tagMap.entries()).map(([slug, count]) => ({
    id: slug,
    name: slug,
    slug,
    postCount: count,
  }))

  return { posts: rawPosts, categories, tags }
}

const { posts: _posts, categories: _categories, tags: _tags } = readFiles()

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

export function getPostList(params: {
  page?: number
  pageSize?: number
  category?: string
  tag?: string
  keyword?: string
  year?: string
}) {
  const { page = 1, pageSize = 10, category, tag, keyword, year } = params
  let filtered = [..._posts]

  if (category) filtered = filtered.filter((p) => p.category === category)
  if (tag) filtered = filtered.filter((p) => p.tags.includes(tag))
  if (keyword) {
    const kw = keyword.toLowerCase()
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(kw) ||
        p.excerpt.toLowerCase().includes(kw) ||
        p.content.toLowerCase().includes(kw),
    )
  }
  if (year) filtered = filtered.filter((p) => p.createdAt.startsWith(year))

  const topPosts = filtered.filter((p) => p.isTop)
  const normalPosts = filtered.filter((p) => !p.isTop)
  const allSorted = [...topPosts, ...normalPosts]

  const total = allSorted.length
  const totalPages = Math.ceil(total / pageSize)
  const start = (page - 1) * pageSize
  const paged = allSorted.slice(start, start + pageSize)

  return {
    list: paged.map(toListItem),
    total,
    page,
    pageSize,
    totalPages,
  }
}

export function getPostBySlug(slug: string): Post | null {
  return _posts.find((p) => p.slug === slug) ?? null
}

export function getCategories(): Category[] {
  return _categories
}

export function getTags(): Tag[] {
  return _tags
}

export function getArchives(): ArchiveItem[] {
  const yearMap = new Map<string, PostListItem[]>()
  for (const post of _posts) {
    const year = post.createdAt.slice(0, 4)
    if (!yearMap.has(year)) yearMap.set(year, [])
    yearMap.get(year)!.push(toListItem(post))
  }

  return Array.from(yearMap.entries())
    .map(([year, posts]) => ({ year, posts }))
    .sort((a, b) => b.year.localeCompare(a.year))
}
