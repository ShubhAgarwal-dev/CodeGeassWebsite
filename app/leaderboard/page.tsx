import CFLeaderboard from '@/components/Leaderboard/CFLeaderboard'
import InfoTable from '@/components/Leaderboard/Table/InfoTable'
import { NextPage } from 'next'
import styles from './page.module.css'

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <>
      {/* <CFLeaderboard /> */}
      <div className={styles.LeaderboardWrapper}>
        <InfoTable />
      </div>
    </>
  )
}

export default Page
