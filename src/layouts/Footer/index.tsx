import Link from 'next/link'
import { ChildrenListItem } from '../../components/common/ChildrenList'
import { business } from '../../constants/footer'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111] pt-14 pb-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-12">
          <div className="col-span-3 md:col-span-1">
            <div>
              <div className="mb-4">
                <h1 className="text-[70px] font-semibold text-white">JARVIS</h1>
              </div>
              <h3 className="text-lg font-normal text-white mb-0">CÔNG TY CP GIẢI PHÁP CÔNG NGHỆ JARVIS</h3>
              <div className="section-heading-line mt-0 mb-5"></div>
              <ul className="pl-0 mb-0 mt-3">
                <li className="text-[15px] font-normal text-[#aaa] py-[6px] list-none flex gap-3">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>Số 99 Hoàng Ngân, Phường Nhân Chính, Quận Thanh
                  Xuân, Thành phố Hà Nội
                </li>
                <li className="text-[15px] font-normal text-[#aaa] py-[6px] list-none flex gap-3">
                  <i className="fa fa-envelope-o" aria-hidden="true"></i>
                  <a href="mailto:support@jarvis.com" className="hover-style-link">
                    support@jarvis.com
                  </a>
                </li>
                <li className="text-[15px] font-normal text-[#aaa] py-[6px] list-none flex gap-3">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <a href="tel:+84 975 260 188" className="">
                    +84 975 260 188
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-social-icons mt-6">
              <ul>
                <li className="inline-block bg-[#333] rounded-full text-white mr-4 mb-[6px] hover:bg-[#ff6a00] duration-300">
                  <Link
                    className="block text-[15px] text-white w-[35px] h-[35px] py-2 px-[11px]"
                    href="https://www.facebook.com/groups/3830316070340655"
                  >
                    <i className="fa fa-facebook-square"></i>
                  </Link>
                </li>
                <li className="inline-block bg-[#333] rounded-full text-white mr-4 mb-[6px] hover:bg-[#ff6a00] duration-300">
                  <Link
                    className="block text-[15px] text-white w-[35px] h-[35px] py-2 px-[11px]"
                    href="https://www.youtube.com/watch?v=HUgIl6YsNX4"
                  >
                    <i className="fa fa-youtube"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-3 md:col-span-1">
            <h3 className="text-2xl font-normal text-[#fff] ">Thông tin</h3>
            <div className="section-heading-line !mb-8 !w-[70px] !mt-0" />
            <ul className="mt-5 pl-0 mb-0 footer-list-information text-[15px] font-normal text-[#aaa] bg-transparent flex flex-col gap-4">
              <ChildrenListItem
                of={business}
                render={(item, _) => (
                  <li className="footer-list-information-item">
                    <a href={item.link}>{item.name}</a>
                  </li>
                )}
              />
            </ul>
          </div>
          <div className="col-span-3 md:col-span-1">
            <h3 className="text-2xl font-normal text-[#fff] ">Nhóm ngành kinh doanh</h3>
            <div className="section-heading-line !mb-8 !w-[70px] !mt-0" />
            <ul className="mt-5 pl-0 mb-0 footer-list-information text-[15px] font-normal text-[#aaa] bg-transparent flex flex-col gap-4">
              <ChildrenListItem
                of={business}
                render={(item, _) => (
                  <li className="footer-list-information-item">
                    <a href="#">{item.name}</a>
                  </li>
                )}
              />
            </ul>
          </div>
        </div>
        <div className="footer-bar">
          <p className="text-[#fff] text-[15px] font-normal leading-7">
            © Copyright 2021-2024 CÔNG TY CP GIẢI PHÁP CÔNG NGHỆ JARVIS.{' '}
          </p>
        </div>
      </div>
    </footer>
  )
}
