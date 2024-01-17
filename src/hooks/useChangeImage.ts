import { RefObject, useState } from 'react'
import { UseMutateFunction } from '@tanstack/react-query'
import { BUCKET, UploadImageRequestPayload } from '@models/common'
import { convertImageToBlob } from '@utils/image'
import { NOTIFICATION_TYPE, notify } from '@utils/notify'

export const useChangeImage = (
  refInputFile: RefObject<HTMLInputElement>,
  mutate: UseMutateFunction<UploadImageRequestPayload | undefined, any, string, unknown>,
) => {
  const [image, setImage] = useState<string>('')
  const [imageUrl, setImageUrl] = useState<string>('')

  function onChangeImage(
    e: any,
    field?: string,
    setFieldValue?: (field: string, value: any, shouldValidate?: boolean | undefined) => void,
  ) {
    e.preventDefault()
    let files: FileList | null = null
    if (e.dataTransfer) {
      files = e.dataTransfer.files
    } else if (e.target) {
      const target = e.target as HTMLInputElement
      files = target.files
    }

    if (files && !files[0].type.includes('image')) {
      if (refInputFile.current) {
        setImage('')
        refInputFile.current.value = ''
      }
      notify(NOTIFICATION_TYPE.ERROR, 'File must be image!')
      return
    }

    const reader = new FileReader()
    reader.onload = () => {
      const imageSrc = reader.result as string
      if (files && imageSrc) {
        const imageFilename = files[0].name
        mutate(imageFilename, {
          onSuccess: (data?: UploadImageRequestPayload) => {
            if (!data) {
              if (refInputFile.current) {
                setImage('')
                refInputFile.current.value = ''
              }
              notify(NOTIFICATION_TYPE.ERROR, 'Error happened when create upload file!')
              return
            }
            const url = data.url
            const generateFileName = data.generatedFilename
            if (url && generateFileName) {
              const blob = convertImageToBlob(imageSrc)
              const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'image/png' },
                body: blob,
              }
              void fetch(url, requestOptions).then((response) => {
                if (response.ok) {
                  setFieldValue && field && setFieldValue(field, `/${BUCKET.TMP}/${generateFileName}`)
                  setImageUrl(`/${BUCKET.TMP}/${generateFileName}`)
                  setImage(imageSrc)
                } else {
                  if (refInputFile.current) {
                    setImage('')
                    refInputFile.current.value = ''
                  }
                  notify(NOTIFICATION_TYPE.ERROR, 'Error happened when upload file!')
                }
              })
            } else {
              if (refInputFile.current) {
                setImage('')
                refInputFile.current.value = ''
              }
              notify(NOTIFICATION_TYPE.ERROR, 'Something wrong happening!')
            }
          },
          onError: (error) => {
            if (refInputFile.current) {
              setImage('')
              refInputFile.current.value = ''
            }
            notify(NOTIFICATION_TYPE.ERROR, error.message as string)
          },
        })
      }
    }
    if (files) {
      reader.readAsDataURL(files[0])
    }
  }

  return { image, imageUrl, setImage, onChangeImage }
}
