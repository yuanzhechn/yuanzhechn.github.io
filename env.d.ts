/// <reference types="vite/client" />

declare module 'virtual:blog-posts' {
  const posts: Array<{
    filepath: string
    data: Record<string, unknown>
    content: string
  }>

  export default posts
}
