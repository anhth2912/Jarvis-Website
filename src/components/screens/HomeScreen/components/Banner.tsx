import React from 'react'

export const Banner: React.FC = () => {
  return (
    <div className="section-banner mt-10">
      <div className="container mx-auto">
        <div className="flex flex-col flex-wrap">
          <div className="mb-3 md:max-w-[67%]">
            <div className="mb-[20px]">
              <h3>Jarvis – Tự hào là nhà cung cấp giải pháp tự động hóa thông minh hàng đầu Việt Nam</h3>
            </div>
            <div className="section-heading-line"></div>
          </div>
          <div className="mt-3">
            <p className="section-banner-content">
              Đội ngũ nhân sự giàu kinh nghiệm, đạt các chứng chỉ chuyên môn quốc tế
              <br />
              Chuyên môn hóa về robot phần mềm và trí tuệ nhân tạo
              <br />
              Tư vấn giải pháp toàn diện, cập nhật những công nghệ tiên tiến nhất trên Thế giới
              <br />
              Thời gian triển khai nhanh, hỗ trợ vận hành khai thác và cải tiến liên tục
            </p>
          </div>
          <div className="mt-[20px]">
            <a
              // href="nang-luc"
              href="#"
              // eslint-disable-next-line max-len
              className="inline-block text-sm font-medium py-[13px] px-[25px] bg-[#D21E2B] rounded-3xl text-[#fff] ease-in transition-all duration-500"
            >
              Xem thêm
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
