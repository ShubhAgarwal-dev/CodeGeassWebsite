import Block from '@/components/Block/Block'
import data from './data'

import styles from './page.module.css'

export const metadata = {
  title: 'Projects for Coding Club',
  description: 'Coded by Shubh Agarwal (https://github.com/ShubhAgarwal-dev)',
}

export default function Project() {
  return (
    <>
      <div className={styles.projectWrapper}>
        <Block title='Projects' blocksData={data} />
      </div>
    </>
  )
}
