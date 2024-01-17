import React from 'react'
import { Carousel } from '../../common/Carousel'
import { slider } from '../../../constants/common'
import { Categories } from './components/Categories'
import { Banner } from './components/Banner'
import { Achievement } from './components/Achievement'
import { BlockService } from './components/BlockService'
import { Partner } from './components/Partner'
import { NewsAndEvent } from './components/NewsAndEvent'
import { Contact } from './components/Contact'

export const HomeScreen: React.FC = () => {
  return (
    <>
      <Carousel sliders={slider} />
      <Categories />
      <Banner />
      <Achievement />
      <BlockService />
      <Partner />
      <NewsAndEvent />
      <Contact />
    </>
  )
}
