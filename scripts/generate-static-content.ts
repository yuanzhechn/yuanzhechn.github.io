import { copyFile, cp, mkdir, rm, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

process.env.CONTENT_DIR ||= './server/content'
process.env.ASSETS_DIR ||= './server/content-assets'
process.env.DATA_DIR ||= './server/data'
process.env.PUBLIC_DIR ||= './dist'

const [
  content,
  favorites,
] = await Promise.all([
  import('../server/src/content.ts'),
  import('../server/src/favorites.ts'),
])

const outputDir = resolve(process.cwd(), 'dist/static-api')
const assetsSource = resolve(process.cwd(), 'server/content-assets')
const assetsTarget = resolve(process.cwd(), 'dist/content-assets')

const postList = await content.listPosts({ page: 1, pageSize: 10000 })
const posts = await Promise.all(postList.list.map((post) => content.getPost(post.slug)))
const categories = await content.listCategories()
const tags = await content.listTags()
const archives = await content.listArchives()
const tagContent = Object.fromEntries(
  await Promise.all(tags.map(async (tag) => [tag.slug, await content.listContentByTag(tag.slug)])),
)

const documentGroups = await content.listLearningDocuments()
const documents = await Promise.all(
  documentGroups
    .flatMap((group) => group.documents.map((document) => ({ groupSlug: group.slug, slug: document.slug })))
    .map((item) => content.getLearningDocument(item.groupSlug, item.slug)),
)

const challengeGroups = await content.listChallenges()
const challenges = await Promise.all(
  challengeGroups
    .flatMap((group) => group.challenges.map((challenge) => ({ groupSlug: group.slug, slug: challenge.slug })))
    .map((item) => content.getChallenge(item.groupSlug, item.slug)),
)

const payload = {
  generatedAt: new Date().toISOString(),
  posts: posts.filter(Boolean),
  categories,
  tags,
  archives,
  tagContent,
  documentGroups,
  documents: documents.filter(Boolean),
  challengeGroups,
  challenges: challenges.filter(Boolean),
  favorites: await favorites.listFavoriteSites(),
}

await mkdir(outputDir, { recursive: true })
await writeFile(resolve(outputDir, 'content.json'), `${JSON.stringify(payload, null, 2)}\n`, 'utf8')
await copyFile(resolve(process.cwd(), 'dist/index.html'), resolve(process.cwd(), 'dist/404.html'))
await writeFile(resolve(process.cwd(), 'dist/.nojekyll'), '', 'utf8')

await rm(assetsTarget, { recursive: true, force: true })
await cp(assetsSource, assetsTarget, { recursive: true, force: true }).catch(async (error: NodeJS.ErrnoException) => {
  if (error.code !== 'ENOENT') throw error
})
