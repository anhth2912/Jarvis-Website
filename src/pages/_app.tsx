import '@styles/globals.scss'
import 'react-toastify/dist/ReactToastify.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'
import { ProgressBar } from '@components/common/ProgressBar'
import Script from 'next/script'
import AOS from 'aos'
import 'aos/dist/aos.css'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    })
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <Script src="https://kit.fontawesome.com/004ffe5ae6.js" crossOrigin="anonymous"></Script>
      <ProgressBar />
      <ToastContainer />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp
