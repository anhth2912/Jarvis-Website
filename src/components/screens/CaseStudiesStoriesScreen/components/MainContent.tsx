import Image from 'next/image'
import Link from 'next/link'
import { ChildrenListItem } from '../../../common/ChildrenList'
import { stories } from '../../../../constants/caseStudiesStories'

export const MainContent: React.FC = () => {
  return (
    <div className="py-5 bg-[#fefefe]">
      <div className="container mx-auto px-[15px]">
        <ChildrenListItem
          of={stories}
          render={(item, _) => (
            <div className="mt-5 mb-[30px]">
              <div className="grid grid-cols-12">
                <div className="col-span-12 sm:col-span-5 px-[15px] relative">
                  <div className="">
                    <Link href="#" className="text-[#111] duration-300 bg-transparent cursor-pointer">
                      <Image
                        src="https://ibasevn.com/image/cache/catalog/Tin%20tuc/275890497_4954498994665398_992080397421338695_n-400x300.png"
                        alt="logo"
                        width={512}
                        height={512}
                        className="w-full h-auto"
                      />
                      <div className="block absolute text-center bg-[#D21E2b] left-[20px] top-[10px] min-w-[60px] p-[5px]">
                        <h4 className="text-[#fff] text-[30px] font-normal tracking-wide mb-[5px] border-b-[#fff] border-b">
                          {item.day}
                        </h4>
                        <p className="text-[#fff] text-sm font-normal leading-[1.7]">th.{item.day}</p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-7 px-[15px]">
                  <div className="border-b border-b-[#E8E8E8]">
                    <Link href="#">
                      <h4 className="text-[#111] text-[20px] font-semibold mt-[5px] mb-[10px]">{item.title}</h4>
                    </Link>
                    <ul className="my-[10px] pl-0">
                      <li className="text-[#999] text-[14px] font-semibold py-[3px] flex gap-3 items-center">
                        <i className="fa fa-calendar text-red-600"></i>
                        {item.date}
                      </li>
                      <li className="text-[#999] text-[14px] font-semibold py-[3px] flex gap-3 items-center">
                        <i className="fa fa-eye text-red-600"></i>
                        {item.view}
                      </li>
                      <li className="text-[#999] text-[14px] font-semibold py-[3px] flex gap-3 items-center">
                        <i className="fa fa-comments text-red-600"></i>
                        {item.comment}
                      </li>
                    </ul>
                    <p className="text-sm text-[#AAA] leading-[1.9] ">{item.description}</p>
                    <div className="mt-5 h-auto mb-8">
                      <Link
                        href="#"
                        className="font-semibold text-xs py-[11px] px-[22px] bg-[#D21E2B] text-[#fff] rounded-[50px]"
                      >
                        Xem chi tiết
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        />
      </div>
    </div>
  )
}
