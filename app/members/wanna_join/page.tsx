import { NextPage } from 'next'
import styles from './page.module.css'
import CTA from '@/components/Members/CTA'

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <>
      <div className={styles.membersWrapper}>
        <CTA />
      </div>
    </>
  )
}

export default Page
