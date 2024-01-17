import React, { useRef } from 'react'
import { partnersLogo } from '../../../../constants/common'
import Link from 'next/link'
import Image from 'next/image'
import { useWindowSizeOfElement } from '../../../../hooks/useWindowSizeOfElement'

export const Partner: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null)
  const { width } = useWindowSizeOfElement(sliderRef)
  let logoWidth = 0
  if (width > 768) {
    logoWidth = width / 7
  } else if (width > 576 && width <= 768) {
    logoWidth = width / 4
  } else {
    logoWidth = width / 2.5
  }
  return (
    <div className="bg-[#F9F9F9 py-12">
      <div className="container mx-auto">
        <div className="block w-full overflow-hidden relative z-1 ">
          <div className="flex flex-row justify-between transition ease-out duration-500" ref={sliderRef}>
            {partnersLogo.map((logo, index) => (
              <div key={index}>
                <Link href="#" draggable={false}>
                  <Image
                    draggable={false}
                    src={logo}
                    alt="logo"
                    width={100}
                    height={100}
                    style={{ width: logoWidth }}
                    className="opacity-70 hover:opacity-100 flex-shrink-0 selectDisable"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
