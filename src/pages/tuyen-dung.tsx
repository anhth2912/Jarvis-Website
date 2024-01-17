import React from 'react'
import type { NextPage } from 'next'
import { MainLayout } from '@layout/MainLayout'
import { RecruitmentScreen } from '../components/screens/RecruitmentScreen'

const RecruitmentPage: NextPage = () => (
  <MainLayout title="Jarvis">
    <RecruitmentScreen />
  </MainLayout>
)

export default RecruitmentPage
