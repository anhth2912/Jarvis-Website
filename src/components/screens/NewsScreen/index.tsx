import React from 'react'
import { SectionTitle } from '../../common/SectionTitle'
import { MainContent } from './components/MainContent'

export const NewsScreen: React.FC = () => {
  return (
    <>
      <SectionTitle title="Tin Tức" />
      <MainContent />
    </>
  )
}
