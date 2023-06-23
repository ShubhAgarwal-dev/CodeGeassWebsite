import { PrismaClient } from '@prisma/client'

// https://www.prisma.io/docs/guides/database/supabase

const prisma = new PrismaClient({ log: ['error', 'warn'] })

prisma.$use(async (params, next) => {
  const before = Date.now()
  const result = await next(params)
  const after = Date.now()
  console.log(`Query ${params.model}.${params.action} took ${after - before}ms`)
  return result
})

export default prisma
