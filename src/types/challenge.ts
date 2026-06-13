export type ChallengeDifficulty = 'easy' | 'medium' | 'hard'
export type ChallengeCadence = 'weekly' | 'biweekly' | 'monthly' | 'irregular'

export interface Challenge {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  tags: string[]
  publishedAt: string
  dueAt: string
  difficulty: ChallengeDifficulty
  sequence: number
  cadence: ChallengeCadence
  readingTime: number
  isPublished: boolean
  groupSlug: string
  groupTitle: string
}

export interface ChallengeListItem {
  id: string
  slug: string
  title: string
  excerpt: string
  tags: string[]
  publishedAt: string
  dueAt: string
  difficulty: ChallengeDifficulty
  sequence: number
  cadence: ChallengeCadence
  readingTime: number
  groupSlug: string
  groupTitle: string
}

export interface ChallengeGroup {
  slug: string
  title: string
  challenges: ChallengeListItem[]
}
