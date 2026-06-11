export type FavoriteCategory = 'development' | 'design' | 'productivity'

export interface FavoriteSite {
  id: string
  name: string
  url: string
  description: string
  category: FavoriteCategory
  accent: string
  domain: string
  iconUrl: string
}
