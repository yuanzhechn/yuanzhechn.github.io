/// <reference types="vite/client" />

declare module 'virtual:blog-posts' {
  const posts: Array<{
    filepath: string
    metadataPath: string
    data: Record<string, unknown>
    content: string
  }>

  export default posts
}

declare module 'virtual:challenges' {
  const challenges: Array<{
    filepath: string
    metadataPath: string
    data: Record<string, unknown>
    content: string
  }>

  export default challenges
}
