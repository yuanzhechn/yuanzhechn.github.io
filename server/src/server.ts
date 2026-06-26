import Fastify, { type FastifyError } from 'fastify'
import cookie from '@fastify/cookie'
import cors from '@fastify/cors'
import multipart from '@fastify/multipart'
import rateLimit from '@fastify/rate-limit'
import staticPlugin from '@fastify/static'
import {
  clearSessionCookie,
  createSessionToken,
  hasAdminSession,
  requireAdmin,
  setSessionCookie,
  verifyPassword,
} from './auth.js'
import { config } from './config.js'
import {
  getChallenge,
  getEditableContent,
  getPost,
  getLearningDocument,
  listArchives,
  listCategories,
  listChallenges,
  listPosts,
  listLearningDocuments,
  listTags,
  listContentByTag,
  createContent,
  deleteContent,
  readContentAsset,
  saveContentAsset,
  updateContent,
} from './content.js'
import type { ContentCollection, EditableContentInput } from './types.js'
import { listFavoriteSites, saveFavoriteSites } from './favorites.js'

const app = Fastify({ logger: true, bodyLimit: 8 * 1024 * 1024 })

await app.register(cookie)
await app.register(multipart, {
  limits: {
    fileSize: 20 * 1024 * 1024,
    files: 80,
  },
})
await app.register(cors, {
  methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  origin(origin, callback) {
    if (!origin || config.frontendOrigins.includes('*') || config.frontendOrigins.includes(origin)) {
      callback(null, true)
      return
    }
    callback(new Error('不允许的请求来源'), false)
  },
  credentials: true,
})
await app.register(rateLimit, { max: 120, timeWindow: '1 minute' })

app.get('/api/health', async () => ({ status: 'ok' }))
app.get('/api/posts', async (request) => listPosts(request.query as Parameters<typeof listPosts>[0]))
app.get('/api/posts/:slug', async (request, reply) => {
  const post = await getPost((request.params as { slug: string }).slug)
  return post || reply.code(404).send({ message: '文章不存在' })
})
app.get('/api/categories', listCategories)
app.get('/api/tags', listTags)
app.get('/api/tags/:tag/content', async (request) =>
  listContentByTag(decodeURIComponent((request.params as { tag: string }).tag)),
)
app.get('/api/archives', listArchives)
app.get('/api/favorites', listFavoriteSites)
app.get('/content-assets/*', async (request, reply) => {
  const assetPath = (request.params as { '*': string })['*']
  const file = await readContentAsset(assetPath)
  if (!file) return reply.code(404).send({ message: '资源不存在' })
  const ext = assetPath.split('.').pop()?.toLowerCase()
  const mimeTypes: Record<string, string> = {
    avif: 'image/avif',
    gif: 'image/gif',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    svg: 'image/svg+xml',
    webp: 'image/webp',
  }
  return reply.type(mimeTypes[ext || ''] || 'application/octet-stream').send(file)
})
app.get('/api/challenges', listChallenges)
app.get('/api/challenges/:groupSlug/:slug', async (request, reply) => {
  const { groupSlug, slug } = request.params as { groupSlug: string; slug: string }
  const challenge = await getChallenge(groupSlug, slug)
  return challenge || reply.code(404).send({ message: '题目不存在' })
})
app.get('/api/documents', listLearningDocuments)
app.get('/api/documents/:groupSlug/:slug', async (request, reply) => {
  const { groupSlug, slug } = request.params as { groupSlug: string; slug: string }
  const document = await getLearningDocument(groupSlug, slug)
  return document || reply.code(404).send({ message: '学习文档不存在' })
})

app.get('/api/admin/session', async (request) => ({ authenticated: hasAdminSession(request) }))
app.post(
  '/api/admin/login',
  { config: { rateLimit: { max: 5, timeWindow: '1 minute' } } },
  async (request, reply) => {
    const password = (request.body as { password?: unknown } | undefined)?.password
    if (typeof password !== 'string' || !(await verifyPassword(password))) {
      return reply.code(401).send({ message: '密码错误' })
    }
    setSessionCookie(reply, createSessionToken())
    return { authenticated: true }
  },
)
app.post('/api/admin/logout', async (_request, reply) => {
  clearSessionCookie(reply)
  return { authenticated: false }
})
app.put('/api/admin/favorites', { preHandler: requireAdmin }, async (request, reply) => {
  try {
    return await saveFavoriteSites(request.body)
  } catch (error) {
    return reply.code(400).send({ message: error instanceof Error ? error.message : '保存收藏网站失败' })
  }
})
app.get('/api/admin/content/:collection/:slug', { preHandler: requireAdmin }, async (request, reply) => {
  const { collection, slug } = request.params as { collection: ContentCollection; slug: string }
  if (!['posts', 'challenges', 'documents'].includes(collection)) return reply.code(400).send({ message: '内容类型无效' })
  const content = await getEditableContent(collection, slug)
  return content || reply.code(404).send({ message: '内容不存在' })
})
app.post('/api/admin/content/:collection', { preHandler: requireAdmin }, async (request, reply) => {
  const { collection } = request.params as { collection: ContentCollection }
  if (!['posts', 'challenges', 'documents'].includes(collection)) return reply.code(400).send({ message: '内容类型无效' })
  try {
    return reply.code(201).send(await createContent(collection, request.body as EditableContentInput))
  } catch (error) {
    return reply.code(400).send({ message: error instanceof Error ? error.message : '发布失败' })
  }
})
app.put('/api/admin/content/:collection/:slug', { preHandler: requireAdmin }, async (request, reply) => {
  const { collection, slug } = request.params as { collection: ContentCollection; slug: string }
  if (!['posts', 'challenges', 'documents'].includes(collection)) return reply.code(400).send({ message: '内容类型无效' })
  try {
    return await updateContent(collection, slug, request.body as EditableContentInput)
  } catch (error) {
    return reply.code(400).send({ message: error instanceof Error ? error.message : '保存失败' })
  }
})
app.delete('/api/admin/content/:collection/:slug', { preHandler: requireAdmin }, async (request, reply) => {
  const { collection, slug } = request.params as { collection: ContentCollection; slug: string }
  if (!['posts', 'challenges', 'documents'].includes(collection)) return reply.code(400).send({ message: '内容类型无效' })
  try {
    return await deleteContent(collection, slug)
  } catch (error) {
    return reply.code(400).send({ message: error instanceof Error ? error.message : '删除失败' })
  }
})
app.post('/api/admin/content/:collection/:slug/assets', { preHandler: requireAdmin }, async (request, reply) => {
  const { collection, slug } = request.params as { collection: ContentCollection; slug: string }
  if (!['posts', 'challenges', 'documents'].includes(collection)) return reply.code(400).send({ message: '内容类型无效' })
  const groupSlug = typeof (request.query as { groupSlug?: unknown }).groupSlug === 'string'
    ? (request.query as { groupSlug: string }).groupSlug
    : undefined
  try {
    const saved: string[] = []
    for await (const part of request.files()) {
      if (part.type !== 'file') continue
      const relativePathField = part.fields.relativePath
      const relativePathValue = Array.isArray(relativePathField)
        ? relativePathField.at(-1)
        : relativePathField
      const relativePath = String(
        (relativePathValue && 'value' in relativePathValue ? relativePathValue.value : undefined) ||
          part.filename ||
          '',
      ).trim()
      if (!relativePath) continue
      saved.push(await saveContentAsset(collection, slug, relativePath, await part.toBuffer(), groupSlug))
    }
    return { saved }
  } catch (error) {
    return reply.code(400).send({ message: error instanceof Error ? error.message : '资源上传失败' })
  }
})

await app.register(staticPlugin, {
  root: config.publicDir,
  prefix: '/',
  decorateReply: true,
})

app.setNotFoundHandler((request, reply) => {
  const url = request.raw.url || ''
  if (url.startsWith('/api/') || url.startsWith('/content-assets/')) {
    return reply.code(404).send({ message: 'Not found' })
  }
  return reply.sendFile('index.html')
})

app.setErrorHandler((error: FastifyError, _request, reply) => {
  app.log.error(error)
  reply.code(error.statusCode || 500).send({
    message: error.statusCode && error.statusCode < 500 ? error.message : '服务器内部错误',
  })
})

await app.listen({ host: config.host, port: config.port })
