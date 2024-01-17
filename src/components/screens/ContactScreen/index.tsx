import React from 'react'
import { SectionTitle } from '../../common/SectionTitle'
import { Contact } from './components/Contact'
import Map from '../../common/Map'

export const ContactScreen: React.FC = () => {
  return (
    <>
      <SectionTitle title="Liên hệ với chúng tôi" />
      <Contact />
      {/* <Map address="Số 99 Hoàng Ngân, Phường Nhân Chính, Quận Thanh Xuân, Thành phố Hà Nội" /> */}
    </>
  )
}
