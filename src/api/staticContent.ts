import type {
  ArchiveItem,
  Category,
  Challenge,
  ChallengeGroup,
  DocumentGroup,
  FavoriteSite,
  Post,
  PostListItem,
  PostListResult,
  PostQueryParams,
  Tag,
  TagContentResult,
} from '@/types'

interface StaticContentPayload {
  generatedAt: string
  posts: Post[]
  categories: Category[]
  tags: Tag[]
  archives: ArchiveItem[]
  tagContent: Record<string, TagContentResult>
  documentGroups: DocumentGroup[]
  documents: Array<DocumentGroup['documents'][number] & { content: string }>
  challengeGroups: ChallengeGroup[]
  challenges: Challenge[]
  favorites: Array<Omit<FavoriteSite, 'domain' | 'iconUrl'> & { iconUrl?: string }>
}

let staticContentPromise: Promise<StaticContentPayload> | null = null

function loadStaticContent() {
  staticContentPromise ??= fetch('/static-api/content.json', { cache: 'no-cache' }).then((response) => {
    if (!response.ok) throw new Error(`静态内容不存在 (${response.status})`)
    return response.json() as Promise<StaticContentPayload>
  })
  return staticContentPromise
}

function toPostListItem(post: Post): PostListItem {
  const { content: _content, updatedAt: _updatedAt, isPublished: _isPublished, wordCount: _wordCount, viewCount: _viewCount, ...item } = post
  return item
}

function paginatePosts(posts: Post[], params: PostQueryParams = {}): PostListResult {
  const page = Math.max(1, Number(params.page) || 1)
  const pageSize = Math.min(100, Math.max(1, Number(params.pageSize) || 10))
  let filtered = [...posts]
  if (params.category) filtered = filtered.filter((post) => post.category === params.category)
  if (params.tag) filtered = filtered.filter((post) => post.tags.includes(params.tag))
  if (params.year) filtered = filtered.filter((post) => post.createdAt.startsWith(String(params.year)))
  if (params.keyword) {
    const keyword = params.keyword.toLowerCase()
    filtered = filtered.filter((post) =>
      [post.title, post.excerpt, post.content, post.category, ...post.tags].join(' ').toLowerCase().includes(keyword),
    )
  }
  filtered.sort((a, b) => (a.isTop !== b.isTop ? (a.isTop ? -1 : 1) : b.createdAt.localeCompare(a.createdAt)))
  return {
    list: filtered.slice((page - 1) * pageSize, page * pageSize).map(toPostListItem),
    total: filtered.length,
    page,
    pageSize,
    totalPages: Math.ceil(filtered.length / pageSize),
  }
}

export const staticContentApi = {
  async getPostList(params: PostQueryParams = {}) {
    return paginatePosts((await loadStaticContent()).posts, params)
  },
  async getPostBySlug(slug: string) {
    return (await loadStaticContent()).posts.find((post) => post.slug === slug) ?? null
  },
  async getCategories() {
    return (await loadStaticContent()).categories
  },
  async getTags() {
    return (await loadStaticContent()).tags
  },
  async getContentByTag(tag: string) {
    return (await loadStaticContent()).tagContent[tag] ?? { tag, posts: [], documents: [], challenges: [] }
  },
  async getArchives() {
    return (await loadStaticContent()).archives
  },
  async listDocumentGroups() {
    return (await loadStaticContent()).documentGroups
  },
  async getDocumentBySlug(groupSlug: string, slug: string) {
    return (await loadStaticContent()).documents.find(
      (document) => document.groupSlug === groupSlug && document.slug === slug,
    )
  },
  async listChallengeGroups() {
    return (await loadStaticContent()).challengeGroups
  },
  async getChallengeBySlug(groupSlug: string, slug: string) {
    return (await loadStaticContent()).challenges.find(
      (challenge) => challenge.groupSlug === groupSlug && challenge.slug === slug,
    ) ?? null
  },
  async listFavorites() {
    return (await loadStaticContent()).favorites
  },
}
