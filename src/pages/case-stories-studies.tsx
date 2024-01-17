import React from 'react'
import type { NextPage } from 'next'
import { MainLayout } from '@layout/MainLayout'
import { CaseStudiesStoriesScreen } from '../components/screens/CaseStudiesStoriesScreen'

const CaseStudiesStoriesPage: NextPage = () => (
  <MainLayout title="Jarvis">
    <CaseStudiesStoriesScreen />
  </MainLayout>
)

export default CaseStudiesStoriesPage
