import { AuthProvider } from '@/hooks/useAuth'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    //HOC - navigate un-logged user to login page
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}
