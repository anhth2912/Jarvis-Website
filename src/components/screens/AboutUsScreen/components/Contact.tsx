import React from 'react'

export const Contact: React.FC = () => {
  return (
    <div className="relative py-24">
      <div className="container mx-auto">
        <div className="mb-20 text-[#fff] !text-center">
          <h2 className="text-[#000] text-[42px] leading-snug mb-3">Trò chuyện cùng Jarvis</h2>
          <div className="section-heading-line mx-auto" />
        </div>

        <form className=" mx-auto">
          <div className="grid grid-cols-6 gap-8">
            <div className="mb-5 col-span-6 lg:col-span-2">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                Họ và Tên
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                placeholder="email@gmail.com"
              />
            </div>
            <div className="mb-5 col-span-6 lg:col-span-2">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                Email
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
              />
            </div>

            <div className="mb-3 col-span-6 lg:mb-5 lg:col-span-2">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                Số Điện Thoại
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
              />
            </div>
          </div>
          <div className="mb-3 col-span-6 lg:mb-5 ">
            <textarea
              id="message"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Để lại lời nhắn ..."
            ></textarea>
          </div>
          <div className="mb-3 col-span-6 lg:mb-5 ">
            <textarea
              id="message"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Vì sao bạn biết đến chúng tôi ..."
            ></textarea>
          </div>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
             focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
