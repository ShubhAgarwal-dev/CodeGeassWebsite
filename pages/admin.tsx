import { useSession } from 'next-auth/react'
import AdminMembers from '@/components/Admins/AdminMember'
import Hero from '@/components/Hero/Hero'

const admin = () => {
  const { data: session } = useSession()
  return (
    <>
      <Hero />
      <AdminMembers />
    </>
  )
}

// add the requireAuth property to the page component
admin.requireAuth = true

export default admin
