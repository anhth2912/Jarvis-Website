import { coreValues } from '../../../../constants/aboutUs'
import { ChildrenListItem } from '../../../common/ChildrenList'

export const CoreValue: React.FC = () => {
  return (
    <div className="py-[90px] bg-[#f9f9f9] ">
      <div className="container mx-auto px-[15px]">
        <div className="mb-[10px] text-center">
          <h3 className="relative text-[35px] font-semibold text-[#111] leading-snug mb-[10px]">Giá trị cốt lõi</h3>
          <div className="section-heading-line mx-auto" />
        </div>

        <div className="grid grid-cols-3 mt-14">
          <ChildrenListItem
            of={coreValues}
            render={(item, _) => (
              <div className="col-span-3 md:col-span-1 px-[15px]">
                <div className="relative border border-solid border-[#eee] bg-[#fff] shadow-5xl rounded-md overflow-hidden p-[30px] serv-section">
                  <div className="absolute top-[18px] right-[24px] max-w-[100px] z-1 text-center w-12">{item.icon}</div>

                  <div className="relative">
                    <h4 className="text-[#333] text-[20px] font-semibold leading-normal">{item.title}</h4>
                    <h5 className="text-[#333] text-[17px] font-normal mt-[5px]">{item.description}</h5>
                  </div>

                  <div className="section-heading-line" />

                  <p className="mt-[25px] pr-[50px] leading-[1.7] text-[#999] ">{item.content}</p>
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </div>
  )
}
