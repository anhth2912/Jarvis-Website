import Image from 'next/image'
import { ErrorMessage } from 'formik'
import { isValidHttpUrl } from '@utils/validate'
import { getImageCDNUrl } from '@utils/image'

export const InputField = (props: any) => {
  const {
    field,
    form,
    type,
    label,
    placeholder,
    disabled,
    hasPreviewImage = false,
    isAudio = false,
    isUseCDNUrl = false,
  } = props
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

      <input
        id={name}
        {...field}
        value={value ?? ''}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        // eslint-disable-next-line max-len
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
        p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
        ${disabled ? 'cursor-not-allowed bg-[#f1f5f9]' : ''}`}
      />
      <div className={showError ? 'is-invalid' : ''}></div>

      <ErrorMessage name={name} component="div" className="text-sm px-2 py-2 text-red-700" />

      {!showError &&
      field.value &&
      hasPreviewImage &&
      ((!isUseCDNUrl && isValidHttpUrl(field.value as string)) || isUseCDNUrl) ? (
        <div className="mt-4">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Preview Image</label>
          <Image
            src={isUseCDNUrl ? getImageCDNUrl(field.value as string) : field.value}
            alt="Preview Image"
            width={200}
            height={160}
            style={{ height: '100%', width: '300px' }}
          />
        </div>
      ) : null}
      {!showError && field.value && isAudio && isValidHttpUrl(field.value as string) ? (
        <div className="mt-4">
          <label htmlFor="campaign-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Audio Preview
          </label>

          <div>
            <audio controls src={field.value}></audio>
          </div>
        </div>
      ) : null}
    </>
  )
}
