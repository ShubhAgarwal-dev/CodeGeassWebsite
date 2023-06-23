import data from './data'
import Block from '@/components/Block/Block'

import styles from './page.module.css'

export default function Events() {
  return (
    <>
      <div className={styles.eventsWrapper}>
        <Block title='Events' blocksData={data} />
      </div>
    </>
  )
}
