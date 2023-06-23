import styles from './Hero.module.css'
import Image from 'next/image'

const HeroHead = ({}) => {
  return (
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
                <div className={styles.typing_demo}>
                  Put your thinking caps on, <br /> It's time to code!
                </div>
              </div>
            </div>
          </div>
          <div className={styles.heroArtWrapper}>
            <Image src='/Hero/hero-art.svg' fill priority alt='background' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroHead
