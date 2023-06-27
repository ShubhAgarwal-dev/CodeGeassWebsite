import Link from 'next/link'
import styles from './404.module.css'

const custom404 = ({}) => {
  return (
    <>
      <div className={styles.bodyWrapper}>
        <span className={styles.neg}>ERROR 404</span>
        <p className={styles.pWrapper}>
          The page is missing or never was written. You can wait and
          <br />
          see if it becomes available again, or you can restart your computer.
        </p>
        <p className={styles.pWrapper}>
          * Send us an e-mail to notify this and try it later.
          <br />
          * Press CTRL+ALT+DEL to restart your computer. You will
          <br />
          &nbsp; lose unsaved information in any programs that are running.
        </p>
        Press any link to continue
        <div className={styles.menu}>
          <Link className={styles.LinkWrapper} href='/'>
            Home
          </Link>{' '}
          |{' '}
          <Link className={styles.LinkWrapper} href='/leaderboard'>
            Leaderboard
          </Link>{' '}
          |{' '}
          <Link className={styles.LinkWrapper} href='/members'>
            Members
          </Link>
        </div>
      </div>
    </>
  )
}

export default custom404
