import { NextPage, GetStaticProps } from 'next'
import prisma from '@/prisma/client'
import InfoTable from '@/components/Table/InfoTable'

interface Props {
  table_heading: string
  headings: string[]
  row_data: string[][]
}

const CFL2: NextPage<Props> = ({ table_heading, headings, row_data }) => {
  return (
    <>
      <InfoTable
        table_heading={table_heading}
        headings={headings}
        row_data={row_data}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const cf_ppl = await prisma.codeforcesLeaderBoard.findMany({
    orderBy: {
      rating: 'desc',
    },
    select: {
      rollNumber: true,
      name: true,
      userHandle: true,
      rating: true,
      contests: true,
      last_contest_id: true,
    },
  })

  const headings: string[] = [
    'rollNumber',
    'fullName',
    'userHandle',
    'Rating',
    'Contests',
    'Last Contest',
  ]
  const arr: string[][] = []
  cf_ppl.forEach(element => {
    arr.push(Object.values(element).map(e => e.toString()))
  })

  return {
    props: {
      table_heading: 'Codeforces',
      headings: headings,
      row_data: arr,
    },
  }
}

export default CFL2
