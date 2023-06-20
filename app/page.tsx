import AdminMembers from '@/components/Admins/AdminMember'
import Hero from '@/components/Hero/Hero'
import Image from 'next/image'

export const metadata = {
  title: 'Coding Club Website',
  description: 'Coded by Shubh Agarwal (https://github.com/ShubhAgarwal-dev)',
}

export default function Home() {
  return (
    <>
      <Hero />
      <AdminMembers />
    </>
  )
}
