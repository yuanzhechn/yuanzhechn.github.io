const defaultApiBaseUrl =
  typeof window === 'undefined' ? 'http://127.0.0.1:3000' : window.location.origin
export const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || defaultApiBaseUrl).replace(/\/$/, '')

export class ApiError extends Error {
  constructor(
    message: string,
    public readonly status: number,
  ) {
    super(message)
  }
}

export async function apiRequest<T>(path: string, options: RequestInit = {}): Promise<T> {
  const headers = new Headers(options.headers)
  if (options.body && !(options.body instanceof FormData) && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json')
  }

  let response: Response
  try {
    response = await fetch(`${apiBaseUrl}${path}`, {
      ...options,
      headers,
      credentials: 'include',
    })
  } catch {
    throw new ApiError('无法连接后端服务，请确认 blog-server 已启动', 0)
  }
  const data = (await response.json().catch(() => ({}))) as T & { message?: string }

  if (!response.ok) {
    throw new ApiError(data.message || `请求失败 (${response.status})`, response.status)
  }
  return data
}
