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
  pageBackground: string
  pageSurface: string
  pageText: string
  pageMuted: string
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
    pageBackground: '#ecfbf8',
    pageSurface: '#f8fffd',
    pageText: '#203538',
    pageMuted: '#5d7477',
    css: themeSources.mint,
  },
  {
    id: 'sky',
    name: '晴空',
    description: '明亮蓝色',
    mode: 'light',
    colors: ['#3b82f6', '#7dd3fc', '#eff8ff'],
    pageBackground: '#edf7ff',
    pageSurface: '#f8fcff',
    pageText: '#20364d',
    pageMuted: '#60768c',
    css: themeSources.sky,
  },
  {
    id: 'sakura',
    name: '樱花',
    description: '柔和粉色',
    mode: 'light',
    colors: ['#ec7fa9', '#f9b4cb', '#fff2f7'],
    pageBackground: '#fff1f6',
    pageSurface: '#fff9fb',
    pageText: '#4a2936',
    pageMuted: '#80616d',
    css: themeSources.sakura,
  },
  {
    id: 'caramel',
    name: '焦糖',
    description: '温暖琥珀',
    mode: 'light',
    colors: ['#c77d30', '#efb366', '#fff7e8'],
    pageBackground: '#fff5e4',
    pageSurface: '#fffaf2',
    pageText: '#463524',
    pageMuted: '#806b55',
    css: themeSources.caramel,
  },
  {
    id: 'cherry',
    name: '樱桃',
    description: '清醒红调',
    mode: 'light',
    colors: ['#d94c64', '#f28a9c', '#fff1f3'],
    pageBackground: '#fff0f2',
    pageSurface: '#fff8f9',
    pageText: '#492a30',
    pageMuted: '#806067',
    css: themeSources.cherry,
  },
  {
    id: 'forest',
    name: '森林',
    description: '自然深绿',
    mode: 'light',
    colors: ['#3f7d58', '#79b791', '#eff8f1'],
    pageBackground: '#edf7ef',
    pageSurface: '#f8fcf9',
    pageText: '#26392c',
    pageMuted: '#627568',
    css: themeSources.forest,
  },
  {
    id: 'mauve',
    name: '木槿',
    description: '克制紫灰',
    mode: 'light',
    colors: ['#8b6f9e', '#baa2c8', '#f8f2fb'],
    pageBackground: '#f7f0fa',
    pageSurface: '#fcf9fd',
    pageText: '#3d3144',
    pageMuted: '#74667b',
    css: themeSources.mauve,
  },
  {
    id: 'prussian',
    name: '普鲁士蓝',
    description: '沉静蓝灰',
    mode: 'light',
    colors: ['#315a7d', '#72a0c1', '#eff6fb'],
    pageBackground: '#edf5fa',
    pageSurface: '#f8fbfd',
    pageText: '#263947',
    pageMuted: '#627582',
    css: themeSources.prussian,
  },
  {
    id: 'abyss',
    name: '深渊',
    description: '冷静暗蓝',
    mode: 'dark',
    colors: ['#38bdf8', '#1e3a5f', '#08111f'],
    pageBackground: '#0f111a',
    pageSurface: '#171a26',
    pageText: '#d6deeb',
    pageMuted: '#7e8c9f',
    css: themeSources.abyss,
  },
  {
    id: 'radiation',
    name: '辐光',
    description: '高能荧光',
    mode: 'dark',
    colors: ['#c7f464', '#5c7c24', '#11180b'],
    pageBackground: '#1b1d1b',
    pageSurface: '#242824',
    pageText: '#e6e6e6',
    pageMuted: '#99a699',
    css: themeSources.radiation,
  },
  {
    id: 'vampire',
    name: '夜宴',
    description: '暗红黑色',
    mode: 'dark',
    colors: ['#ef6f83', '#7f1d32', '#16090d'],
    pageBackground: '#282a36',
    pageSurface: '#303241',
    pageText: '#f8f8f2',
    pageMuted: '#b8b8b2',
    css: themeSources.vampire,
  },
]

const compatibilityCss = `
:host {
  display: block;
  color-scheme: light dark;
  font-family: Optima, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;
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
  border-radius: 0;
  background: transparent;
}

#write::before {
  display: none;
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
  width: 100%;
  margin: 1.25rem 0;
  padding: 0;
  overflow: hidden;
  border-radius: 8px;
}

#write .code-block > .md-fencescode {
  display: block;
  width: 100%;
  margin: 0;
  padding: 1rem 1.2rem 1.15rem;
  overflow-x: auto;
  border-radius: 0 0 8px 8px;
  font-family: CascadiaCode, "Cascadia Code", "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 0.9em;
  line-height: 1.7;
  tab-size: 2;
  white-space: pre;
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
  background: ${theme.pageBackground};
}

#write {
  color: var(--text-color, #e5e7eb);
  background-color: transparent;
}

#write p,
#write li,
#write td,
#write figcaption {
  color: var(--text-color, #e5e7eb);
}

#write .code-block {
  border: 1px solid color-mix(in srgb, var(--primary-color, #8b9cff) 28%, transparent);
  background-color: var(--code-block-bg, #202330);
}

#write .code-block > .md-fencescode {
  color: var(--text-color, #e5e7eb);
  background-color: var(--code-block-bg, #202330);
}
`
      : `
:host {
  color-scheme: light;
  background: ${theme.pageBackground};
}

#write {
  color: ${theme.pageText};
  background-color: transparent;
}

#write .code-block {
  border: 1px solid color-mix(in srgb, var(--element-color) 18%, #d7dce1);
  background-color: #f8f8f8;
}

#write .code-block > .md-fencescode {
  color: #344054;
  background-color: color-mix(in srgb, var(--element-color) 5%, #fbfcfd);
}
`
  const css = `${prepareCss(baseCss)}\n${prepareCss(theme.css)}\n${compatibilityCss}\n${canvasCss}`
  compiledThemeCss.set(id, css)
  return css
}
