import React, { useEffect, useRef, useState } from 'react'
import { partnersLogo } from '../../../../constants/common'
import Link from 'next/link'
import Image from 'next/image'
import { useWindowSizeOfElement } from '../../../../hooks/useWindowSizeOfElement'

export const Partner: React.FC = () => {
  const [current, setCurrent] = useState({
    currentNumber: 1,
    isNeedTransform: true,
  })
  const sliderRef = useRef<HTMLDivElement>(null)
  const { width } = useWindowSizeOfElement(sliderRef)
  let logoWidth = 0
  let marginRight = 0
  if (width > 980) {
    logoWidth = width / 7
    marginRight = 30
  } else if (width > 540 && width <= 980) {
    logoWidth = width / 4.5
    marginRight = 25
  } else {
    logoWidth = width / 2.1
    marginRight = 50
  }

  useEffect(() => {
    const sliderTimeout = setInterval(() => {
      setCurrent((prev) => {
        return {
          currentNumber: prev.currentNumber + 1,
          isNeedTransform: true,
        }
      })
    }, 3000)

    return () => clearInterval(sliderTimeout)
  }, [])

  useEffect(() => {
    if (current.currentNumber > 10) {
      setCurrent({
        currentNumber: 1,
        isNeedTransform: false,
      })
    }
  }, [current.currentNumber])

  return (
    <div className="bg-[#F9F9F9 py-12">
      <div className="container mx-auto">
        <div className="w-full" ref={sliderRef}>
          <div className="overflow-hidden relative">
            <div
              className={`flex flex-row ${current.isNeedTransform ? 'transition ease-out duration-500' : ''}`}
              style={{
                transform: `${
                  current.isNeedTransform ? `translateX(-${current.currentNumber * (logoWidth + marginRight)}px)` : ''
                }`,
                width: width * 3,
              }}
            >
              {partnersLogo.map((logo, index) => (
                <div key={index} style={{ width: logoWidth, marginRight }} className="flex-shrink-0 max-md:!mr-[20px]">
                  <Link href="#" draggable={false}>
                    <Image
                      draggable={false}
                      src={logo}
                      alt="logo"
                      width={100}
                      height={100}
                      className="w-full opacity-70 hover:opacity-100  selectDisable"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
