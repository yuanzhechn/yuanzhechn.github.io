import { readonly, ref } from 'vue'
import { adminApi } from '@/api/modules/admin'

const authenticated = ref(false)
const checked = ref(false)
let pendingCheck: Promise<boolean> | undefined

async function checkSession(force = false) {
  if (checked.value && !force) return authenticated.value
  if (pendingCheck) return pendingCheck
  pendingCheck = adminApi
    .session()
    .then((session) => {
      authenticated.value = session.authenticated
      checked.value = true
      return authenticated.value
    })
    .catch(() => {
      authenticated.value = false
      checked.value = true
      return false
    })
    .finally(() => {
      pendingCheck = undefined
    })
  return pendingCheck
}

async function login(password: string) {
  authenticated.value = (await adminApi.login(password)).authenticated
  checked.value = true
}

async function logout() {
  await adminApi.logout()
  authenticated.value = false
  checked.value = true
}

export function useAdminSession() {
  return { authenticated: readonly(authenticated), checked: readonly(checked), checkSession, login, logout }
}
