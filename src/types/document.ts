export interface LearningDocument {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  tags: string[]
  createdAt: string
  updatedAt: string
  wordCount: number
  readingTime: number
  groupSlug: string
  groupTitle: string
  order: number
}

export type LearningDocumentListItem = Omit<LearningDocument, 'content'>

export interface DocumentGroup {
  slug: string
  title: string
  documents: LearningDocumentListItem[]
}
