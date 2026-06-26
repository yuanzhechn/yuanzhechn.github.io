import 'dotenv/config'
import { resolve } from 'node:path'

function positiveInteger(value: string | undefined, fallback: number): number {
  const parsed = Number(value)
  return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback
}

export const config = {
  host: process.env.HOST?.trim() || '127.0.0.1',
  port: positiveInteger(process.env.PORT, 3000),
  frontendOrigins: (process.env.FRONTEND_ORIGIN?.trim() ||
    'http://127.0.0.1:5173,http://localhost:5173')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean),
  contentDir: resolve(process.cwd(), process.env.CONTENT_DIR?.trim() || 'content'),
  assetsDir: resolve(process.cwd(), process.env.ASSETS_DIR?.trim() || 'content-assets'),
  dataDir: resolve(process.cwd(), process.env.DATA_DIR?.trim() || 'data'),
  publicDir: resolve(process.cwd(), process.env.PUBLIC_DIR?.trim() || 'dist'),
  timeZone: process.env.TIME_ZONE?.trim() || 'Asia/Shanghai',
}
