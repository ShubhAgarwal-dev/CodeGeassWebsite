import styles from './member.module.css';
import bg from '../../public/Members/bgimg.png';
import { url } from 'inspector';

export default function Member() {
  return (
    <>
      <div
        className={styles.memberbody}
        style={{
          backgroundImage: `url(${bg.src})`,
        }}
      >
        <h1>Why is this not fucking working</h1>
      </div>
    </>
  );
}
