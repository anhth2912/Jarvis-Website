import React from 'react'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { MainLayout } from '@layout/MainLayout'

const AboutUsScreen = dynamic(() => import('../components/screens/AboutUsScreen').then((mod) => mod.AboutUsScreen), {
  ssr: false,
})

const AboutUsPage: NextPage = () => (
  <MainLayout title="Jarvis">
    <AboutUsScreen />
  </MainLayout>
)

export default AboutUsPage
