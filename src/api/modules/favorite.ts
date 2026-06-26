import { apiRequest } from '@/api/client'
import type { FavoriteSite } from '@/types'

export interface FavoriteSiteInput {
  id: string
  name: string
  url: string
  description: string
  groupPath: string[]
  accent: string
  iconUrl?: string
}

function enrich(site: FavoriteSiteInput): FavoriteSite {
  const domain = new URL(site.url).hostname.replace(/^www\./, '')
  return {
    ...site,
    domain,
    iconUrl: site.iconUrl || `https://www.google.com/s2/favicons?domain=${domain}&sz=128`,
  }
}

export const favoriteApi = {
  async list() {
    return (await apiRequest<FavoriteSiteInput[]>('/api/favorites')).map(enrich)
  },
}
