import React from 'react'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { MainLayout } from '@layout/MainLayout'
import { LoadingCircleEffect } from '../components/common/LoadingCircleEffect'

const AboutUsScreen = dynamic(() => import('../components/screens/AboutUsScreen').then((mod) => mod.AboutUsScreen), {
  ssr: false,
  loading: () => <LoadingCircleEffect />,
})

const AboutUsPage: NextPage = () => (
  <MainLayout title="Jarvis">
    <AboutUsScreen />
  </MainLayout>
)

export default AboutUsPage
