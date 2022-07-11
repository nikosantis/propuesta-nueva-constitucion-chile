import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import MdComponentsProvider from 'components/md'
import { ReaderProvider } from 'lib/contexts/reader-context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MdComponentsProvider>
      <ReaderProvider>
        <ThemeProvider attribute='class'>
          <Component {...pageProps} />
        </ThemeProvider>
      </ReaderProvider>
    </MdComponentsProvider>
  )
}

export default MyApp
