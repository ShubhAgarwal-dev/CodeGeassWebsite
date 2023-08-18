import AppBar from '@/components/AppBar/AppBar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer/Footer'
import { ReactNode } from 'react'
import { NextAuthProvider } from './../pages/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Coding Club Website',
  description: 'The official website of the Coding Club of IIT Dharwad',
}

interface RootLayoutProps {
  // Use interface for prop types
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  // Use the defined interface
  return (
    <html lang='en'>
      <body className={inter.className}>
        <>
          <AppBar />
        </>
        <NextAuthProvider>{children}</NextAuthProvider>
        <>
          <Footer />
        </>
      </body>
    </html>
  )
}
