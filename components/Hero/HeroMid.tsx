import styles from './Hero.module.css'
import Image from 'next/image'

interface Props {}

const HeroMid = ({}) => {
  return (
    <div className={styles.aboutWrapper}>
      <div className={`page-wrapper`}>
        <div className={styles.aboutMain}>
          <div className={styles.aboutStyleStar}>
            <Image src='/Hero/style-star.svg' fill priority alt='background' />
          </div>
          <div className={styles.aboutTitle}>
            <h1>Overview</h1>
          </div>
          <div className={styles.aboutContent}>
            The fourth edition of Summer of Innovation is a platform for honing
            one&rsquo;s technical skills and promoting tech culture in our
            institute. Lasting 3 months, the event comprises of problem
            statements from multiple domains and the participants are allowed to
            take part in any number of them. The event is a result of the
            contribution of about every technical organization involved with
            tech in our institute. This year, the event shall last from 27th of
            May and will span majorly the months of June and July, allowing the
            participants to learn the required technical skills from scratch and
            then implementing them in this period.
          </div>
        </div>
      </div>
      <div className={styles.aboutBgWrapper}>
        <Image
          src='Hero/hero-bg-2.svg'
          fill
          style={{ objectFit: 'cover' }}
          alt='background'
          priority
        />
      </div>
    </div>
  )
}

export default HeroMid
