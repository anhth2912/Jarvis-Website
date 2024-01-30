import React from 'react'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { MainLayout } from '@layout/MainLayout'
import { LoadingCircleEffect } from '../components/common/LoadingCircleEffect'

const CaseStudiesStoriesScreen = dynamic(
  () => import('../components/screens/CaseStudiesStoriesScreen').then((mod) => mod.CaseStudiesStoriesScreen),
  {
    ssr: false,
    loading: () => <LoadingCircleEffect />,
  },
)

const CaseStudiesStoriesPage: NextPage = () => (
  <MainLayout title="Jarvis">
    <CaseStudiesStoriesScreen />
  </MainLayout>
)

export default CaseStudiesStoriesPage
