import Image from 'next/image'
import { useState } from 'react'

type Props = {
  sliders: string[]
}

export const Carousel = ({ sliders }: Props) => {
  const [current, setCurrent] = useState<number>(0)

  const previousSlide = () => {
    if (current === 0) {
      setCurrent(sliders.length - 1)
    } else {
      setCurrent(current - 1)
    }
  }

  const nextSlide = () => {
    if (current === sliders.length - 1) {
      setCurrent(0)
    } else {
      setCurrent(current + 1)
    }
  }

  return (
    <div className="w-full">
      <div className="overflow-hidden relative">
        <div
          className={`flex flex-row transition ease-out duration-500`}
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {sliders.map((item, index) => {
            return (
              <div
                key={index}
                className=" w-full h-[205px] md:h-[850px] marker:h- background-image"
                style={{ backgroundImage: 'url(' + item + ')' }}
              ></div>
            )
          })}
        </div>
        <div className="absolute top-0 h-full w-full flex justify-between items-center">
          <button onClick={previousSlide}>
            <Image src={'/icons/arrow-left.svg'} alt="icon-arrow-left" width={60} height={60} />
          </button>
          <button onClick={nextSlide}>
            <Image src={'/icons/arrow-right.svg'} alt="icon-arrow-right" width={60} height={60} />
          </button>
        </div>
        <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
          {sliders.map((_, i) => {
            return (
              <div
                onClick={() => {
                  setCurrent(i)
                }}
                key={'circle' + i}
                className={`rounded-full w-5 h-5 cursor-pointer  ${i == current ? 'bg-white' : 'bg-gray-500'}`}
              ></div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
