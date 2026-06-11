import { fileURLToPath, URL } from 'node:url'
import { readdir, readFile } from 'node:fs/promises'
import { extname, relative, resolve } from 'node:path'

import matter from 'gray-matter'
import { defineConfig, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

const projectRoot = fileURLToPath(new URL('.', import.meta.url))
const contentDir = resolve(projectRoot, 'content')
const virtualBlogPostsId = 'virtual:blog-posts'
const resolvedVirtualBlogPostsId = `\0${virtualBlogPostsId}`
const virtualChallengesId = 'virtual:challenges'
const resolvedVirtualChallengesId = `\0${virtualChallengesId}`

interface ContentMetadata {
  collection?: 'posts' | 'challenges'
  title?: string
  slug?: string
  date?: string
  updated?: string
  publishAt?: string
  dueAt?: string
  category?: string
  tags?: string[]
  excerpt?: string
  coverImage?: string
  isTop?: boolean
  isPublished?: boolean
  author?: string
  difficulty?: 'easy' | 'medium' | 'hard'
  sequence?: number
  cadence?: 'weekly' | 'biweekly' | 'monthly' | 'irregular'
}

function normalizePath(filepath: string): string {
  return filepath.replace(/\\/g, '/')
}

async function findMarkdownFiles(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true }).catch(() => [])
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = resolve(dir, entry.name)

      if (entry.isDirectory()) return findMarkdownFiles(fullPath)
      return entry.isFile() && entry.name.endsWith('.md') ? [fullPath] : []
    }),
  )

  return files.flat()
}

function sidecarPath(markdownPath: string): string {
  return markdownPath.slice(0, -extname(markdownPath).length) + '.json'
}

function assertString(metadata: ContentMetadata, field: keyof ContentMetadata, source: string) {
  const value = metadata[field]
  if (typeof value !== 'string' || !value.trim()) {
    throw new Error(`[content] ${source} 缺少有效的 ${String(field)}`)
  }
}

function validateMetadata(
  metadata: ContentMetadata,
  collection: 'posts' | 'challenges',
  source: string,
) {
  if (metadata.collection !== collection) {
    throw new Error(`[content] ${source} 的 collection 必须是 ${collection}`)
  }

  assertString(metadata, 'title', source)
  assertString(metadata, 'slug', source)
  assertString(metadata, collection === 'posts' ? 'date' : 'publishAt', source)

  if (!Array.isArray(metadata.tags) || metadata.tags.some((tag) => typeof tag !== 'string')) {
    throw new Error(`[content] ${source} 的 tags 必须是字符串数组`)
  }

  if (collection === 'posts') {
    assertString(metadata, 'category', source)
  }
}

async function loadCollection(collection: 'posts' | 'challenges') {
  const files = await findMarkdownFiles(resolve(contentDir, collection))
  const slugs = new Set<string>()

  const entries = await Promise.all(
    files.map(async (file) => {
      const raw = await readFile(file, 'utf-8')
      const { content } = matter(raw)
      const metadataFile = sidecarPath(file)
      const metadataSource = normalizePath(relative(projectRoot, metadataFile))
      const metadataRaw = await readFile(metadataFile, 'utf-8').catch(() => {
        throw new Error(`[content] ${normalizePath(relative(projectRoot, file))} 缺少同名 JSON`)
      })

      let metadata: ContentMetadata
      try {
        metadata = JSON.parse(metadataRaw) as ContentMetadata
      } catch {
        throw new Error(`[content] ${metadataSource} 不是有效的 JSON`)
      }

      validateMetadata(metadata, collection, metadataSource)
      if (metadata.isPublished === false) return null

      const slug = metadata.slug!.trim()
      if (slugs.has(slug)) {
        throw new Error(`[content] ${collection} 集合存在重复 slug: ${slug}`)
      }
      slugs.add(slug)

      return {
        filepath: `/${normalizePath(relative(projectRoot, file))}`,
        metadataPath: `/${metadataSource}`,
        data: metadata,
        content,
      }
    }),
  )

  return entries.filter(Boolean)
}

function contentPlugin(): Plugin {
  return {
    name: 'content-collections',
    resolveId(id) {
      if (id === virtualBlogPostsId) return resolvedVirtualBlogPostsId
      if (id === virtualChallengesId) return resolvedVirtualChallengesId
      return null
    },
    async load(id) {
      if (id === resolvedVirtualBlogPostsId) {
        return `export default ${JSON.stringify(await loadCollection('posts'))}`
      }
      if (id === resolvedVirtualChallengesId) {
        return `export default ${JSON.stringify(await loadCollection('challenges'))}`
      }
      return null
    },
    configureServer(server) {
      server.watcher.add([
        `${normalizePath(contentDir)}/posts/**/*.{md,json}`,
        `${normalizePath(contentDir)}/challenges/**/*.{md,json}`,
      ])
    },
    handleHotUpdate(ctx) {
      const normalizedFile = normalizePath(ctx.file)
      if (
        !normalizedFile.includes('/content/') ||
        (!ctx.file.endsWith('.md') && !ctx.file.endsWith('.json'))
      ) {
        return
      }

      const moduleIds = normalizedFile.includes('/content/challenges/')
        ? [resolvedVirtualChallengesId]
        : normalizedFile.includes('/content/posts/')
          ? [resolvedVirtualBlogPostsId]
          : [resolvedVirtualBlogPostsId, resolvedVirtualChallengesId]
      const modules = moduleIds
        .map((moduleId) => ctx.server.moduleGraph.getModuleById(moduleId))
        .filter((module) => module !== undefined)

      for (const module of modules) {
        ctx.server.moduleGraph.invalidateModule(module)
      }
      return modules
    },
  }
}

export default defineConfig({
  plugins: [vue(), vueDevTools(), contentPlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
