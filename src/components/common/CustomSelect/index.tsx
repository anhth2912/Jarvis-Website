import Select from 'react-select'

type Props = {
  options: any
  value: any
  label?: string
  placeholder?: string
  className?: string
  isLoading?: boolean
  isDisabled?: boolean
  onChangeValue: (value: any) => void
}

export const CustomSelect: React.FC<Props> = ({
  options,
  value,
  label = '',
  placeholder = '',
  className = '',
  isLoading = false,
  isDisabled = false,
  onChangeValue,
}) => {
  const selectedOption = options.find((option: any) => option.value === value)

  const handleSelectedOptionChange = (selectedOption: any) => {
    const selectedValue = selectedOption ? selectedOption.value : selectedOption
    onChangeValue(selectedValue ?? null)
  }

  const customStyles = {
    input: (styles: any) => ({ ...styles, paddingTop: '7px', paddingBottom: '7px', fontSize: '14px' }),
  }

  return (
    <>
      {label ? (
        <label htmlFor="campaign-name" className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-gray-300">
          {label}
        </label>
      ) : null}

      <Select
        styles={customStyles}
        className={className}
        options={options}
        value={selectedOption}
        onChange={handleSelectedOptionChange}
        placeholder={placeholder}
        isDisabled={isLoading || isDisabled}
        isClearable={true}
      />
    </>
  )
}
