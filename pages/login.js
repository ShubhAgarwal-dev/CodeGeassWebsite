import { useSession, signIn, signOut } from 'next-auth/react'

import styles from './login.module.css'

const login = () => {
  const { data: session, status } = useSession()

  const signFunc = () => {
    if (session) signOut.apply()
    else signIn.apply()
  }

  return (
    <>
      <div className={styles.loginWrapper}>
        <p>
          {session ? 'Signed in as ' + session.user.email : 'Not signed in'}
        </p>
        <button onClick={signFunc}>{session ? 'signOut' : 'signIn'}</button>
      </div>
    </>
  )
}

export default login
