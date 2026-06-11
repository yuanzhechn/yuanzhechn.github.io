import { fileURLToPath, URL } from 'node:url'
import { readdir, readFile } from 'node:fs/promises'
import { relative, resolve } from 'node:path'

import matter from 'gray-matter'
import { defineConfig, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

const projectRoot = fileURLToPath(new URL('.', import.meta.url))
const contentDir = resolve(projectRoot, 'content')
const contentIndexPath = resolve(contentDir, 'content-index.json')
const virtualBlogPostsId = 'virtual:blog-posts'
const resolvedVirtualBlogPostsId = `\0${virtualBlogPostsId}`
const virtualChallengesId = 'virtual:challenges'
const resolvedVirtualChallengesId = `\0${virtualChallengesId}`

interface ContentIndexEntry {
  collection?: 'posts' | 'challenges'
  category?: string
  tags?: string[]
  difficulty?: 'easy' | 'medium' | 'hard'
  sequence?: number
  cadence?: 'weekly' | 'biweekly' | 'monthly' | 'irregular'
}

interface ContentIndex {
  entries?: Record<string, ContentIndexEntry>
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

async function loadContentIndex(): Promise<ContentIndex> {
  const raw = await readFile(contentIndexPath, 'utf-8').catch(() => '{}')
  return JSON.parse(raw) as ContentIndex
}

function normalizeBoolean(value: unknown): boolean | undefined {
  return typeof value === 'boolean' ? value : undefined
}

async function loadCollection(collection: 'posts' | 'challenges') {
  const collectionDir = resolve(contentDir, collection)
  const index = await loadContentIndex()
  const files = await findMarkdownFiles(collectionDir)
  const slugs = new Set<string>()

  const entries = await Promise.all(
    files.map(async (file) => {
      const raw = await readFile(file, 'utf-8')
      const { data, content } = matter(raw)
      const contentPath = normalizePath(relative(contentDir, file))
      const indexed = index.entries?.[contentPath] ?? {}
      const mergedData: Record<string, unknown> = {
        ...data,
        ...indexed,
        tags: indexed.tags ?? data.tags,
        collection,
      }

      if (normalizeBoolean(mergedData.isPublished) === false || mergedData.draft === true) {
        return null
      }

      const slug = typeof mergedData.slug === 'string' ? mergedData.slug.trim() : ''
      if (!slug) {
        throw new Error(`[content] ${contentPath} 缺少 slug`)
      }
      if (slugs.has(slug)) {
        throw new Error(`[content] ${collection} 集合存在重复 slug: ${slug}`)
      }
      slugs.add(slug)

      return {
        filepath: `/${normalizePath(relative(projectRoot, file))}`,
        data: mergedData,
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
        `${normalizePath(contentDir)}/posts/**/*.md`,
        `${normalizePath(contentDir)}/challenges/**/*.md`,
        normalizePath(contentIndexPath),
      ])
    },
    handleHotUpdate(ctx) {
      const normalizedFile = normalizePath(ctx.file)
      if (
        !normalizedFile.includes('/content/') ||
        (!ctx.file.endsWith('.md') && normalizedFile !== normalizePath(contentIndexPath))
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

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools(), contentPlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
