import Image from 'next/image'
import Link from 'next/link'

type Props = {
  title: string
  image: string
  date: string
  day: string
  month: string
  view: number
  numberOfComment: number
  description: string
}

export const CardItem: React.FC<Props> = ({ title, image, date, day, month, view, numberOfComment, description }) => {
  return (
    <div
      className="pb-20 relative bg-[#FFF] border border-[#EEE] rounded-md overflow-hidden"
      style={{ height: 'calc(100% - 50px)' }}
    >
      <div>
        <Link href="#" className="text-[#111] duration-300 bg-transparent">
          <Image
            src={image}
            alt="image for recruitment"
            width={512}
            height={512}
            className="w-full h-auto duration-300"
          />
        </Link>
        <div
          className="border border-[#fff] rounded-md block absolute text-center bg-[#D21E2B]
                top-[15px] left-[15px] min-w-[60px] p-[5px]"
        >
          <h4 className="text-[#fff] text-[30px] font-normal tracking-[2px] border-b border-b-[#FFF]">{day}</h4>
          <p className="text-[#fff] text-sm leading-[1.7] mb-0">th.{month}</p>
        </div>
      </div>
      <div className="px-[25px] pt-[25px]">
        <Link href="#">
          <h4 className="overflow-hidden min-h-[85px] recruitment-text-title text-[#111] text-[20px] font-semibold my-[5px]">
            {title}
          </h4>
        </Link>
        <ul className="text-sm">
          <li className="text-[#999] font-semibold my-[10px] inline-block pr-[25px]">
            <i className="fa fa-calendar text-red-600 mr-[10px]"></i>
            {date}
          </li>
          <li className="text-[#999] font-semibold my-[10px] inline-block pr-[25px]">
            <i className="fa fa-eye text-red-600 mr-[10px]"></i>
            {view}
          </li>
          <li className="text-[#999] font-semibold my-[10px] inline-block pr-[25px]">
            <i className="fa fa-comments text-red-600 mr-[10px]"></i>
            {numberOfComment}
          </li>
        </ul>
        <div>
          <p className="overflow-hidden p-0 mb-[15px] min-h-[50px] recruitment-text-description"> {description}</p>
        </div>
        <div className="border-t border-t-[#ECECEC] py-5 px-6 m-0 w-full">
          <Link
            href="#"
            className="inline-block font-semibold text-xs py-[11px] px-[22px] bg-[#D21E2B] transition-all duration-[400] text-[#fff] rounded-[50px]"
          >
            {' '}
            Xem chi tiết
          </Link>
        </div>
      </div>
    </div>
  )
}
