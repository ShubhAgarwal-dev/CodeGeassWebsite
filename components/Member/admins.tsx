import { NextPage } from 'next'
import { admin_data } from './admins.types'
import styles from './admins.module.css'
import Image from 'next/image'

import gmail_img from '../../public/Team/Logo/gmail1.png'

interface Props {
  heading: string,
  team_details: admin_data
}

const Admins: NextPage<Props> = ({heading, team_details}) => {
  return (
    <div key={heading} className='styles.teamContainer'>
      <h2>{heading}</h2>
      <div className='teamCardWrapper'>
        {team_details.map((member) => (
            <div key={member.name} className={styles.teamCardContainer}>
              <div key={member.name} className={styles.teamCard}>
                <div>
                  <Image
                    src={member.img}
                    alt='image'
                    width={200}
                    height={200}
                    className={styles.memberImage}
                  />
                </div>
                <div className={styles.memberInfo}>
                  <h3>{member.name}</h3>
                  <div className={styles.memberLinks}>
                    <a
                      href={`mailto:${member.email}`}
                      className={
                        styles.linkImageWrapper + " " + styles.email
                      }
                    >
                      <Image
                        className={styles.linkImage}
                        src= {gmail_img.src}
                        width={20}
                        height={20}
                        alt="Team Member Logo"
                      />
                    </a>
                    {member.linkedIn && (
                      <a
                        className={
                          styles.linkImageWrapper + " " + styles.linkedin
                        }
                        href={member.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          className={styles.linkImage}
                          src="/Team/Logo/linkedin1.png"
                          width={20}
                          height={20}
                          alt="Link Image"
                        />
                      </a>
                    )}
                    {member.instagram && (
                      <a
                        className={
                          styles.linkImageWrapper + " " + styles.instagram
                        }
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          className={styles.linkImage}
                          src="/Team/Logo/instagram.png"
                          width={20}
                          height={20}
                          alt='insta images'
                        />
                      </a>
                    )}
                    </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Admins