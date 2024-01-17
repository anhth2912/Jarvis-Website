import { RefObject } from 'react'
import Image from 'next/image'
import { getImageCDNUrl } from '@utils/image'
import { isValidHttpUrl } from '@utils/validate'

type SetFieldValue = (field: string, value: any, shouldValidate?: boolean | undefined) => void

type Props = {
  keyword?: string
  refInputFile: RefObject<HTMLInputElement>
  field: string
  image: string
  hasPrevious: boolean
  imagePrevious?: string
  isLoading: boolean
  setFieldValue: SetFieldValue
  onChangeImage: (e: any, field: string, setFieldValue: SetFieldValue) => void
}

export const InputFileImage: React.FC<Props> = ({
  keyword,
  refInputFile,
  field,
  image,
  hasPrevious,
  imagePrevious,
  isLoading,
  setFieldValue,
  onChangeImage,
}) => {
  return (
    <>
      <label className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="file_input">
        Upload {field}
      </label>
      <input
        id={keyword}
        name={field}
        type="file"
        ref={refInputFile}
        disabled={isLoading}
        className="file-input file-input-bordered w-full max-w-xs !text-sm"
        onChange={(e) => onChangeImage(e, field, setFieldValue)}
      />
      {image ? (
        <div className="mt-4">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Preview {field} upload
          </label>
          <Image src={image} alt="Preview Image" width={200} height={160} style={{ height: '100%', width: '300px' }} />
        </div>
      ) : null}
      {hasPrevious && imagePrevious ? (
        <div className="mt-4">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Previous {field}</label>
          <Image
            src={isValidHttpUrl(imagePrevious) ? imagePrevious : getImageCDNUrl(imagePrevious)}
            alt="Previous Image"
            width={200}
            height={160}
            style={{ height: '100%', width: '300px' }}
          />
        </div>
      ) : null}
    </>
  )
}
