import React from 'react'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { MainLayout } from '@layout/MainLayout'

const ContactScreen = dynamic(() => import('../components/screens/ContactScreen').then((mod) => mod.ContactScreen), {
  ssr: false,
})

const NewsPage: NextPage = () => (
  <MainLayout title="Jarvis">
    <ContactScreen />
  </MainLayout>
)

export default NewsPage
