import React from 'react'
import type { NextPage } from 'next'
import { MainLayout } from '@layout/MainLayout'
import { ContactScreen } from '../components/screens/ContactScreen'

const NewsPage: NextPage = () => (
  <MainLayout title="Jarvis">
    <ContactScreen />
  </MainLayout>
)

export default NewsPage
