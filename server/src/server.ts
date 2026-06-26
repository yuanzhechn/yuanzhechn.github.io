import Fastify, { type FastifyError } from 'fastify'
import cors from '@fastify/cors'
import rateLimit from '@fastify/rate-limit'
import staticPlugin from '@fastify/static'
import { config } from './config.js'
import {
  getChallenge,
  getPost,
  getLearningDocument,
  listArchives,
  listCategories,
  listChallenges,
  listPosts,
  listLearningDocuments,
  listTags,
  listContentByTag,
  readContentAsset,
} from './content.js'
import { listFavoriteSites } from './favorites.js'

const app = Fastify({ logger: true, bodyLimit: 2 * 1024 * 1024 })

await app.register(cors, {
  methods: ['GET', 'HEAD', 'OPTIONS'],
  origin(origin, callback) {
    if (!origin || config.frontendOrigins.includes('*') || config.frontendOrigins.includes(origin)) {
      callback(null, true)
      return
    }
    callback(new Error('不允许的请求来源'), false)
  },
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
