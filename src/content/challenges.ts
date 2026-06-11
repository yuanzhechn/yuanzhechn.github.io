import markdownFiles from 'virtual:challenges'
import type { Challenge, ChallengeCadence, ChallengeDifficulty, ChallengeListItem } from '@/types'
import { slugifyHeading } from '@/utils/markdown'

interface ChallengeFrontmatter {
  title?: unknown
  slug?: unknown
  date?: unknown
  publishAt?: unknown
  dueAt?: unknown
  difficulty?: unknown
  sequence?: unknown
  cadence?: unknown
  tags?: unknown
  excerpt?: unknown
  author?: unknown
}

interface MarkdownFile {
  filepath: string
  data: ChallengeFrontmatter
  content: string
}

function normalizeText(value: unknown, fallback = ''): string {
  return typeof value === 'string' && value.trim() ? value.trim() : fallback
}

function normalizeDate(value: unknown, fallback = '1970-01-01'): string {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10)
  }
  if (typeof value === 'string' && value.trim()) {
    const parsed = new Date(value)
    if (!Number.isNaN(parsed.getTime())) return parsed.toISOString().slice(0, 10)
  }
  return fallback
}

function normalizeTags(value: unknown): string[] {
  if (Array.isArray(value)) return value.map((tag) => String(tag).trim()).filter(Boolean)
  if (typeof value === 'string') {
    return value
      .split(',')
      .map((tag) => tag.trim())
      .filter(Boolean)
  }
  return []
}

function normalizeDifficulty(value: unknown): ChallengeDifficulty {
  return value === 'medium' || value === 'hard' ? value : 'easy'
}

function normalizeCadence(value: unknown): ChallengeCadence {
  return value === 'biweekly' || value === 'monthly' || value === 'irregular' ? value : 'weekly'
}

function normalizeSequence(value: unknown): number {
  const parsed = Number(value)
  return Number.isInteger(parsed) && parsed > 0 ? parsed : 1
}

function computeReadingTime(content: string): number {
  const chineseCharacters = content.match(/[\u4e00-\u9fff]/g)?.length ?? 0
  const latinWords = content.match(/[a-zA-Z]+/g)?.length ?? 0
  return Math.max(1, Math.ceil((chineseCharacters + latinWords) / 300))
}

function createExcerpt(content: string, fallback: string): string {
  const plain = content
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[*_>#~-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

  return plain ? plain.slice(0, 140) : fallback
}

const challenges: Challenge[] = (markdownFiles as MarkdownFile[])
  .map((file) => {
    const data = file.data
    const content = file.content.trim()
    const fallbackSlug = file.filepath.split('/').at(-1)?.replace(/\.md$/i, '') ?? 'challenge'
    const slug = normalizeText(data.slug, slugifyHeading(fallbackSlug))
    const title = normalizeText(data.title, slug)
    const publishedAt = normalizeDate(data.publishAt ?? data.date)

    return {
      id: slug,
      slug,
      title,
      excerpt: normalizeText(data.excerpt, createExcerpt(content, title)),
      content,
      tags: normalizeTags(data.tags),
      author: normalizeText(data.author, '博主'),
      publishedAt,
      dueAt: normalizeDate(data.dueAt, publishedAt),
      difficulty: normalizeDifficulty(data.difficulty),
      sequence: normalizeSequence(data.sequence),
      cadence: normalizeCadence(data.cadence),
      readingTime: computeReadingTime(content),
      isPublished: true,
    }
  })
  .sort((a, b) => b.sequence - a.sequence)

function toListItem(challenge: Challenge): ChallengeListItem {
  const { content: _content, author: _author, isPublished: _isPublished, ...item } = challenge
  return item
}

export function getChallengeList(): ChallengeListItem[] {
  return challenges.map(toListItem)
}

export function getChallengeBySlug(slug: string): Challenge | null {
  return challenges.find((challenge) => challenge.slug === slug) ?? null
}

export function getLatestChallenge(): ChallengeListItem | null {
  const latest = challenges[0]
  return latest ? toListItem(latest) : null
}
