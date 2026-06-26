import { mkdir, readFile, rename, rm, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { config } from './config.js'

export interface FavoriteSiteInput {
  id: string
  name: string
  url: string
  description: string
  groupPath: string[]
  accent: string
  iconUrl?: string
}

const filepath = resolve(config.dataDir, 'favorites.json')
function validateSites(input: unknown): FavoriteSiteInput[] {
  if (!Array.isArray(input)) throw new Error('收藏网站必须是数组')
  const ids = new Set<string>()
  return input.map((value, index) => {
    if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error(`第 ${index + 1} 项格式错误`)
    const site = value as Partial<FavoriteSiteInput>
    const id = String(site.id || '').trim()
    const name = String(site.name || '').trim()
    const description = String(site.description || '').trim()
    const accent = String(site.accent || '').trim()
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)) throw new Error(`第 ${index + 1} 项 id 格式错误`)
    if (ids.has(id)) throw new Error(`存在重复 id: ${id}`)
    ids.add(id)
    if (!name) throw new Error(`第 ${index + 1} 项缺少名称`)
    let url: URL
    try { url = new URL(String(site.url || '')) } catch { throw new Error(`第 ${index + 1} 项网址无效`) }
    if (!['http:', 'https:'].includes(url.protocol)) throw new Error(`第 ${index + 1} 项网址协议无效`)
    if (!Array.isArray(site.groupPath)) throw new Error(`第 ${index + 1} 项缺少分组路径`)
    const groupPath = site.groupPath.map(String).map((part) => part.trim()).filter(Boolean)
    if (groupPath.length === 0) throw new Error(`第 ${index + 1} 项至少需要一个分组`)
    if (groupPath.some((part) => part.includes('/'))) throw new Error(`第 ${index + 1} 项分组名称不能包含 /`)
    if (!/^#[0-9a-fA-F]{6}$/.test(accent)) throw new Error(`第 ${index + 1} 项颜色格式错误`)
    return {
      id, name, url: url.toString(), description,
      groupPath,
      accent,
      iconUrl: String(site.iconUrl || '').trim() || undefined,
    }
  })
}

export async function listFavoriteSites() {
  const text = await readFile(filepath, 'utf8').catch(() => '[]')
  return validateSites(JSON.parse(text) as unknown)
}

export async function saveFavoriteSites(input: unknown) {
  const sites = validateSites(input)
  await mkdir(dirname(filepath), { recursive: true })
  const temporary = `${filepath}.${Date.now()}-${process.pid}.tmp`
  await writeFile(temporary, `${JSON.stringify(sites, null, 2)}\n`, { flag: 'wx' })
  try {
    await rename(temporary, filepath)
  } catch (error) {
    await rm(temporary, { force: true })
    throw error
  }
  return sites
}
