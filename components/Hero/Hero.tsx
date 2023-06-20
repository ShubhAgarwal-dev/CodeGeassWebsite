import styles from './Hero.module.css'
import Image from 'next/image'

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function Hero() {
  return (
    <>
      <div className={`${styles.heroWrapper}`} id='hero'>
        <div className={`${styles.hero}`}>
          <div className={styles.heroContentWrapper}>
            <div className={styles.heroMain}>
              <h1>
                Coding Club,
                <br /> IIT Dharwad
              </h1>
              <div className={styles.heroQuoteWrapper}>
                <div className={styles.styleBar}></div>
                <div className={styles.Quote}>
                  Put your thinking caps on,
                  <br />
                  It's time to code!
                </div>
              </div>
            </div>
            <div className={styles.heroArtWrapper}>
              <Image src='/Hero/hero-art.svg' fill priority alt='background' />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.aboutWrapper}>
        <div className={`page-wrapper`}>
          <div className={styles.aboutMain}>
            <div className={styles.aboutStyleStar}>
              <Image
                src='/Hero/style-star.svg'
                fill
                priority
                alt='background'
              />
            </div>
            <div className={styles.aboutTitle}>
              <h1>Overview</h1>
            </div>
            <div className={styles.aboutContent}>
              The fourth edition of Summer of Innovation is a platform for
              honing one&rsquo;s technical skills and promoting tech culture in
              our institute. Lasting 3 months, the event comprises of problem
              statements from multiple domains and the participants are allowed
              to take part in any number of them. The event is a result of the
              contribution of about every technical organization involved with
              tech in our institute. This year, the event shall last from 27th
              of May and will span majorly the months of June and July, allowing
              the participants to learn the required technical skills from
              scratch and then implementing them in this period.
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
    </>
  )
}
