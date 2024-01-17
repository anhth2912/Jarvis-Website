import { useRef } from 'react'
import { FastField, Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useMutation } from '@tanstack/react-query'
import { InputFileImage } from '../InputFileImage'
import { Button } from '@components/common/Button'
import { Spinner } from '@components/common/Spinner'
import { InputField } from '@components/common/CustomField/InputField'
import { GameWordInput } from '@models/gameWord'
import { useChangeImage } from '@hooks/useChangeImage'
import { createUploadImageRequestForVocab } from '@schema/mutation/createUploadImageRequestForVocab'

type Props = {
  gameWord: GameWordInput
  isUpdateGameWord: boolean
  isLoading: boolean
  handleSubmit: (values: GameWordInput) => void
}

export const GameWordForm: React.FC<Props> = (props) => {
  const { gameWord, isLoading, isUpdateGameWord, handleSubmit } = props
  const refInputFile = useRef<HTMLInputElement>(null)
  const { mutate, isLoading: isCreateUploadImageRequestLoading } = useMutation({
    mutationFn: (filename: string) => createUploadImageRequestForVocab(filename),
  })
  const { image, setImage, onChangeImage } = useChangeImage(refInputFile, mutate)

  const schema = Yup.object().shape({
    word: Yup.string().required('required'),
  })

  return (
    <>
      <Formik
        initialValues={gameWord}
        validationSchema={schema}
        onSubmit={(values: GameWordInput) => {
          handleSubmit(values)
          if (refInputFile.current) {
            refInputFile.current.value = ''
          }
          setImage('')
        }}
      >
        {({ setFieldValue }) => {
          return (
            <Form>
              <FastField name="word" component={InputField} type="text" label="Name" />
              <InputFileImage
                refInputFile={refInputFile}
                image={image}
                imagePrevious={gameWord.imagePath}
                field="imagePath"
                hasPrevious={isUpdateGameWord}
                isLoading={isCreateUploadImageRequestLoading}
                setFieldValue={setFieldValue}
                onChangeImage={onChangeImage}
              />
              <Button
                className="mt-4"
                type="submit"
                label={isLoading ? <Spinner /> : isUpdateGameWord ? 'Update' : 'Create'}
                disabled={isLoading || isCreateUploadImageRequestLoading}
              />
            </Form>
          )
        }}
      </Formik>
    </>
  )
}
