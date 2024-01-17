import React, { useRef, useState } from 'react'
import { FastField, Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useMutation } from '@tanstack/react-query'
import { InputFileImage } from '../InputFileImage'
import { Button } from '@components/common/Button'
import { Spinner } from '@components/common/Spinner'
import { InputField } from '@components/common/CustomField/InputField'
import { VocabWordDetail } from '@models/VocabCollectionWord'
import { useChangeImage } from '@hooks/useChangeImage'
import { createUploadImageRequestForVocab } from '@schema/mutation/createUploadImageRequestForVocab'
import { NOTIFICATION_TYPE, notify } from '@utils/notify'

type Props = {
  vocabWord: VocabWordDetail
  wordsHashes: Record<string, number>
  isLoading: boolean
  isUpdate?: boolean
  handleSubmit: (values: VocabWordDetail) => void
}

export const VocabWordForm: React.FC<Props> = (props) => {
  const { vocabWord, wordsHashes, isLoading, isUpdate = false, handleSubmit } = props
  const [isWordDuplicate, setIsWordDuplicate] = useState<boolean>(false)
  const refInputFile = useRef<HTMLInputElement>(null)
  const { mutate, isLoading: isCreateUploadImageRequestLoading } = useMutation({
    mutationFn: (filename: string) => createUploadImageRequestForVocab(filename),
    onError: (error: any) => {
      if (refInputFile.current) {
        refInputFile.current.value = ''
      }
      notify(NOTIFICATION_TYPE.ERROR, error.message as string)
    },
  })

  const { image, onChangeImage } = useChangeImage(refInputFile, mutate)

  const schema = Yup.object().shape({
    word: Yup.string().required('required'),
  })

  return (
    <>
      <Formik initialValues={vocabWord} validationSchema={schema} onSubmit={handleSubmit}>
        {({ setFieldValue, values }) => {
          return (
            <Form>
              {/* <FastField name="word" component={InputField} type="text" label="Word" /> */}
              <label className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-gray-300">Word</label>
              <input
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
              p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
              disabled:cursor-not-allowed disabled:bg-[#f1f5f9]`}
                name="word"
                value={values.word}
                onChange={(e) => {
                  if (wordsHashes[e.target.value]) {
                    setIsWordDuplicate(true)
                  } else {
                    isWordDuplicate ? setIsWordDuplicate(false) : null
                  }
                  void setFieldValue('word', e.target.value)
                }}
              />
              {isWordDuplicate ? <div className="text-sm px-2 py-2 text-[#F29727]">Word already existed</div> : null}
              <FastField name="usPhonetics" component={InputField} type="text" label="UsPhonetics" />
              <FastField name="ukPhonetics" component={InputField} type="text" label="UkPhonetics" />
              <FastField name="usAudio" component={InputField} type="text" label="UsAudio" />
              <FastField name="ukAudio" component={InputField} type="text" label="UkAudio" />
              <FastField name="note" component={InputField} type="text" label="Note" />
              <FastField name="vietNote" component={InputField} type="text" label="VietNote" />
              <FastField name="example" component={InputField} type="text" label="Example" />
              <FastField name="vietExample" component={InputField} type="text" label="VietExample" />
              <InputFileImage
                keyword={vocabWord.word}
                refInputFile={refInputFile}
                image={image}
                imagePrevious={vocabWord.image}
                field="image"
                hasPrevious={isUpdate}
                isLoading={isCreateUploadImageRequestLoading}
                setFieldValue={setFieldValue}
                onChangeImage={onChangeImage}
              />
              <Button
                className="mt-4"
                type="submit"
                label={isLoading ? <Spinner /> : isUpdate ? 'Update' : 'Create'}
                disabled={isLoading || isWordDuplicate || !values['word']}
              />
            </Form>
          )
        }}
      </Formik>
    </>
  )
}
