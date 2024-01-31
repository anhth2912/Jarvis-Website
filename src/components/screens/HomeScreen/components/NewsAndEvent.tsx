import Image from 'next/image'
import Link from 'next/link'
import { defaultNews } from '../../../../constants/common'

export const NewsAndEvent: React.FC = () => {
  return (
    <div className="py-5 bg-[#fefefe] ">
      <div data-aos="zoom-in" className="container mx-auto">
        <div className="mb-3">
          <h4 className="relative text-3xl font-semibold text-[#111] mb-3">Tin tức - sự kiện</h4>
          <div className="section-heading-line" />
        </div>
        <div className="grid grid-cols-12 gap-8 mt-5">
          {defaultNews.map((news, index) => (
            <div key={index} className="col-span-12 md:col-span-4 ">
              <div className="my-5 relative">
                <div className="mb-12">
                  <Image src={news.banner} alt="image" width={350} height={350} className="w-full h-auto " />
                  <div className="inline-block bg-[#D21E2B] rounded-sm py-3 px-6 absolute top-36 lg:top-48 xl:top-56 left-5 ">
                    <h4 className="text-white text-3xl font-medium p-0">{news.day}</h4>
                    <h5 className="text-white text-lg font-medium p-0">th.{news.month}</h5>
                  </div>
                </div>
                <div className="px-5">
                  <Link href="#">
                    <h4 className="text-[#333] text-[23px] font-medium my-4 duration-300">{news.title}</h4>
                  </Link>
                  <p className="text-[#777] text-[15px] font-normal leading-6 line-clamp-2">{news.content}</p>
                  <div className="relative mt-6">
                    <Link
                      href="#"
                      className="font-semibold py-2 px-5 rounded-md border-2 border-solid border-[#D21E2B] inline-block
                       bg-transparent text-[#D21E2B] hover:bg-[#D21E2B] hover:text-[#fff] transition-all duration-300"
                    >
                      Xem thêm
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
