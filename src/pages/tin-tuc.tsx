import React from 'react'
import dynamic from 'next/dynamic'
import type { NextPage } from 'next'
import { MainLayout } from '@layout/MainLayout'

const NewsScreen = dynamic(() => import('../components/screens/NewsScreen').then((mod) => mod.NewsScreen), {
  ssr: false,
})

const NewsPage: NextPage = () => (
  <MainLayout title="Jarvis">
    <NewsScreen />
  </MainLayout>
)

export default NewsPage
