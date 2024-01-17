import Link from 'next/link'
import { missions } from '../../../../constants/aboutUs'
import { ChildrenListItem } from '../../../common/ChildrenList'
import Image from 'next/image'

export const Mission: React.FC = () => {
  return (
    <div className="py-5 bg-[#fefefe] ">
      <div className="container mx-auto">
        <div className="grid grid-cols-2">
          <div className="col-span-2 sm:col-span-1 px-[15px]">
            <div className="pr-[30px]">
              <div className="mb-[10px]">
                <h4 className="relative text-[30px] font-semibold text-[#111] leading-relaxed">Sứ mệnh</h4>
              </div>
              <div className="section-heading-line" />

              <div className="mt-5 ">
                <p className="text-[15px] font-normal text-[#999] leading-loose mb-[15px]">
                  Sáng tạo vì khách hàng, kiến tạo môi trường làm việc thông minh nhờ tự động hóa.
                </p>
              </div>

              <div className="mt-5">
                <ul className="pl-0">
                  <ChildrenListItem
                    of={missions}
                    render={(item, _) => {
                      return (
                        <li className="list-none text-[#222] text-[13px] font-semibold mt-[15px]">
                          <i className="fa fa-caret-right"></i> {item}
                        </li>
                      )
                    }}
                  />
                </ul>
              </div>

              <div className="mt-6">
                <Link
                  href="#"
                  className="inline-block font-semibold text-[12px] py-[11px] px-[22px] bg-[#D21E2B] text-[#FFF] rounded-[50px]"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1 relative px-[15px]">
            <Image
              src="https://ibasevn.com/image/catalog/services/home13.jpg"
              alt="image mission"
              width={512}
              height={512}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
