import React from 'react'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { MainLayout } from '@layout/MainLayout'
import { LoadingCircleEffect } from '../components/common/LoadingCircleEffect'

const HomeScreen = dynamic(() => import('../components/screens/HomeScreen').then((mod) => mod.HomeScreen), {
  ssr: false,
  loading: () => <LoadingCircleEffect />,
})

const Home: NextPage = () => (
  <MainLayout title="Jarvis">
    <HomeScreen />
  </MainLayout>
)

export default Home
