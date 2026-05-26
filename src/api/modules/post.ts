import { getPostList, getPostBySlug, getCategories, getTags, getArchives } from '@/content'

function delay<T>(data: T, ms = 150): Promise<T> {
  return new Promise(resolve => setTimeout(() => resolve(data), ms))
}

export const mockApi = {
  async getPostList(params: Parameters<typeof getPostList>[0]) {
    return delay(getPostList(params))
  },
  async getPostBySlug(slug: string) {
    return delay(getPostBySlug(slug))
  },
  async getCategories() {
    return delay(getCategories())
  },
  async getTags() {
    return delay(getTags())
  },
  async getArchives() {
    return delay(getArchives())
  },
}
