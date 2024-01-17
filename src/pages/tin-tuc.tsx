import React from 'react'
import type { NextPage } from 'next'
import { MainLayout } from '@layout/MainLayout'
import { NewsScreen } from '../components/screens/NewsScreen'

const NewsPage: NextPage = () => (
  <MainLayout title="Jarvis">
    <NewsScreen />
  </MainLayout>
)

export default NewsPage
