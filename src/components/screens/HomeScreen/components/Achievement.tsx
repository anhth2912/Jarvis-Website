import React from 'react'

export const Achievement: React.FC = () => {
  return (
    <div className="section-achievement py-[40px]">
      <div className="container mx-auto text-white">
        <div className="grid grid-cols-12">
          <div className="mb-3 mt-4 col-span-12 sm:col-span-5 ">
            <span>Mang lại thành công cho bạn !</span>
            <h3 className="text-white">Chúng tôi luôn sẵn sàng !</h3>
            <div className="section-heading-line"></div>
          </div>
          <div className="col-span-12 sm:col-span-7">
            <div className="grid grid-cols-12">
              {' '}
              <div className="col-span-12 sm:col-span-4">
                <div className="counter-box relative text-center my-4">
                  <h4 className="text-white text-5xl font-semibold mb-4">20+</h4>
                  <p>Chứng chỉ Advanced Developer và Business Analyst</p>
                </div>
              </div>{' '}
              <div className="col-span-12 sm:col-span-4">
                <div className=" counter-box relative text-center my-4">
                  <h4 className="text-white text-5xl font-semibold mb-4">50+</h4>
                  <p>Dự án đã hoàn thành</p>
                </div>
              </div>{' '}
              <div className="col-span-12 sm:col-span-4">
                <div className="counter-box relative text-center my-4">
                  <h4 className="text-white text-5xl font-semibold mb-4">99%+</h4>
                  <p>Khách hàng hài lòng</p>
                </div>
              </div>{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
