import Script from 'next/script'
import { useRouter } from 'next/router'
import * as gtag from 'lib/ga4'
import { useEffect } from 'react'

import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import MdComponentsProvider from 'components/md'
import { ReaderProvider } from 'lib/contexts/reader-context'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <>
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}');
          `
        }}
      />
      <MdComponentsProvider>
        <ReaderProvider>
          <ThemeProvider attribute='class'>
            <Component {...pageProps} />
          </ThemeProvider>
        </ReaderProvider>
      </MdComponentsProvider>
    </>
  )
}

export default MyApp
