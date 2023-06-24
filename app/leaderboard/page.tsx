import CFLeaderboard from '@/components/Leaderboard/CFLeaderboard'
import { NextPage } from 'next'
import styles from './page.module.css'
import LCLeaderboard from '@/components/Leaderboard/LCLeaderboard'

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <>
      <div className={styles.LeaderboardWrapper}>
        <CFLeaderboard />
        <LCLeaderboard />
      </div>
    </>
  )
}

export default Page
