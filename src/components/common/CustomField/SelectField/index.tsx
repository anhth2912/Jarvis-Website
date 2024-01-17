import Select from 'react-select'
import { ErrorMessage } from 'formik'

export const SelectField = (props: any) => {
  const { field, form, options, label, placeholder, disabled, isSearchable = false } = props
  const { name, value } = field
  const { errors, touched } = form
  const showError = errors[name] && touched[name]
  const selectedOption = options.find((option: any) => option.value === value)

  const handleSelectedOptionChange = (selectedOption: any) => {
    const selectedValue = selectedOption ? selectedOption.value : selectedOption

    const changeEvent = {
      target: {
        name: name,
        value: selectedValue,
      },
    }
    field.onChange(changeEvent)
  }

  return (
    <>
      {label ? (
        <label htmlFor="campaign-name" className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-gray-300">
          {label}
        </label>
      ) : null}

      <Select
        id={name}
        {...field}
        value={selectedOption ? selectedOption : null}
        onChange={handleSelectedOptionChange}
        placeholder={placeholder}
        isDisabled={disabled}
        options={options}
        isClearable={true}
        isSearchable={isSearchable}
        className={showError ? 'is-invalid' : ''}
      />

      <ErrorMessage name={name} component="div" className="px-4 py-3 text-red-700" />
    </>
  )
}
