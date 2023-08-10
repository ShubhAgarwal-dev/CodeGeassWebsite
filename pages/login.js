import { useSession, signIn, signOut } from 'next-auth/react'

const login = () => {
  const { data: session, status } = useSession()

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  } else {
    return (
      <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign In</button>
      </>
    )
  }
}

export default login
