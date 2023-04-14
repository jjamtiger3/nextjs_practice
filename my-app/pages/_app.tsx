import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@/styles/icon.css'
import '@/styles/mail.css'
import '@/styles/components/searchform.css'
import '@/styles/components/button.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
