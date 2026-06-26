export type ContentCollection = 'posts' | 'challenges' | 'documents'
export type ChallengeDifficulty = 'easy' | 'medium' | 'hard'
export type ChallengeCadence = 'weekly' | 'biweekly' | 'monthly' | 'irregular'

export interface ContentMetadata {
  collection: ContentCollection
  title: string
  slug: string
  date?: string
  updated?: string
  publishAt?: string
  dueAt?: string
  category?: string
  groupSlug?: string
  groupTitle?: string
  order?: number
  tags: string[]
  excerpt?: string
  isTop?: boolean
  isPublished: boolean
  difficulty?: ChallengeDifficulty
  sequence?: number
  cadence?: ChallengeCadence
}

export interface ContentDocument {
  filepath: string
  data: ContentMetadata
  content: string
}

export type EditableContentInput = Omit<
  ContentMetadata,
  'date' | 'updated' | 'publishAt'
> & {
  content: string
}
