import React from 'react'
import type { NextPage } from 'next'
import { MainLayout } from '@layout/MainLayout'
import { AboutUsScreen } from '../components/screens/AboutUsScreen'

const AboutUsPage: NextPage = () => (
  <MainLayout title="Jarvis">
    <AboutUsScreen />
  </MainLayout>
)

export default AboutUsPage
