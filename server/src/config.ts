import 'dotenv/config'
import { resolve } from 'node:path'

function required(name: string): string {
  const value = process.env[name]?.trim()
  if (!value) throw new Error(`缺少环境变量 ${name}`)
  return value
}

function positiveInteger(value: string | undefined, fallback: number): number {
  const parsed = Number(value)
  return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback
}

function optional(name: string): string | undefined {
  const value = process.env[name]?.trim()
  return value || undefined
}

const adminPassword = optional('ADMIN_PASSWORD')
const adminPasswordHash = optional('ADMIN_PASSWORD_HASH')
if (!adminPassword && !adminPasswordHash) {
  throw new Error('ADMIN_PASSWORD or ADMIN_PASSWORD_HASH is required')
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
  adminPassword,
  adminPasswordHash,
  sessionSecret: required('SESSION_SECRET'),
  sessionTtlSeconds: positiveInteger(process.env.SESSION_TTL_SECONDS, 8 * 60 * 60),
  cookieSecure: process.env.COOKIE_SECURE === 'true',
  timeZone: process.env.TIME_ZONE?.trim() || 'Asia/Shanghai',
}
