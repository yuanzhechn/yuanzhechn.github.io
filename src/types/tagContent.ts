import type { ChallengeListItem } from './challenge'
import type { LearningDocumentListItem } from './document'
import type { PostListItem } from './post'

export interface TagContentResult {
  tag: string
  posts: PostListItem[]
  documents: LearningDocumentListItem[]
  challenges: ChallengeListItem[]
}
