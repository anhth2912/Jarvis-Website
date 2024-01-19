import React from 'react'
import Head from 'next/head'
import { Header } from '@layout/Header'
import { Footer } from '../Footer'

interface Props {
  title: string
  children?: React.ReactNode
}

export const MainLayout: React.FC<Props> = React.memo(({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className="w-full h-screen flex">
        <div className="w-full bg-[#f1f5f9] flex flex-col relative">
          <Header />
          <div className="pb-10">{children}</div>
          <Footer />
        </div>
        {/* )} */}
      </main>
    </>
  )
})
