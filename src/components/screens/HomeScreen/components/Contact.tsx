import React from 'react'

export const Contact: React.FC = () => {
  return (
    <div className="relative py-24">
      <div className="container mx-auto">
        <div className="mb-3 text-[#fff] !text-center">
          <h2 className="text-[#000] text-[42px] leading-snug mb-3">Nhập thông tin của bạn</h2>
          <div className="section-heading-line mx-auto" />
          <div className="text-center">
            <p className="text-[#aaa] text-[15px] font-normal leading-6 pt-4 ">
              Để thuận tiện cho việc liên lạc, hãy gửi thông tin của bạn cho chúng tôi, chúng tôi sẽ liên lạc cho bạn
              sớm nhất để tư vấn cho bạn 1 cách nhanh chóng, chuyên nghiệp
            </p>
          </div>
        </div>

        <form className=" mx-auto">
          <div className="grid grid-cols-4 gap-8">
            <div className="mb-5 col-span-4 lg:col-span-2">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                Họ và Tên
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                placeholder="name@flowbite.com"
              />
            </div>
            <div className="mb-5 col-span-4 lg:col-span-2">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                Email
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
              />
            </div>

            <div className="mb-5 col-span-4 lg:col-span-2">
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
