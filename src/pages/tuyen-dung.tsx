import React from 'react'
import type { NextPage } from 'next'
import { MainLayout } from '@layout/MainLayout'
import dynamic from 'next/dynamic'

const RecruitmentScreen = dynamic(
  () => import('../components/screens/RecruitmentScreen').then((mod) => mod.RecruitmentScreen),
  {
    ssr: false,
  },
)

const RecruitmentPage: NextPage = () => (
  <MainLayout title="Jarvis">
    <RecruitmentScreen />
  </MainLayout>
)

export default RecruitmentPage
