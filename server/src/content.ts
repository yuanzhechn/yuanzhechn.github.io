import { mkdir, readdir, readFile, rename, rm, writeFile } from 'node:fs/promises'
import { dirname, extname, join, relative, resolve, sep } from 'node:path'
import matter from 'gray-matter'
import { config } from './config.js'
import type {
  ChallengeCadence,
  ChallengeDifficulty,
  ContentCollection,
  ContentDocument,
  ContentMetadata,
  EditableContentInput,
} from './types.js'

const categoryConfig: Record<string, { name: string; description: string; color: string }> = {
  frontend: { name: '前端开发', description: 'HTML、CSS、JavaScript、Vue 等前端技术文章', color: '#4FC08D' },
  backend: { name: '后端开发', description: 'Node.js、服务架构与部署实践', color: '#F59E0B' },
  tools: { name: '工具效率', description: '开发工具与工程效率', color: '#EF6A6A' },
  life: { name: '生活随笔', description: '复盘、阅读和生活观察', color: '#8B6FD0' },
  guides: { name: '使用指南', description: '博客维护与主题说明', color: '#3B82F6' },
  notes: { name: '随笔记录', description: '其他 Markdown 内容', color: '#38BDF8' },
}

const normalizePath = (path: string) => path.split(sep).join('/')
const safePathSegments = (path: string) =>
  path
    .split(/[\\/]+/)
    .map((segment) => segment.trim())
    .filter(Boolean)
const isDate = (value: unknown): value is string =>
  typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value)
const nonEmptyString = (value: unknown): value is string =>
  typeof value === 'string' && value.trim().length > 0
const today = () =>
  new Intl.DateTimeFormat('en-CA', { timeZone: config.timeZone }).format(new Date())

function normalizeDate(value: unknown): unknown {
  return value instanceof Date && !Number.isNaN(value.getTime())
    ? value.toISOString().slice(0, 10)
    : value
}

function validateMetadata(input: unknown, expectedCollection?: ContentCollection): ContentMetadata {
  if (!input || typeof input !== 'object' || Array.isArray(input)) throw new Error('元数据格式不正确')
  const data = {
    ...(input as Partial<ContentMetadata>),
    date: normalizeDate((input as Partial<ContentMetadata>).date),
    updated: normalizeDate((input as Partial<ContentMetadata>).updated),
    publishAt: normalizeDate((input as Partial<ContentMetadata>).publishAt),
    dueAt: normalizeDate((input as Partial<ContentMetadata>).dueAt),
  } as Partial<ContentMetadata>
  if (!['posts', 'challenges', 'documents'].includes(data.collection as string)) {
    throw new Error('collection 必须是 posts、challenges 或 documents')
  }
  if (expectedCollection && data.collection !== expectedCollection) {
    throw new Error(`collection 必须是 ${expectedCollection}`)
  }
  if (!nonEmptyString(data.title)) throw new Error('缺少标题')
  if (!nonEmptyString(data.slug) || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(data.slug)) {
    throw new Error('slug 只能包含小写字母、数字和连字符')
  }
  if (!Array.isArray(data.tags) || data.tags.some((tag) => !nonEmptyString(tag))) {
    throw new Error('标签必须是字符串数组')
  }
  if (typeof data.isPublished !== 'boolean') throw new Error('发布状态必须是布尔值')

  if (data.collection === 'posts' || data.collection === 'documents') {
    if (!isDate(data.date) || !isDate(data.updated)) throw new Error('文章日期格式不正确')
    if (data.collection === 'posts' && !nonEmptyString(data.category)) throw new Error('文章缺少分类')
    if (data.collection === 'documents') {
      if (!nonEmptyString(data.groupSlug) || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(data.groupSlug)) {
        throw new Error('学习文档必须选择有效的文档集')
      }
      if (!nonEmptyString(data.groupTitle)) throw new Error('文档集缺少名称')
      if (data.order !== undefined && (!Number.isInteger(data.order) || data.order < 1)) {
        throw new Error('文档顺序必须是正整数')
      }
    }
  } else {
    if (!isDate(data.publishAt) || !isDate(data.dueAt)) throw new Error('训练计划日期格式不正确')
    if (!['easy', 'medium', 'hard'].includes(data.difficulty as ChallengeDifficulty)) {
      throw new Error('难度必须是 easy、medium 或 hard')
    }
    if (!Number.isInteger(data.sequence) || Number(data.sequence) < 1) throw new Error('序号必须是正整数')
    if (!['weekly', 'biweekly', 'monthly', 'irregular'].includes(data.cadence as ChallengeCadence)) {
      throw new Error('训练周期不合法')
    }
    if (!nonEmptyString(data.groupSlug) || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(data.groupSlug)) {
      throw new Error('训练计划必须选择有效的训练集')
    }
    if (!nonEmptyString(data.groupTitle)) throw new Error('训练集缺少名称')
  }
  return data as ContentMetadata
}

async function findMarkdownFiles(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true }).catch(() => [])
  return (
    await Promise.all(
      entries.map(async (entry) => {
        const path = resolve(directory, entry.name)
        if (entry.isDirectory()) return findMarkdownFiles(path)
        return entry.isFile() && extname(entry.name).toLowerCase() === '.md' ? [path] : []
      }),
    )
  ).flat()
}

async function readCollection(collection: ContentCollection, publishedOnly = true): Promise<ContentDocument[]> {
  const files = await findMarkdownFiles(resolve(config.contentDir, collection))
  const slugs = new Set<string>()
  const documents = await Promise.all(
    files.map(async (filepath) => {
      const parsed = matter(await readFile(filepath, 'utf8'))
      const data = validateMetadata(parsed.data, collection)
      if (slugs.has(data.slug)) throw new Error(`存在重复 slug: ${data.slug}`)
      slugs.add(data.slug)
      return {
        filepath: normalizePath(relative(config.contentDir, filepath)),
        data,
        content: parsed.content.trim(),
      }
    }),
  )
  return publishedOnly ? documents.filter((document) => document.data.isPublished) : documents
}

function plainText(markdown: string): string {
  return markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[*_>#~-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function wordCount(content: string): number {
  return (content.match(/[\u4e00-\u9fff]/g)?.length ?? 0) + (content.match(/[a-zA-Z]+/g)?.length ?? 0)
}

function postFromDocument(document: ContentDocument) {
  const { data } = document
  const count = wordCount(document.content)
  return {
    id: data.slug,
    title: data.title,
    slug: data.slug,
    excerpt: data.excerpt || plainText(document.content).slice(0, 140),
    content: document.content,
    category: data.category || 'notes',
    tags: data.tags,
    createdAt: data.date!,
    updatedAt: data.updated || data.date!,
    isPublished: data.isPublished,
    isTop: data.isTop || false,
    wordCount: count,
    readingTime: Math.max(1, Math.ceil(count / 300)),
    viewCount: 0,
  }
}

function challengeFromDocument(document: ContentDocument) {
  const { data } = document
  return {
    id: data.slug,
    slug: data.slug,
    title: data.title,
    excerpt: data.excerpt || plainText(document.content).slice(0, 140),
    content: document.content,
    tags: data.tags,
    publishedAt: data.publishAt!,
    dueAt: data.dueAt!,
    difficulty: data.difficulty!,
    sequence: data.sequence!,
    cadence: data.cadence!,
    readingTime: Math.max(1, Math.ceil(wordCount(document.content) / 300)),
    isPublished: data.isPublished,
    groupSlug: data.groupSlug!,
    groupTitle: data.groupTitle!,
  }
}

function learningDocumentFromDocument(document: ContentDocument) {
  const base = postFromDocument(document)
  return {
    ...base,
    groupSlug: document.data.groupSlug || '',
    groupTitle: document.data.groupTitle || '',
    order: document.data.order || 1,
  }
}

export async function listPosts(query: { page?: number; pageSize?: number; category?: string; tag?: string; keyword?: string; year?: string }) {
  const page = Math.max(1, Number(query.page) || 1)
  const pageSize = Math.min(50, Math.max(1, Number(query.pageSize) || 10))
  let posts = (await readCollection('posts')).map(postFromDocument)
  if (query.category) posts = posts.filter((post) => post.category === query.category)
  if (query.tag) posts = posts.filter((post) => post.tags.includes(query.tag!))
  if (query.year) posts = posts.filter((post) => post.createdAt.startsWith(query.year!))
  if (query.keyword) {
    const keyword = query.keyword.toLowerCase()
    posts = posts.filter((post) => [post.title, post.excerpt, post.content, post.category, ...post.tags].join(' ').toLowerCase().includes(keyword))
  }
  posts.sort((a, b) => (a.isTop !== b.isTop ? (a.isTop ? -1 : 1) : b.createdAt.localeCompare(a.createdAt)))
  const total = posts.length
  return {
    list: posts.slice((page - 1) * pageSize, page * pageSize).map(({ content: _, ...post }) => post),
    total,
    page,
    pageSize,
    totalPages: Math.ceil(total / pageSize),
  }
}

export async function getPost(slug: string) {
  const document = (await readCollection('posts')).find((item) => item.data.slug === slug)
  return document ? postFromDocument(document) : null
}

export async function listCategories() {
  const counts = new Map<string, number>()
  for (const document of await readCollection('posts')) {
    const category = document.data.category!
    counts.set(category, (counts.get(category) || 0) + 1)
  }
  return [...counts.entries()].map(([slug, postCount]) => ({
    id: slug, slug, postCount,
    ...(categoryConfig[slug] || { name: slug, description: '', color: '#64748B' }),
  }))
}

export async function listTags() {
  const counts = new Map<string, number>()
  for (const collection of ['posts', 'challenges', 'documents'] as const) {
    for (const document of await readCollection(collection)) {
      for (const tag of document.data.tags) counts.set(tag, (counts.get(tag) || 0) + 1)
    }
  }
  return [...counts.entries()].map(([slug, postCount]) => ({ id: slug, name: slug, slug, postCount }))
}

export async function listContentByTag(tag: string) {
  const [posts, documents, challenges] = await Promise.all([
    readCollection('posts'),
    readCollection('documents'),
    readCollection('challenges'),
  ])
  return {
    tag,
    posts: posts
      .filter((document) => document.data.tags.includes(tag))
      .map(postFromDocument)
      .map(({ content: _, ...post }) => post),
    documents: documents
      .filter((document) => document.data.tags.includes(tag))
      .map(learningDocumentFromDocument)
      .map(({ content: _, ...document }) => document),
    challenges: challenges
      .filter((document) => document.data.tags.includes(tag))
      .map(challengeFromDocument)
      .map(({ content: _, isPublished: _published, ...challenge }) => challenge),
  }
}

export async function listArchives() {
  const posts = (await readCollection('posts')).map(postFromDocument).sort((a, b) => b.createdAt.localeCompare(a.createdAt)).map(({ content: _, ...post }) => post)
  const years = new Map<string, typeof posts>()
  for (const post of posts) years.set(post.createdAt.slice(0, 4), [...(years.get(post.createdAt.slice(0, 4)) || []), post])
  return [...years.entries()].map(([year, items]) => ({ year, posts: items })).sort((a, b) => b.year.localeCompare(a.year))
}

export async function listChallenges() {
  const challenges = (await readCollection('challenges')).map(challengeFromDocument)
  const groups = new Map<string, { slug: string; title: string; challenges: typeof challenges }>()
  for (const challenge of challenges) {
    const group = groups.get(challenge.groupSlug) || {
      slug: challenge.groupSlug,
      title: challenge.groupTitle,
      challenges: [],
    }
    group.challenges.push(challenge)
    groups.set(challenge.groupSlug, group)
  }
  return [...groups.values()]
    .map((group) => ({
      ...group,
      challenges: group.challenges
        .sort((a, b) => b.sequence - a.sequence)
        .map(({ content: _, isPublished: _published, ...challenge }) => challenge),
    }))
    .sort((a, b) => a.title.localeCompare(b.title, 'zh-CN'))
}

export async function getChallenge(groupSlug: string, slug: string) {
  const document = (await readCollection('challenges')).find(
    (item) => item.data.groupSlug === groupSlug && item.data.slug === slug,
  )
  return document ? challengeFromDocument(document) : null
}

export async function listLearningDocuments() {
  const documents = (await readCollection('documents')).map(learningDocumentFromDocument)
  const groups = new Map<string, { slug: string; title: string; documents: typeof documents }>()
  for (const document of documents) {
    const slug = document.groupSlug || 'ungrouped'
    const title = document.groupTitle || '零散记录'
    const group = groups.get(slug) || { slug, title, documents: [] }
    group.documents.push(document)
    groups.set(slug, group)
  }
  return [...groups.values()]
    .map((group) => ({
      ...group,
      documents: group.documents
        .sort((a, b) => a.order - b.order || b.updatedAt.localeCompare(a.updatedAt))
        .map(({ content: _, ...document }) => document),
    }))
    .sort((a, b) => a.title.localeCompare(b.title, 'zh-CN'))
}

export async function getLearningDocument(groupSlug: string, slug: string) {
  const document = (await readCollection('documents')).find(
    (item) => item.data.groupSlug === groupSlug && item.data.slug === slug,
  )
  return document ? learningDocumentFromDocument(document) : null
}

export async function getEditableContent(collection: ContentCollection, slug: string) {
  const document = (await readCollection(collection, false)).find((item) => item.data.slug === slug)
  if (!document) return null
  return { ...document.data, content: document.content }
}

function cleanInput(input: EditableContentInput, collection: ContentCollection): EditableContentInput {
  return {
    ...input,
    collection,
    title: String(input.title || '').trim(),
    slug: String(input.slug || '').trim(),
    tags: Array.isArray(input.tags) ? input.tags.map(String).map((tag) => tag.trim()).filter(Boolean) : [],
    excerpt: input.excerpt?.trim() || undefined,
    category: input.category?.trim() || undefined,
    groupSlug: input.groupSlug?.trim() || undefined,
    groupTitle: input.groupTitle?.trim() || undefined,
    content: String(input.content || '').trim(),
  }
}

async function atomicWrite(filepath: string, value: string) {
  const temp = `${filepath}.${Date.now()}-${process.pid}.tmp`
  await writeFile(temp, value, { flag: 'wx' })
  try {
    await rename(temp, filepath)
  } catch (error) {
    await rm(temp, { force: true })
    throw error
  }
}

function contentDirectory(collection: ContentCollection, metadata: Pick<ContentMetadata, 'groupSlug'>) {
  return (collection === 'documents' || collection === 'challenges') && metadata.groupSlug
    ? resolve(config.contentDir, collection, metadata.groupSlug)
    : resolve(config.contentDir, collection)
}

function contentAssetDirectory(collection: ContentCollection, slug: string, groupSlug?: string) {
  return (collection === 'documents' || collection === 'challenges') && groupSlug
    ? resolve(config.assetsDir, collection, groupSlug, slug, 'assets')
    : resolve(config.assetsDir, collection, slug, 'assets')
}

function assertInside(filepath: string, root: string) {
  const normalizedRoot = resolve(root)
  const normalizedFile = resolve(filepath)
  if (normalizedFile !== normalizedRoot && !normalizedFile.startsWith(`${normalizedRoot}${sep}`)) {
    throw new Error('非法文件路径')
  }
}

function serializableMetadata(metadata: ContentMetadata) {
  return Object.fromEntries(
    Object.entries(metadata).filter(([, value]) => value !== undefined),
  )
}

export async function createContent(collection: ContentCollection, rawInput: EditableContentInput) {
  const input = cleanInput(rawInput, collection)
  if (!input.content) throw new Error('Markdown 正文不能为空')
  if ((await readCollection(collection, false)).some((item) => item.data.slug === input.slug)) {
    throw new Error('该 slug 已存在')
  }
  const currentDate = today()
  const metadata: ContentMetadata = collection === 'posts' || collection === 'documents'
    ? { ...input, collection, date: currentDate, updated: currentDate }
    : { ...input, collection, publishAt: currentDate }
  validateMetadata(metadata, collection)
  const directory = contentDirectory(collection, metadata)
  const filepath = resolve(directory, `${metadata.slug}.md`)
  await mkdir(directory, { recursive: true })
  await atomicWrite(filepath, matter.stringify(`${input.content}\n`, serializableMetadata(metadata)))
  return { slug: metadata.slug, collection }
}

export async function updateContent(collection: ContentCollection, slug: string, rawInput: EditableContentInput) {
  const input = cleanInput(rawInput, collection)
  if (input.slug !== slug) throw new Error('编辑时不能修改 slug')
  if (!input.content) throw new Error('Markdown 正文不能为空')
  const existing = (await readCollection(collection, false)).find((item) => item.data.slug === slug)
  if (!existing) throw new Error('内容不存在')
  const metadata: ContentMetadata = collection === 'posts' || collection === 'documents'
    ? { ...input, collection, date: existing.data.date, updated: today() }
    : { ...input, collection, publishAt: existing.data.publishAt }
  validateMetadata(metadata, collection)
  const filepath = resolve(config.contentDir, existing.filepath)
  const expectedRoot = `${resolve(config.contentDir, collection)}${sep}`
  if (!filepath.startsWith(expectedRoot)) throw new Error('非法文件路径')
  await atomicWrite(filepath, matter.stringify(`${input.content}\n`, serializableMetadata(metadata)))
  return { slug, collection }
}

export async function deleteContent(collection: ContentCollection, slug: string) {
  const existing = (await readCollection(collection, false)).find((item) => item.data.slug === slug)
  if (!existing) throw new Error('内容不存在')
  const filepath = resolve(config.contentDir, existing.filepath)
  assertInside(filepath, resolve(config.contentDir, collection))
  await rm(filepath, { force: true })
  await rm(contentAssetDirectory(collection, slug, existing.data.groupSlug), { recursive: true, force: true })
  return { slug, collection }
}

export async function saveContentAsset(
  collection: ContentCollection,
  slug: string,
  relativePath: string,
  buffer: Buffer,
  groupSlug?: string,
) {
  const existing = (await readCollection(collection, false)).find((item) => item.data.slug === slug)
  if (!existing) throw new Error('内容不存在')
  if ((collection === 'documents' || collection === 'challenges') && existing.data.groupSlug !== groupSlug) {
    throw new Error('集合路径不匹配')
  }
  const segments = safePathSegments(relativePath)
  if (!segments.length || segments.some((segment) => segment === '.' || segment === '..')) {
    throw new Error('资源文件路径无效')
  }
  const root = contentAssetDirectory(collection, slug, existing.data.groupSlug)
  const filepath = join(root, ...segments)
  assertInside(filepath, root)
  await mkdir(dirname(filepath), { recursive: true })
  await writeFile(filepath, buffer)
  return normalizePath(relative(config.assetsDir, filepath))
}

export async function readContentAsset(assetPath: string) {
  const segments = safePathSegments(assetPath)
  if (!segments.length || segments.some((segment) => segment === '.' || segment === '..')) return null
  const filepath = join(config.assetsDir, ...segments)
  assertInside(filepath, config.assetsDir)
  return readFile(filepath).catch(() => null)
}
