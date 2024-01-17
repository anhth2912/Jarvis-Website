import Image from 'next/image'
import React from 'react'
import { categories } from '../../../../constants/common'

export const Categories: React.FC = () => {
  return (
    <div className="mt-6 container mx-auto">
      <div className="flex flex-col items-center">
        <h3>Giải pháp Tự động hóa trong nhiều lĩnh vực</h3>
        <div className="section-heading-line mx-auto"></div>
      </div>
      <div className="flex justify-between flex-wrap mt-20">
        {categories.map((category, index) => (
          <div key={index} className="lg:w-[30%] md:w-[50%] flex gap-3 my-[30px]">
            <div className="category-icon w-[80px] h-[80px] flex justify-center items-center rounded-full flex-shrink-0">
              <Image src={category.icon} alt="icon-arrow-right" width={40} height={40} />
            </div>
            <div className="flex flex-col gap-2">
              <h4>{category.title}</h4>
              <p className="category-content">{category.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
