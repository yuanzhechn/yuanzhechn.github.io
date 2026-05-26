import { fileURLToPath, URL } from 'node:url'
import { readdir, readFile } from 'node:fs/promises'
import { relative, resolve } from 'node:path'

import matter from 'gray-matter'
import { defineConfig, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

const projectRoot = fileURLToPath(new URL('.', import.meta.url))
const contentDir = resolve(projectRoot, 'content')
const virtualBlogPostsId = 'virtual:blog-posts'
const resolvedVirtualBlogPostsId = `\0${virtualBlogPostsId}`

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

function blogContentPlugin(): Plugin {
  return {
    name: 'blog-content',
    resolveId(id) {
      if (id === virtualBlogPostsId) return resolvedVirtualBlogPostsId
      return null
    },
    async load(id) {
      if (id !== resolvedVirtualBlogPostsId) return null

      const files = await findMarkdownFiles(contentDir)
      const posts = await Promise.all(
        files.map(async (file) => {
          const raw = await readFile(file, 'utf-8')
          const { data, content } = matter(raw)

          return {
            filepath: `/${normalizePath(relative(projectRoot, file))}`,
            data,
            content,
          }
        }),
      )

      return `export default ${JSON.stringify(posts)}`
    },
    configureServer(server) {
      server.watcher.add(`${normalizePath(contentDir)}/**/*.md`)
    },
    handleHotUpdate(ctx) {
      if (!normalizePath(ctx.file).includes('/content/') || !ctx.file.endsWith('.md')) {
        return
      }

      const mod = ctx.server.moduleGraph.getModuleById(resolvedVirtualBlogPostsId)
      if (mod) {
        ctx.server.moduleGraph.invalidateModule(mod)
        return [mod]
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools(), blogContentPlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
