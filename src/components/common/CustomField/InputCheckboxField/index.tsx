import { ErrorMessage } from 'formik'

export const InputCheckboxField = (props: any) => {
  const { field, form, label, disabled } = props
  const { name, value } = field
  const { errors, touched } = form
  const showError = errors[name] && touched[name]

  return (
    <>
      {label ? (
        <label htmlFor={name} className="inline-block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-gray-300">
          {label}
        </label>
      ) : null}

      <div className="">
        <input
          id={name}
          type="checkbox"
          {...field}
          checked={value}
          disabled={disabled}
          className="checkbox checkbox-primary"
        />
      </div>
      <div className={showError ? 'is-invalid' : ''}></div>

      <ErrorMessage name={name} component="div" className="text-sm px-2 py-2 text-red-700" />
    </>
  )
}
