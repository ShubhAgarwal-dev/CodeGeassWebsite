import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'
import ProtectedLayout from '../app/protectedLayouts'
import { ReactNode } from 'react' // Import ReactNode type

type AppPropsWithAuth = AppProps & {
  Component: {
    requireAuth?: boolean
  }
}

export default function App({
  Component,
  pageProps,
}: AppPropsWithAuth): JSX.Element {
  // Explicitly specify return type
  return (
    <SessionProvider session={pageProps.session}>
      {Component.requireAuth ? (
        <ProtectedLayout>
          <Component {...pageProps} />
        </ProtectedLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  )
}
