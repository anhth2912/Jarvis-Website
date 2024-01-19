import React from 'react'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { MainLayout } from '@layout/MainLayout'

const CaseStudiesStoriesScreen = dynamic(
  () => import('../components/screens/CaseStudiesStoriesScreen').then((mod) => mod.CaseStudiesStoriesScreen),
  {
    ssr: false,
  },
)

const CaseStudiesStoriesPage: NextPage = () => (
  <MainLayout title="Jarvis">
    <CaseStudiesStoriesScreen />
  </MainLayout>
)

export default CaseStudiesStoriesPage
