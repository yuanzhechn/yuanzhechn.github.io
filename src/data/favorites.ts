import type { FavoriteCategory, FavoriteSite } from '@/types'

interface FavoriteSiteInput {
  id: string
  name: string
  url: string
  description: string
  category: FavoriteCategory
  accent: string
}

function buildFavoriteSite(site: FavoriteSiteInput): FavoriteSite {
  const domain = new URL(site.url).hostname.replace(/^www\./, '')

  return {
    ...site,
    domain,
    iconUrl: `https://www.google.com/s2/favicons?domain=${domain}&sz=128`,
  }
}

export const favoriteCategoryMeta: Record<
  FavoriteCategory,
  { title: string; description: string }
> = {
  development: {
    title: '开发',
    description: '文档、代码托管和前端调试时最常开的站点。',
  },
  design: {
    title: '设计',
    description: '画图、原型、灵感和兼容性检查放在一起。',
  },
  productivity: {
    title: '效率',
    description: '日常检索、部署、协作和 AI 工具的快捷入口。',
  },
}

export const favoriteSites: FavoriteSite[] = [
  buildFavoriteSite({
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com',
    description: '代码托管、Issue 和 PR 都在这儿。',
    category: 'development',
    accent: '#171515',
  }),
  buildFavoriteSite({
    id: 'mdn',
    name: 'MDN',
    url: 'https://developer.mozilla.org',
    description: '查 HTML、CSS 和 JavaScript 细节最稳。',
    category: 'development',
    accent: '#0f172a',
  }),
  buildFavoriteSite({
    id: 'vue',
    name: 'Vue',
    url: 'https://vuejs.org',
    description: 'Vue 文档和生态入口。',
    category: 'development',
    accent: '#42b883',
  }),
  buildFavoriteSite({
    id: 'vite',
    name: 'Vite',
    url: 'https://vite.dev',
    description: '脚手架、构建配置和插件说明。',
    category: 'development',
    accent: '#f5b041',
  }),
  buildFavoriteSite({
    id: 'figma',
    name: 'Figma',
    url: 'https://www.figma.com',
    description: '看稿、标注和做快速原型。',
    category: 'design',
    accent: '#7c3aed',
  }),
  buildFavoriteSite({
    id: 'excalidraw',
    name: 'Excalidraw',
    url: 'https://excalidraw.com',
    description: '随手画流程图和方案草图。',
    category: 'design',
    accent: '#f97316',
  }),
  buildFavoriteSite({
    id: 'caniuse',
    name: 'Can I Use',
    url: 'https://caniuse.com',
    description: '看 CSS 和浏览器兼容性。',
    category: 'design',
    accent: '#06b6d4',
  }),
  buildFavoriteSite({
    id: 'dribbble',
    name: 'Dribbble',
    url: 'https://dribbble.com',
    description: '找视觉参考和界面灵感。',
    category: 'design',
    accent: '#ea4c89',
  }),
  buildFavoriteSite({
    id: 'openai',
    name: 'OpenAI',
    url: 'https://platform.openai.com',
    description: '模型、API 和控制台入口。',
    category: 'productivity',
    accent: '#10a37f',
  }),
  buildFavoriteSite({
    id: 'npm',
    name: 'npm',
    url: 'https://www.npmjs.com',
    description: '查包、版本和下载趋势。',
    category: 'productivity',
    accent: '#cb3837',
  }),
  buildFavoriteSite({
    id: 'vercel',
    name: 'Vercel',
    url: 'https://vercel.com',
    description: '部署、预览和项目状态。',
    category: 'productivity',
    accent: '#111827',
  }),
  buildFavoriteSite({
    id: 'regex101',
    name: 'Regex101',
    url: 'https://regex101.com',
    description: '调正则时很省心。',
    category: 'productivity',
    accent: '#8b5cf6',
  }),
]
