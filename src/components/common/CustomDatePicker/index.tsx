import { forwardRef } from 'react'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

type Props = {
  date: Date | null
  setDate: (date: Date) => void
}

export const CustomDatePicker: React.FC<Props> = ({ date, setDate }) => {
  const CustomInput = forwardRef(({ value, onClick }: { value: any; onClick: any }, ref: any) => (
    <button className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ))

  return (
    <ReactDatePicker
      showIcon
      closeOnScroll={true}
      selected={date}
      onChange={setDate}
      customInput={<CustomInput value={undefined} onClick={undefined} />}
    />
  )
}
