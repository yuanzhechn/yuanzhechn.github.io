import { defineStore } from 'pinia'
import { ref } from 'vue'
import { blogApi } from '@/api'
import type { Category } from '@/types'

export const useCategoryStore = defineStore('category', () => {
  const categories = ref<Category[]>([])
  const loading = ref(false)

  async function fetchCategories() {
    if (categories.value.length > 0) return
    loading.value = true
    try {
      categories.value = await blogApi.getCategories()
    } finally {
      loading.value = false
    }
  }

  return { categories, loading, fetchCategories }
})
