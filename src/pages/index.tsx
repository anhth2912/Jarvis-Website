import React from 'react'
import type { NextPage } from 'next'
import { MainLayout } from '@layout/MainLayout'
import { HomeScreen } from '../components/screens/HomeScreen'

const Home: NextPage = () => (
  <MainLayout title="Jarvis">
    <HomeScreen />
  </MainLayout>
)

export default Home
