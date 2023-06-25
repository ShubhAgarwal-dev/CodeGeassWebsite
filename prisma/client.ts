import { PrismaClient } from '@prisma/client'

// https://www.prisma.io/docs/guides/database/supabase

// const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

// export const prisma =
// globalForPrisma.prisma || new PrismaClient({ log: ['error', 'warn'] })

export const prisma = new PrismaClient({ log: ['error', 'warn'] })

prisma.$use(async (params, next) => {
  const before = Date.now()
  const result = await next(params)
  const after = Date.now()
  console.log(`Query ${params.model}.${params.action} took ${after - before}ms`)
  return result
})

// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
