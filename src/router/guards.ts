import type { Router } from 'vue-router'
import { useAppStore } from '@/stores/app'

export function registerGuards(router: Router) {
  router.beforeEach((_to, _from) => {
    useAppStore().sidebarOpen = false
  })
}
