import { ReactNode } from 'react'

type Props = {
  title: string
  value: string | ReactNode
  isFromDetailVoucher?: boolean
  className?: string
}

export const DetailAttribute: React.FC<Props> = (props) => {
  const { title, value, isFromDetailVoucher = false, className } = props

  return (
    <div className={`grid grid-cols-12 gap-2 mb-5 ${className ? className : ''}`}>
      <div className={`${isFromDetailVoucher ? 'col-span-4' : 'col-span-2'} font-bold`}>{title}</div>
      <div className={`${isFromDetailVoucher ? 'col-span-8' : 'col-span-10'}`}>{value}</div>
    </div>
  )
}
