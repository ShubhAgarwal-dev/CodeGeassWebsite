import { PrismaClient } from '@prisma/client'
import React from 'react'

const prisma = new PrismaClient()

async function main() {
  const shubh = await prisma.members.upsert({
    where: { roll_number: 210020047 },
    update: {},
    create: {
      roll_number: 210020047,
      name: 'Shubh Agarwal',
    },
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
