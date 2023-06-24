import styles from './page.module.css'
import prisma from '@/prisma/client'
import InfoTable from '@/components/Table/InfoTable'
import { reg_inputs } from '../../types/Registration/RegBlock.types'

interface Props {}

const fetchCodeforcesUsers = async () => {
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

  const arr: string[][] = []
  cf_ppl.forEach(element => {
    arr.push(Object.values(element).map(e => e.toString()))
  })

  return arr
}

const fetchLeetcodeUsers = async () => {
  const lt_ppl = await prisma.leetCodeLeaderBoard.findMany({
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

  const arr: string[][] = []
  lt_ppl.forEach(element => {
    arr.push(Object.values(element).map(e => e.toString()))
  })

  return arr
}

const Page = async ({}) => {
  const headings_cf: string[] = [
    'rollNumber',
    'fullName',
    'userHandle',
    'Rating',
    'Contests',
    'Last Contest',
  ]

  const row_data_cf = await fetchCodeforcesUsers()

  const headings_lt: string[] = [
    'rollNumber',
    'fullName',
    'userHandle',
    'Ranking',
    'Stars',
  ]

  const row_data_lt = await fetchLeetcodeUsers()

  return (
    <>
      <div className={styles.LeaderboardWrapper}>
        <InfoTable
          table_heading='Codeforces'
          headings={headings_cf}
          row_data={row_data_cf}
        />
        <InfoTable
          table_heading='LeetCode'
          headings={headings_lt}
          row_data={row_data_lt}
        />
      </div>
    </>
  )
}

export default Page
