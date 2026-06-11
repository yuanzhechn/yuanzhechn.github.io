import phycatLightCss from '@/assets/markdown-themes/phycat/phycat.light.css?raw'
import phycatDarkCss from '@/assets/markdown-themes/phycat/phycat.dark.css?raw'
import abyssCss from '@/assets/markdown-themes/phycat-abyss.css?raw'
import caramelCss from '@/assets/markdown-themes/phycat-caramel.css?raw'
import cherryCss from '@/assets/markdown-themes/phycat-cherry.css?raw'
import forestCss from '@/assets/markdown-themes/phycat-forest.css?raw'
import mauveCss from '@/assets/markdown-themes/phycat-mauve.css?raw'
import mintCss from '@/assets/markdown-themes/phycat-mint.css?raw'
import prussianCss from '@/assets/markdown-themes/phycat-prussian.css?raw'
import radiationCss from '@/assets/markdown-themes/phycat-radiation.css?raw'
import sakuraCss from '@/assets/markdown-themes/phycat-sakura.css?raw'
import skyCss from '@/assets/markdown-themes/phycat-sky.css?raw'
import vampireCss from '@/assets/markdown-themes/phycat-vampire.css?raw'

export type MarkdownThemeId =
  | 'mint'
  | 'prussian'
  | 'radiation'
  | 'sakura'
  | 'sky'
  | 'vampire'
  | 'abyss'
  | 'caramel'
  | 'cherry'
  | 'forest'
  | 'mauve'

export interface MarkdownTheme {
  id: MarkdownThemeId
  name: string
  description: string
  mode: 'light' | 'dark'
  colors: [string, string, string]
  css: string
}

const themeSources: Record<MarkdownThemeId, string> = {
  abyss: abyssCss,
  caramel: caramelCss,
  cherry: cherryCss,
  forest: forestCss,
  mauve: mauveCss,
  mint: mintCss,
  prussian: prussianCss,
  radiation: radiationCss,
  sakura: sakuraCss,
  sky: skyCss,
  vampire: vampireCss,
}

export const markdownThemes: MarkdownTheme[] = [
  {
    id: 'mint',
    name: '薄荷',
    description: '清透青绿',
    mode: 'light',
    colors: ['#3db8bf', '#80f7c4', '#e8fffb'],
    css: themeSources.mint,
  },
  {
    id: 'sky',
    name: '晴空',
    description: '明亮蓝色',
    mode: 'light',
    colors: ['#3b82f6', '#7dd3fc', '#eff8ff'],
    css: themeSources.sky,
  },
  {
    id: 'sakura',
    name: '樱花',
    description: '柔和粉色',
    mode: 'light',
    colors: ['#ec7fa9', '#f9b4cb', '#fff2f7'],
    css: themeSources.sakura,
  },
  {
    id: 'caramel',
    name: '焦糖',
    description: '温暖琥珀',
    mode: 'light',
    colors: ['#c77d30', '#efb366', '#fff7e8'],
    css: themeSources.caramel,
  },
  {
    id: 'cherry',
    name: '樱桃',
    description: '清醒红调',
    mode: 'light',
    colors: ['#d94c64', '#f28a9c', '#fff1f3'],
    css: themeSources.cherry,
  },
  {
    id: 'forest',
    name: '森林',
    description: '自然深绿',
    mode: 'light',
    colors: ['#3f7d58', '#79b791', '#eff8f1'],
    css: themeSources.forest,
  },
  {
    id: 'mauve',
    name: '木槿',
    description: '克制紫灰',
    mode: 'light',
    colors: ['#8b6f9e', '#baa2c8', '#f8f2fb'],
    css: themeSources.mauve,
  },
  {
    id: 'prussian',
    name: '普鲁士蓝',
    description: '沉静蓝灰',
    mode: 'light',
    colors: ['#315a7d', '#72a0c1', '#eff6fb'],
    css: themeSources.prussian,
  },
  {
    id: 'abyss',
    name: '深渊',
    description: '冷静暗蓝',
    mode: 'dark',
    colors: ['#38bdf8', '#1e3a5f', '#08111f'],
    css: themeSources.abyss,
  },
  {
    id: 'radiation',
    name: '辐光',
    description: '高能荧光',
    mode: 'dark',
    colors: ['#c7f464', '#5c7c24', '#11180b'],
    css: themeSources.radiation,
  },
  {
    id: 'vampire',
    name: '夜宴',
    description: '暗红黑色',
    mode: 'dark',
    colors: ['#ef6f83', '#7f1d32', '#16090d'],
    css: themeSources.vampire,
  },
]

const compatibilityCss = `
:host {
  display: block;
  color-scheme: light dark;
  font-family: Optima, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;
  --element-color: #3db8bf;
  --element-color-deep: #257f91;
  --element-color-shallow: #75cddd;
  --element-color-so-shallow: rgba(61, 184, 191, 0.42);
  --element-color-soo-shallow: rgba(61, 184, 191, 0.12);
  --head-title-color: var(--element-color);
  --head-title-h2-color: #fff;
  --head-title-h2-background: linear-gradient(90deg, var(--element-color-shallow), var(--element-color));
  --element-color-linecode: var(--element-color-deep);
  --element-color-linecode-background: var(--element-color-soo-shallow);
  --glass-bg-color: var(--element-color-soo-shallow);
  --bg-style: none;
}

*, *::before, *::after {
  box-sizing: border-box;
}

#write {
  width: 100%;
  max-width: none;
  min-height: 240px;
  margin: 0;
  padding: 1.4rem 1.5rem 1.8rem;
  border-radius: 8px;
}

#write > *:first-child {
  margin-top: 0;
}

#write > *:last-child {
  margin-bottom: 0;
}

#write .md-heading-anchor {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  opacity: 0;
}

#write .table-wrapper {
  width: 100%;
  overflow-x: auto;
}

#write .code-block {
  overflow-x: auto;
}

#write .escaped-html {
  white-space: pre-wrap;
}

#write img {
  max-width: 100%;
  height: auto;
}

@media (max-width: 640px) {
  #write {
    padding: 1rem 0.9rem 1.35rem;
    line-height: 1.9;
  }
}
`

function prepareCss(source: string): string {
  return source
    .replace(/@import\s+url\([^;]+;/gi, '')
    .replace(/@font-face\s*\{[\s\S]*?\}/gi, '')
    .replace(/@page\s*\{[\s\S]*?\}/gi, '')
    .replace(/:root/g, ':host')
}

const compiledThemeCss = new Map<MarkdownThemeId, string>()

export function getMarkdownTheme(id: MarkdownThemeId): MarkdownTheme {
  return markdownThemes.find((theme) => theme.id === id) ?? markdownThemes[0]!
}

export function getMarkdownThemeCss(id: MarkdownThemeId): string {
  const cached = compiledThemeCss.get(id)
  if (cached) return cached

  const theme = getMarkdownTheme(id)
  const baseCss = theme.mode === 'dark' ? phycatDarkCss : phycatLightCss
  const canvasCss =
    theme.mode === 'dark'
      ? `
:host {
  color-scheme: dark;
  background: var(--bg-color, #111827);
}

#write {
  color: var(--text-color, #e5e7eb);
  background-color: var(--bg-color, #111827);
}

#write p,
#write li,
#write td,
#write figcaption {
  color: var(--text-color, #e5e7eb);
}
`
      : `
:host {
  color-scheme: light;
  background: #fff;
}

#write {
  background-color: #fff;
}
`
  const css = `${prepareCss(baseCss)}\n${prepareCss(theme.css)}\n${compatibilityCss}\n${canvasCss}`
  compiledThemeCss.set(id, css)
  return css
}
