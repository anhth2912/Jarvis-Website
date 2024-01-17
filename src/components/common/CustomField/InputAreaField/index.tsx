import { ErrorMessage } from 'formik'

export const InputAreaField = (props: any) => {
  const { field, form, type, label, placeholder, disabled } = props
  const { name, value } = field
  const { errors, touched } = form
  const showError = errors[name] && touched[name]

  return (
    <>
      {label ? (
        <label htmlFor={name} className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-gray-300">
          {label}
        </label>
      ) : null}

      <textarea
        rows="4"
        id={name}
        {...field}
        value={value ?? ''}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        // eslint-disable-next-line max-len
        className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 `}
      />
      <div className={showError ? 'is-invalid' : ''}></div>

      <ErrorMessage name={name} component="div" className="text-sm px-2 py-2 text-red-700" />
    </>
  )
}
