import { Html, Head, Main, NextScript } from 'next/document'
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function Document() {
  return (
    <Html lang="en" data-theme="winter">
      <Head>{/* <link rel="icon" href="/logo/favicon.ico" sizes="any" /> */}</Head>
      <body>
        <Main />
        <NextScript />
        <SpeedInsights />
      </body>
    </Html>
  )
}
