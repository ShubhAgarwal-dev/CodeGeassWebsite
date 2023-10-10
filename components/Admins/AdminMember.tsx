import styles from './member.module.css'
import Admins from './Admins'

import sec_data from './data/seceretary'
import club_admis from './data/admins_data'

import tmpbg from '@/public/Member/bgimg.png'
import tmpbg2 from '@/public/Events/micro_carbon.png'

export default function AdminMembers() {
  return (
    <>
      <div
        className={styles.memberbody}
        style={{
          backgroundImage: `url(${tmpbg2.src})`,
        }}
      >
        <Admins heading='Secretary' team_details={sec_data} />
        <Admins heading='Club Admins' team_details={club_admis} />
      </div>
    </>
  )
}
