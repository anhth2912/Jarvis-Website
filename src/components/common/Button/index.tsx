import { ReactNode } from 'react'

type Props = {
  type?: 'button' | 'submit' | 'reset'
  form?: string
  label: string | ReactNode
  className?: string
  disabled?: boolean
  onClick?: () => any
}

export const Button = ({ type, form, label, className, disabled = false, onClick }: Props) => {
  return (
    <button
      className={`btn btn-primary ${className ?? ''}`}
      disabled={disabled}
      type={type}
      form={form}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
