import { createHmac, randomBytes, timingSafeEqual } from 'node:crypto'
import type { FastifyReply, FastifyRequest } from 'fastify'
import { config } from './config.js'
import { verifyPasswordHash } from './password.js'
const cookieName = 'blog_admin_session'

function encode(value: string): string {
  return Buffer.from(value).toString('base64url')
}

function sign(value: string): string {
  return createHmac('sha256', config.sessionSecret).update(value).digest('base64url')
}

export async function verifyPassword(password: string): Promise<boolean> {
  if (config.adminPassword) return password === config.adminPassword
  return config.adminPasswordHash ? verifyPasswordHash(password, config.adminPasswordHash) : false
}

export function createSessionToken(): string {
  const payload = encode(
    JSON.stringify({
      role: 'admin',
      expiresAt: Date.now() + config.sessionTtlSeconds * 1000,
      nonce: randomBytes(12).toString('hex'),
    }),
  )

  return `${payload}.${sign(payload)}`
}

export function isValidSession(token: string | undefined): boolean {
  if (!token) return false
  const [payload, signature] = token.split('.')
  if (!payload || !signature) return false

  const expected = Buffer.from(sign(payload))
  const actual = Buffer.from(signature)
  if (actual.length !== expected.length || !timingSafeEqual(actual, expected)) return false

  try {
    const data = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8')) as {
      role?: string
      expiresAt?: number
    }
    return data.role === 'admin' && typeof data.expiresAt === 'number' && data.expiresAt > Date.now()
  } catch {
    return false
  }
}

export function setSessionCookie(reply: FastifyReply, token: string) {
  reply.setCookie(cookieName, token, {
    path: '/',
    httpOnly: true,
    sameSite: 'strict',
    secure: config.cookieSecure,
    maxAge: config.sessionTtlSeconds,
  })
}

export function clearSessionCookie(reply: FastifyReply) {
  reply.clearCookie(cookieName, { path: '/' })
}

export function hasAdminSession(request: FastifyRequest): boolean {
  return isValidSession(request.cookies[cookieName])
}

export async function requireAdmin(request: FastifyRequest, reply: FastifyReply) {
  if (hasAdminSession(request)) return
  return reply.code(401).send({ message: '请先登录管理员账号' })
}
