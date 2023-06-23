import prisma from '@/prisma/client'

// https://www.prisma.io/docs/concepts/components/prisma-client/pagination

interface Props {}

export default async function CFLeaderboard({}) {
  const cf_ppl = await prisma.codeforcesLeaderBoard.findMany({
    orderBy: {
      rating: 'desc',
    },
    select: {
      name: true,
      rollNumber: true,
      userHandle: true,
      contests: true,
      rating: true,
    },
  })

  console.log(cf_ppl)
  return <h1> Hii </h1>
}
