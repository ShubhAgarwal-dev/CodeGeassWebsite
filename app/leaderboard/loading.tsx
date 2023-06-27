import Loading from '@/components/Loading/Loading'
import styles from './page.module.css'

const loading = ({}) => {
  return (
    <div className={styles.loadingWrapper}>
      <Loading />
    </div>
  )
}

export default loading
