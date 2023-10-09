'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './AppBar.module.css'
import { useSession, signOut } from 'next-auth/react'

export default function AppBarAdmin() {
  const { data: session } = useSession()
  const [active, setActive] = useState(false)
  const clickHandler = () => {
    setActive(prevActive => !prevActive)
  }

  const [visible, setVisible] = useState(true)
  const [previousScrollPosition, setPreviousScrollPosition] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      const visible = previousScrollPosition > currentScrollPos

      setPreviousScrollPosition(currentScrollPos)
      setVisible(visible)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [previousScrollPosition])

  return (
    <div id='homeId'>
      <nav
        className={styles.navBarWrapper}
        style={{ top: visible ? 0 : '-6rem' }}
      >
        <div className={styles.navBarMain}>
          <div className={styles.logoWrapper}>
            <Link href={`/admin`}>
              <Image
                src='/Logo4xWithoutFade.png'
                width={70}
                height={50}
                alt='Picture of the club'
                priority
              />
            </Link>
          </div>
          <div className={styles.optionsWrapper}>
            <div
              className={`${styles.optionsMenu} ${
                active && styles.activeSidebar
              } font-sans`}
            >
              <div className={styles.option}>
                <Link href='/admin/events' scroll={false}>
                  <div>Events</div>
                </Link>
              </div>
              <div className={styles.option}>
                <Link href='/admin/projects' scroll={false}>
                  <div>Projects</div>
                </Link>
              </div>
              <div className={styles.option}>
                <Link href='/admin/members' scroll={false}>
                  <div>Members</div>
                </Link>
              </div>

              {session && session.user && session.user.image ? (
                <div className={styles.option} onClick={() => signOut()}>
                  <img
                    src={session.user.image}
                    alt='User'
                    style={{
                      borderRadius: '50%',
                      width: '50px',
                      height: '50px',
                    }}
                  />
                </div>
              ) : (
                <></>
              )}
            </div>
            <div className={styles.hamBurgerWrapper}>
              <div
                className={`${styles.hamburger} ${
                  active ? styles.active : styles['not-active']
                }`}
                onClick={clickHandler}
              >
                <span className={styles.spans}></span>
                <span className={styles.spans}></span>
                <span className={styles.spans}></span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
