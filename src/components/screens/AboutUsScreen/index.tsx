import React from 'react'
import { Content } from './components/Content'
import { Mission } from './components/Mission'
import { CoreValue } from './components/CoreValue'
import { Contact } from './components/Contact'
import { SectionTitle } from '../../common/SectionTitle'

export const AboutUsScreen: React.FC = () => {
  return (
    <>
      <SectionTitle title="Về Chúng Tôi" />
      <Content />
      <Mission />
      <CoreValue />
      <Contact />
    </>
  )
}
