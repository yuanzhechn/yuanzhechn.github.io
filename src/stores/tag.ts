import { defineStore } from 'pinia'
import { ref } from 'vue'
import { mockApi } from '@/api'
import type { Tag } from '@/types'

export const useTagStore = defineStore('tag', () => {
  const tags = ref<Tag[]>([])
  const loading = ref(false)

  async function fetchTags() {
    if (tags.value.length > 0) return
    loading.value = true
    try {
      tags.value = await mockApi.getTags()
    } finally {
      loading.value = false
    }
  }

  return { tags, loading, fetchTags }
})
