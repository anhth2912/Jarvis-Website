import { useRef, useState } from 'react'
import { useClickOutside } from '@hooks/useClickOutside'
import { contacts, navbarTab, socialAccounts } from '../../constants/common'
import { useWindowSize } from '../../hooks/userWindowSize'

const MIN_WINDOW_WIDTH = 1024
export const Header = () => {
  const [toggleNavBar, setToggleNavBar] = useState<boolean>(false)

  const toggleRef = useRef<HTMLButtonElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  useClickOutside(contentRef, toggleRef, toggleNavBar, () => setToggleNavBar(false))
  const size = useWindowSize()

  return (
    <>
      <div id="top-bar" className="hidden lg:block bg-[#2A2A2A] text-[#fff]">
        <div className="container mx-auto">
          <div className="flex justify-between items-center h-[45px]">
            <div className="">
              <div className="top-bar-welcome">
                <ul>
                  <li></li>
                </ul>
              </div>
              <div className="top-bar-info">
                <ul className="flex gap-14 text-[13px]">
                  {contacts.map((item, index) => (
                    <li key={index} className="flex gap-1">
                      <img
                        src={item.src}
                        className="fill-current hover:text-green-600"
                        width={13}
                        height={13}
                        alt="social media"
                      />
                      <a href="tel:+84 975 260 188">{item.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <ul className="flex gap-6">
                {socialAccounts.map((item, index) => (
                  <li key={index}>
                    <a href={item.href} target="_blank">
                      <img
                        src={item.src}
                        className="fill-current hover:text-green-600"
                        width={13}
                        height={13}
                        alt={item.title}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <nav className="bg-white border-gray-20 h-[95px] ">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 container h-full relative">
            <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">Flowbite</span>
            </a>
            <button
              ref={toggleRef}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg
            lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              onClick={() => {
                if (size.width < MIN_WINDOW_WIDTH) {
                  setToggleNavBar((prev) => !prev)
                }
              }}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              ref={size.width < MIN_WINDOW_WIDTH ? contentRef : null}
              className={`w-full lg:block lg:w-auto max-lg:z-10 ${!toggleNavBar ? 'hidden' : 'absolute top-16'}`}
            >
              <ul
                className="flex flex-col font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50
             lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-white"
              >
                {navbarTab.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="block py-2 px-3 font-semibold text-gray-900 text-[13px] uppercase rounded hover:bg-gray-100 lg:hover:bg-transparent
                      lg:hover:text-blue-700 lg:p-0"
                      aria-current="page"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
