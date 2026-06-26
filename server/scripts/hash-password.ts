import { createPasswordHash } from '../src/password.js'

const password = process.argv[2]
if (!password) {
  console.error('用法: npm run hash-password -- "你的密码"')
  process.exitCode = 1
} else {
  console.log(await createPasswordHash(password))
}
