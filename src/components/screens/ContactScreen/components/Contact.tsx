import { ReactElement } from 'react'
import { contactEmail, contactPhoneNumber } from '../../../../constants/common'

type Contact = {
  icon: ReactElement
  title: string
  value: string
}

export const Contact: React.FC = () => {
  const contacts: Contact[] = [
    {
      icon: <i className="fa fa-phone"></i>,
      title: 'Điện thoại',
      value: contactPhoneNumber,
    },
    {
      icon: <i className="fa fa-envelope-open"></i>,
      title: 'Email',
      value: contactEmail,
    },
    {
      icon: <i className="fa fa-globe"></i>,
      title: 'Địa chỉ văn phòng',
      value: 'Số 99 Hoàng Ngân, Phường Nhân Chính, Quận Thanh Xuân, Thành phố Hà Nội',
    },
  ]
  return (
    <div className="py-5 bg-[#fefefe]">
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-12 sm:col-span-7 px-4">
            <div className="mb-3 mt-4 px-4">
              <h4 className="relative text-[30px] font-bold text-[#111] leading-normal mb-[10px]">Thông tin liên hệ</h4>
              <div className="section-heading-line mt-4 " />
            </div>
            <div className="mt-8">
              <form className="form-contact">
                <div className="grid grid-cols-2">
                  <div className="col-span-2 px-4">
                    <input type="text" name="name" placeholder="Tên đầy đủ" />
                  </div>
                  <div className="col-span-2 sm:col-span-1 px-4">
                    <input type="text" name="email" placeholder="Địa chỉ Email" />
                  </div>
                  <div className="col-span-2 sm:col-span-1 px-4">
                    <input type="text" name="phoneNumber" placeholder="Số điện thoại" />
                  </div>
                  <div className="col-span-2 px-4">
                    <textarea name="phoneNumber" placeholder="Nội dung cần tư vấn" spellCheck={false} />
                  </div>
                  <div className="col-span-2 text-center px-4">
                    <button type="button">Gửi đi</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-5 px-4">
            {contacts.map((contact, index) => (
              <div key={index} className="border-b border-b-[#ECECEC] py-[25px] mb-0 duration-500">
                <div className="grid grid-cols-12">
                  <div className="col-span-4 md:col-span-2 w-[60px] h-[60px] flex justify-center items-center bg-[#D21E2B] text-[#fff] rounded-full">
                    {contact.icon}
                  </div>
                  <div className="col-span-8 md:col-span-10 ml-6">
                    <h4 className="text-[#111] text-lg font-semibold mb-[10px]">{contact.title}</h4>
                    <p className="text-[#999] text-[15px] font-medium leading0[1.7]">{contact.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
