import React from 'react'
import { services } from '../../../../constants/common'
import Link from 'next/link'

export const BlockService: React.FC = () => {
  const maxSubService = Math.max(...services.map((service) => service.subServices.length))

  return (
    <div className="py-5 bg-[#fefefe]">
      <div className="container mx-auto">
        <div className="mb-3 text-center">
          <span className="relative text-[15px] font-medium text-[#D21E2B] leading-[200%] mb-4">
            Giải pháp tự động hóa được thiết kế dành riêng cho doanh nghiệp bạn
          </span>
          <h3>Bằng cách kết hợp nhiều công nghệ hiện đại, tối ưu</h3>
          <div className="section-heading-line mx-auto" />
        </div>
        <div className="grid grid-cols-12 gap-10 mt-12">
          {services.map((service, index) => (
            <div data-aos="fade-down" data-aos-easing="linear" key={index} className="col-span-12 sm:col-span-4">
              <div className="relative rounded-[10px] my-4 overflow-hidden bg-[#fff] shadow-xl">
                <div className="bg-[#111] text-center px-[10px] pb-5">
                  <h5 className="relative text-[#111] font-medium inline-block mr-[-7px] text-center text-[17px] bg-[#fff] rounded-b-[15px] py-[5px] px-[15px]" />
                  <h4 className="text-white font-light mt-4 mb-[10px] text-base">{service.title}</h4>
                </div>
                <div className="p-5">
                  <ul className="pl-0 pb-0 mb-0 block list-disc ">
                    {service.subServices.map((subService, j) => (
                      <li
                        key={index + '_' + j}
                        className={`block list-disc text-[#111] text-sm font-medium p-4 ${
                          subService ? 'list-tick-item' : ''
                        }`}
                      >
                        {subService}
                      </li>
                    ))}
                  </ul>
                  <div className="!text-center">
                    <Link
                      // href={service.redirect}
                      href="#"
                      className="inline-block text-white text-sm font-medium bg-[#111] rounded-[10px] p-4 w-full hover:bg-[#D21E2B] transition-all duration-300"
                      style={{
                        marginTop: `${
                          15 +
                          52 *
                            (maxSubService > service.subServices.length
                              ? maxSubService - service.subServices.length
                              : 0)
                        }px`,
                      }}
                    >
                      Tìm Hiểu Thêm
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

{
  /* <li className="block list-disc text-[#111] text-sm font-medium p-4 list-tick-item">
                        Finance &amp; Accounting
                      </li> */
}
