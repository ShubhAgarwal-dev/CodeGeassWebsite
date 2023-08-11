import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import AppBarAdmin from './../components/AppBar/AppBarAdmin'
import Footer from '@/components/Footer/Footer'
import './globals.css'
import AppBar from '@/components/AppBar/AppBar'
import './globals.css'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import { NextAuthProvider } from './../pages/provider'

interface RootLayoutProps {
  // Use interface for prop types
  children: ReactNode
}

function ProtectedLayout({ children }: RootLayoutProps) {
  const router = useRouter()
  const { status: sessionStatus } = useSession()
  const authorized = sessionStatus === 'authenticated'
  const unAuthorized = sessionStatus === 'unauthenticated'
  const loading = sessionStatus === 'loading'

  useEffect(() => {
    if (loading || !router.isReady) return

    if (unAuthorized) {
      console.log('not authorized')
      router.push({
        pathname: '/login',
      })
    }
  }, [loading, unAuthorized, sessionStatus, router])

  if (loading) {
    return <>Loading app...</> //need to change to loading screen
  }

  return authorized ? (
    <>
      <AppBarAdmin />
      <div>{children}</div>
      <Footer />
    </>
  ) : (
    <></>
  )
}

export default ProtectedLayout
