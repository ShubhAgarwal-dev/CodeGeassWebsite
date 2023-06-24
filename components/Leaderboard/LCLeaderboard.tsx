import prisma from '@/prisma/client'
import InfoTable from '@/components/Table/InfoTable'

// https://www.prisma.io/docs/concepts/components/prisma-client/pagination

interface Props {}

export default async function CFLeaderboard({}) {
  const cf_ppl = await prisma.leetCodeLeaderBoard.findMany({
    orderBy: {
      ranking: 'desc',
    },
    select: {
      rollNumber: true,
      name: true,
      userHandle: true,
      ranking: true,
      stars: true,
    },
  })

  const headings: string[] = [
    'rollNumber',
    'fullName',
    'userHandle',
    'Ranking',
    'Stars',
  ]
  const arr: string[][] = []
  cf_ppl.forEach(element => {
    arr.push(Object.values(element).map(e => e.toString()))
  })

  return (
    <>
      <InfoTable table_heading='LeetCode' headings={headings} row_data={arr} />
    </>
  )
}
