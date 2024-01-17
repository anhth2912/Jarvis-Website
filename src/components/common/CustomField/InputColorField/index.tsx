import { ErrorMessage } from 'formik'

export const InputColorField = (props: any) => {
  const { field, form, label, disabled } = props
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

      <div className="flex">
        <input
          id={name}
          {...field}
          value={value ?? ''}
          type="color"
          disabled={disabled}
          // eslint-disable-next-line max-len
          className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block 'w-auto'
         p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 `}
        />

        {!showError && !!field.value ? (
          <>
            <span className="ml-4 mt-1 badge h-[100%] cursor-auto w-[80px]">{field.value}</span>
            <span
              className={`ml-4 w-[100px] h-[30px] border rounded-3xl`}
              style={{ backgroundColor: field.value }}
            ></span>
          </>
        ) : null}
      </div>
      <div className={showError ? 'is-invalid' : ''}></div>

      <ErrorMessage name={name} component="div" className="text-sm px-2 py-2 text-red-700" />
    </>
  )
}
