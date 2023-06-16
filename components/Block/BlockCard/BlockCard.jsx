import styles from "./BlockCard.module.css";
import Image from "next/image";

export default function BlockCard({ leftSideImage, data, number }) {
  return (
    <>
      <div className={styles.blockCardWrapper}>
        <div className={styles.blockCardMain}>
          <div
            className={`${styles.blockInfo} ${
              leftSideImage && styles.blockInfoLeft
            }`}
          >
            <div className={styles.blockNumber}>
              <h1>{number < 10 ? `0${number}` : number}</h1>
              <div className={styles.styleDiv}></div>
            </div>
            <div className={styles.blockName}>
              <h1>{data.heading}</h1>
              <br />
              <h3>{data.time}</h3>
            </div>
            <div className={styles.blockInfo}>{data.content}</div>
            <div className={styles.knowMore}>
              <a href={data.knowMoreLink} target="_blank">
                <div>Know More</div>
                <div className={styles.buttonImage}>
                  <Image
                    alt="button"
                    src="/Events/event-button.svg"
                    fill
                    priority
                  />
                </div>
              </a>
            </div>
          </div>
          <div
            className={`${styles.blockImageWrapper} ${
              leftSideImage && styles.blockImageWrapperLeft
            }`}
          >
            <div className={styles.blockImageCard}>
              <Image src={data.image} fill alt="user provided image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
