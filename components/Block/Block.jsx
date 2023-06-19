import styles from './Block.module.css'
import BlockCard from './BlockCard/BlockCard'

// interface datablock {
//   heading: string
//   content: string
//   knowMoreLink: string
//   image: string
// }

// interface blockdata {
//   [id: number] : datablock
// }

export default function Block({ title, blocksData }) {
  return (
    <>
      <div id='blocksId' className={styles.blocksWrapper}>
        {/* <div className={styles.blockSunWrapper} ref={SunRef}>
          <Image src="/blocks/blocks-sun-1.svg" fill priority alt='' />
        </div> */}
        <div className={`${styles.blocksMain} page-wrapper`}>
          <div className={styles.blocksHeading}>
            <div className={styles.text_block}>
              <h2>{title}</h2>
            </div>
          </div>
          <div className={styles.blocksCardWrapper}>
            {blocksData.map((data, index) => {
              return (
                <BlockCard
                  data={data}
                  key={index}
                  number={index + 1}
                  leftSideImage={index % 2 ? false : true}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
