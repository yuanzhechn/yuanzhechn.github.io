import { mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises'
import { createReadStream } from 'node:fs'
import { extname, join, relative, resolve, sep } from 'node:path'
import Fastify from 'fastify'
import matter from 'gray-matter'

type Collection = 'posts' | 'documents' | 'challenges'

interface ContentPayload {
  originalPath?: string
  collection: Collection
  title: string
  slug: string
  category?: string
  tags: string[]
  excerpt?: string
  isTop?: boolean
  isPublished: boolean
  groupTitle?: string
  groupSlug?: string
  order?: number
  dueAt?: string
  difficulty?: 'easy' | 'medium' | 'hard'
  sequence?: number
  cadence?: 'weekly' | 'biweekly' | 'monthly' | 'irregular'
  content: string
  assets?: AssetPayload[]
}

interface AssetPayload {
  name: string
  data: string
}

const port = Number(process.env.UPDATE_PORT || 5174)
const host = process.env.UPDATE_HOST || '127.0.0.1'
const updateDir = resolve(import.meta.dirname)
const rootDir = resolve(updateDir, '..')
const contentDir = resolve(rootDir, 'server/content')
const assetsDir = resolve(rootDir, 'server/content-assets')
const publicDir = resolve(updateDir, 'public')

const collections: Collection[] = ['posts', 'documents', 'challenges']

const app = Fastify({ logger: true })

const mimeTypes: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
}

function normalizePath(path: string) {
  return path.split(sep).join('/')
}

function assertInside(filepath: string, root: string) {
  const normalizedRoot = resolve(root)
  const normalizedFile = resolve(filepath)
  if (normalizedFile !== normalizedRoot && !normalizedFile.startsWith(`${normalizedRoot}${sep}`)) {
    throw new Error('非法文件路径')
  }
}

function safeSlug(value: string, label: string) {
  const slug = value.trim()
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    throw new Error(`${label} 只能使用小写字母、数字和连字符，例如 database-basic`)
  }
  return slug
}

function safeAssetPath(value: string) {
  const segments = value
    .split(/[\\/]+/)
    .map((segment) => segment.trim())
    .filter((segment) => segment && segment !== '.')
  if (!segments.length || segments.some((segment) => segment === '..')) {
    throw new Error('附件路径不合法')
  }
  return segments.map((segment) => segment.replace(/[^\w\u4e00-\u9fa5.-]/g, '-'))
}

function normalizeAssetName(value: string) {
  return safeAssetPath(value).join('/')
}

function shouldRewriteAssetLink(url: string) {
  return (
    url &&
    !url.startsWith('/') &&
    !url.startsWith('#') &&
    !/^[a-z][a-z0-9+.-]*:/i.test(url)
  )
}

function assetUrlFor(payload: ContentPayload, url: string) {
  const targetName = normalizeAssetName(url)
  const filename = normalizeAssetName(url.split(/[\\/]+/).pop() || url)
  const matched = payload.assets?.find((asset) => {
    const assetName = normalizeAssetName(asset.name)
    return assetName === targetName || assetName.endsWith(`/${filename}`) || assetName === filename
  })
  return `/content-assets/${payload.slug}/${matched ? normalizeAssetName(matched.name) : targetName}`
}

function rewriteAssetLinks(payload: ContentPayload) {
  if (!payload.assets?.length) return payload.content
  return payload.content
    .replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+(['"][^'"]*['"]))?\)/g, (full, alt, url, title = '') =>
      shouldRewriteAssetLink(url) ? `![${alt}](${assetUrlFor(payload, url)}${title ? ` ${title}` : ''})` : full,
    )
    .replace(/<img\b([^>]*?)\bsrc=["']([^"']+)["']([^>]*)>/gi, (full, before, url, after) =>
      shouldRewriteAssetLink(url) ? `<img${before}src="${assetUrlFor(payload, url)}"${after}>` : full,
    )
}

function today() {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Shanghai',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date())
}

async function findMarkdownFiles(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true }).catch(() => [])
  return (
    await Promise.all(
      entries.map(async (entry) => {
        const filepath = resolve(directory, entry.name)
        if (entry.isDirectory()) return findMarkdownFiles(filepath)
        return entry.isFile() && extname(entry.name).toLowerCase() === '.md' ? [filepath] : []
      }),
    )
  ).flat()
}

async function readAllContent() {
  const documents = []
  for (const collection of collections) {
    const files = await findMarkdownFiles(resolve(contentDir, collection))
    for (const filepath of files) {
      const parsed = matter(await readFile(filepath, 'utf8'))
      const data = parsed.data as Record<string, unknown>
      documents.push({
        path: normalizePath(relative(contentDir, filepath)),
        collection,
        title: String(data.title || ''),
        slug: String(data.slug || ''),
        category: typeof data.category === 'string' ? data.category : '',
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
        excerpt: typeof data.excerpt === 'string' ? data.excerpt : '',
        isTop: Boolean(data.isTop),
        isPublished: data.isPublished !== false,
        groupTitle: typeof data.groupTitle === 'string' ? data.groupTitle : '',
        groupSlug: typeof data.groupSlug === 'string' ? data.groupSlug : '',
        order: Number(data.order) || 1,
        dueAt: typeof data.dueAt === 'string' ? data.dueAt : '',
        difficulty: typeof data.difficulty === 'string' ? data.difficulty : 'easy',
        sequence: Number(data.sequence) || 1,
        cadence: typeof data.cadence === 'string' ? data.cadence : 'weekly',
        date: typeof data.date === 'string' ? data.date : '',
        updated: typeof data.updated === 'string' ? data.updated : '',
        publishAt: typeof data.publishAt === 'string' ? data.publishAt : '',
        content: parsed.content.trimStart(),
      })
    }
  }
  return documents
}

function targetFile(payload: ContentPayload) {
  const slug = safeSlug(payload.slug, 'slug')
  if (payload.collection === 'posts') return resolve(contentDir, 'posts', `${slug}.md`)

  const groupSlug = safeSlug(payload.groupSlug || '', payload.collection === 'documents' ? '文档集 slug' : '训练集 slug')
  return resolve(contentDir, payload.collection, groupSlug, `${slug}.md`)
}

function validatePayload(input: unknown): ContentPayload {
  if (!input || typeof input !== 'object' || Array.isArray(input)) throw new Error('提交数据格式不正确')
  const payload = input as ContentPayload
  if (!collections.includes(payload.collection)) throw new Error('内容类型不正确')
  if (!payload.title?.trim()) throw new Error('标题不能为空')
  payload.slug = safeSlug(payload.slug || '', 'slug')
  payload.tags = Array.isArray(payload.tags) ? payload.tags.map((tag) => String(tag).trim()).filter(Boolean) : []
  payload.content = typeof payload.content === 'string' ? payload.content : ''
  payload.isPublished = payload.isPublished !== false

  if (payload.collection === 'posts') {
    if (!payload.category?.trim()) throw new Error('博客文章必须填写分类')
  } else {
    if (!payload.groupTitle?.trim()) throw new Error(payload.collection === 'documents' ? '文档集名称不能为空' : '训练集名称不能为空')
    payload.groupSlug = safeSlug(payload.groupSlug || '', payload.collection === 'documents' ? '文档集 slug' : '训练集 slug')
  }

  if (payload.collection === 'challenges') {
    if (!payload.dueAt || !/^\d{4}-\d{2}-\d{2}$/.test(payload.dueAt)) throw new Error('训练计划必须填写截止日期')
    if (!['easy', 'medium', 'hard'].includes(payload.difficulty || '')) throw new Error('训练难度不正确')
    if (!Number.isInteger(Number(payload.sequence)) || Number(payload.sequence) < 1) throw new Error('训练序号必须是正整数')
    if (!['weekly', 'biweekly', 'monthly', 'irregular'].includes(payload.cadence || '')) throw new Error('训练周期不正确')
  }

  if (payload.collection === 'documents' && payload.order !== undefined && (!Number.isInteger(Number(payload.order)) || Number(payload.order) < 1)) {
    throw new Error('文档顺序必须是正整数')
  }

  return payload
}

function frontmatterFor(payload: ContentPayload, existing: Record<string, unknown>) {
  const now = today()
  const base: Record<string, unknown> = {
    collection: payload.collection,
    title: payload.title.trim(),
    slug: payload.slug,
    tags: payload.tags,
    excerpt: payload.excerpt?.trim() || '',
    isPublished: payload.isPublished,
  }

  if (payload.collection === 'posts') {
    base.date = typeof existing.date === 'string' ? existing.date : now
    base.updated = now
    base.category = payload.category?.trim()
    base.isTop = Boolean(payload.isTop)
  }

  if (payload.collection === 'documents') {
    base.date = typeof existing.date === 'string' ? existing.date : now
    base.updated = now
    base.groupSlug = payload.groupSlug
    base.groupTitle = payload.groupTitle?.trim()
    base.order = Number(payload.order) || 1
  }

  if (payload.collection === 'challenges') {
    base.publishAt = typeof existing.publishAt === 'string' ? existing.publishAt : now
    base.dueAt = payload.dueAt
    base.groupSlug = payload.groupSlug
    base.groupTitle = payload.groupTitle?.trim()
    base.difficulty = payload.difficulty
    base.sequence = Number(payload.sequence) || 1
    base.cadence = payload.cadence
  }

  return base
}

async function saveContent(payload: ContentPayload) {
  const nextFile = targetFile(payload)
  assertInside(nextFile, contentDir)

  let existing: Record<string, unknown> = {}
  if (payload.originalPath) {
    const originalFile = resolve(contentDir, payload.originalPath)
    assertInside(originalFile, contentDir)
    const parsed = matter(await readFile(originalFile, 'utf8').catch(() => ''))
    existing = parsed.data
  } else {
    const parsed = matter(await readFile(nextFile, 'utf8').catch(() => ''))
    existing = parsed.data
  }

  await mkdir(resolve(nextFile, '..'), { recursive: true })
  const markdown = matter.stringify(`${rewriteAssetLinks(payload).trim()}\n`, frontmatterFor(payload, existing))
  await writeFile(nextFile, markdown, 'utf8')
  await saveAssets(payload)
  return normalizePath(relative(contentDir, nextFile))
}

async function saveAssets(payload: ContentPayload) {
  if (!payload.assets?.length) return
  const assetRoot = resolve(assetsDir, payload.slug)
  assertInside(assetRoot, assetsDir)
  await mkdir(assetRoot, { recursive: true })

  for (const asset of payload.assets) {
    const segments = safeAssetPath(asset.name)
    const filepath = resolve(assetRoot, ...segments)
    assertInside(filepath, assetRoot)
    const encoded = asset.data.includes(',') ? asset.data.split(',').pop() : asset.data
    if (!encoded) throw new Error(`附件 ${asset.name} 内容为空`)
    await mkdir(resolve(filepath, '..'), { recursive: true })
    await writeFile(filepath, Buffer.from(encoded, 'base64'))
  }
}

app.get('/api/contents', async () => {
  const documents = await readAllContent()
  const tags = [...new Set(documents.flatMap((item) => item.tags))].sort((a, b) => a.localeCompare(b, 'zh-CN'))
  const categories = [...new Set(documents.map((item) => item.category).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'zh-CN'))
  const documentGroups = [...new Map(documents.filter((item) => item.collection === 'documents' && item.groupSlug).map((item) => [item.groupSlug, { slug: item.groupSlug, title: item.groupTitle }])).values()]
  const challengeGroups = [...new Map(documents.filter((item) => item.collection === 'challenges' && item.groupSlug).map((item) => [item.groupSlug, { slug: item.groupSlug, title: item.groupTitle }])).values()]
  return { documents, tags, categories, documentGroups, challengeGroups }
})

app.post('/api/contents', async (request, reply) => {
  try {
    const payload = validatePayload(request.body)
    const path = await saveContent(payload)
    return { ok: true, path }
  } catch (error) {
    reply.code(400)
    return { ok: false, message: error instanceof Error ? error.message : '保存失败' }
  }
})

app.delete('/api/contents', async (request, reply) => {
  try {
    const body = request.body as { path?: string; slug?: string }
    if (!body?.path) throw new Error('缺少要删除的文件路径')
    const filepath = resolve(contentDir, body.path)
    assertInside(filepath, contentDir)
    if (extname(filepath).toLowerCase() !== '.md') throw new Error('只能删除 Markdown 文件')
    await rm(filepath, { force: true })

    if (body.slug) {
      const assetRoot = resolve(assetsDir, body.slug)
      assertInside(assetRoot, assetsDir)
      await rm(assetRoot, { recursive: true, force: true })
    }

    return { ok: true }
  } catch (error) {
    reply.code(400)
    return { ok: false, message: error instanceof Error ? error.message : '删除失败' }
  }
})

app.get('/assets/*', async (request, reply) => {
  const assetPath = String((request.params as { '*': string })['*'] || '')
  const filepath = resolve(publicDir, assetPath)
  assertInside(filepath, publicDir)
  const contentType = mimeTypes[extname(filepath).toLowerCase()] || 'application/octet-stream'
  return reply.header('Cache-Control', 'no-store').type(contentType).send(createReadStream(filepath))
})

app.get('/', async (_request, reply) => {
  return reply.header('Cache-Control', 'no-store').type('text/html').send(await readFile(resolve(publicDir, 'index.html'), 'utf8'))
})

app.listen({ host, port }).then(() => {
  app.log.info(`update tool is running at http://${host}:${port}`)
})
