'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './AppBar.module.css'
import { useSession, signOut } from 'next-auth/react'
import './Logout.css'

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
                  {/* <img
                    src={session.user.image}
                    alt='User'
                    style={{
                      borderRadius: '50%',
                      width: '50px',
                      height: '50px',
                    }}
                  /> */}
                  <button
                    style={{
                      content: "''",
                      backgroundImage: `linear-gradient(
                          45deg,
                          #ff0000,
                          #ff7300,
                          #fffb00,
                          #48ff00,
                          #00ffd5,
                          #002bff,
                          #7a00ff,
                          #ff00c8,
                          #ff0000
                        )`,
                      top: '-2px',
                      left: '-2px',
                      backgroundSize: '400%',
                      borderRadius: '10px',
                      width: 'calc(100% + 4px)',
                      height: 'calc(100% + 9px)',
                      animation: 'glowing-button-85 20s linear infinite',
                      transition: 'opacity 0.3s ease-in-out',
                      zIndex: -1,
                      border: 'none',
                      outline: 'none',
                    }}
                    role='button'
                  >
                    <span
                      style={{
                        padding: '0.2em 0.8em',
                        zIndex: '0',
                        color: 'rgb(255, 255, 255)',
                        backgroundColor: '#2b2b2b',
                        position: 'relative',
                        borderRadius: '10px',
                        userSelect: 'none',
                        touchAction: 'manipulation',
                      }}
                    >
                      Logout
                    </span>
                  </button>
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
