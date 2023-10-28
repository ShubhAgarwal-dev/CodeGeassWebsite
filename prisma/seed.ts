import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const shubh = await prisma.members.upsert({
    where: { roll_number: '210020047' },
    update: {},
    create: {
      roll_number: '210020047',
      name: 'Shubh Agarwal',
      wing: 'FOSS',
      leetcode: {
        create: {
          handle: 'shubhagarwal539',
          solved: 83,
          rank: 754120,
        },
      },
      foss: {
        create: {
          github_uname: 'ShubhAgarwal-dev',
        },
      },
    },
  })

  const saksham = await prisma.members.upsert({
    where: { roll_number: '210010046' },
    update: {},
    create: {
      name: 'Saksham Chhimwal',
      roll_number: '210010046',
      wing: 'FOSS',
      codeforces: {
        create: {
          handle: 'saksham',
          rating: 969,
          num_participants: 10,
        },
      },
    },
  })

  const ayush = await prisma.members.upsert({
    where: { roll_number: '210020048' },
    update: {},
    create: {
      name: 'Ayush Singhi',
      roll_number: '210020048',
      wing: 'GAME_DEV',
      game_dev: {
        create: {
          role: 'ASSET_DES',
        },
      },
    },
  })

  console.log(shubh, saksham, ayush)
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
