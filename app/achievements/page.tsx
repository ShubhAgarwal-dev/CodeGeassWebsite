import data from './data'
import Block from '@/components/Block/Block'

import styles from './page.module.css'

const page = () => {
  return (
    <>
      <div className={styles.achieveWrapper}>
        <Block title='Achievements' blocksData={data} />
      </div>
    </>
  )
}

export default page
