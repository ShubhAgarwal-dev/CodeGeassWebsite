import AppBar from '@/components/AppBar/AppBar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Coding Club Website',
  description: 'Coded by Shubh Agarwal (https://github.com/ShubhAgarwal-dev)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <>
          <AppBar />
        </>
        {children}
        <>
          <Footer />
        </>
      </body>
    </html>
  )
}
