import React, { ChangeEvent } from 'react'

interface Props {
  isShowPassword?: boolean
  isNumber?: boolean
  isInputForPassword?: boolean
  isError?: boolean
  disabled?: boolean
  name: string
  value: string | number | string[] | undefined
  placeholder: string
  iconLeft?: JSX.Element
  iconRight?: JSX.Element
  wrapperClassName?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  changeStatusPassword?: () => void
}

export const CustomInput = ({
  isShowPassword = false,
  isNumber = false,
  isInputForPassword = false,
  isError = false,
  disabled = false,
  name,
  value,
  placeholder,
  iconLeft,
  iconRight,
  wrapperClassName = '',
  onChange,
  changeStatusPassword,
}: Props) => {
  return (
    <div className={`relative w-full ${wrapperClassName}`}>
      {iconRight && (
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          {iconRight}
          <span className={`pl-2 text-[${disabled ? '#C9CDD3' : isError ? '#E92215' : '#88909F'}]`}>|</span>
        </div>
      )}
      <input
        className={`block w-full p-3 bg-white border border-[#B3B8C2] rounded-md
        text-sm shadow-sm placeholder-slate-400
        focus:outline-none font-normal text-[12px] text-[#606977] ${
          isError ? 'focus:border-[#FF7A72] bg-[#FFF5F4] text-[#E92215]' : 'focus:border-[#FB8F26]'
        }
        ${iconLeft ? 'pr-12' : ''}
        ${iconRight ? 'pl-14' : ''} `}
        disabled={disabled}
        name={name}
        placeholder={placeholder}
        type={isNumber ? 'number' : isShowPassword ? 'password' : 'text'}
        value={value}
        onChange={onChange}
      />
      {iconLeft && (
        <div
          className={`absolute inset-y-0 right-0 flex items-center pr-3
        ${!isInputForPassword ? 'pointer-events-none' : 'cursor-pointer'}`}
          onClick={changeStatusPassword}
        >
          {iconLeft}
        </div>
      )}
    </div>
  )
}
