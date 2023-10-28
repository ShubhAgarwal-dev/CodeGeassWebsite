import { useSession } from 'next-auth/react'

const home = () => {
  const { data: session } = useSession()
  return (
    <div>
      <h1>Protected Page home</h1>
      <p>Hi {session?.user?.name}!</p>
    </div>
  )
}

// add the requireAuth property to the page component
home.requireAuth = true

export default home
