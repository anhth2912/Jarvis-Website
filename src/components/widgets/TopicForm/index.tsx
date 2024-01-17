import { useRef } from 'react'
import { FastField, Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useMutation } from '@tanstack/react-query'
import { InputFileImage } from '../InputFileImage'
import { Button } from '@components/common/Button'
import { Spinner } from '@components/common/Spinner'
import { InputField } from '@components/common/CustomField/InputField'
import { TopicInput } from '@models/topic'
import { useChangeImage } from '@hooks/useChangeImage'
import { createUploadImageRequestForNews } from '@schema/mutation/createUploadImageRequestForNews'

type Props = {
  topic: TopicInput
  isUpdateTopic: boolean
  isLoading: boolean
  handleSubmit: (values: TopicInput) => void
}

export const TopicForm: React.FC<Props> = (props) => {
  const { topic, isLoading, isUpdateTopic, handleSubmit } = props
  const refInputFile = useRef<HTMLInputElement>(null)
  const { mutate, isLoading: isCreateUploadImageRequestLoading } = useMutation({
    mutationFn: (filename: string) => createUploadImageRequestForNews(filename),
  })
  const { image, setImage, onChangeImage } = useChangeImage(refInputFile, mutate)

  const schema = Yup.object().shape({
    name: Yup.string().required('required'),
    slug: Yup.string().required('required'),
  })

  return (
    <>
      <Formik
        initialValues={topic}
        validationSchema={schema}
        onSubmit={(value: TopicInput) => {
          handleSubmit(value)
          if (refInputFile.current) {
            refInputFile.current.value = ''
          }
          setImage('')
        }}
      >
        {({ setFieldValue }) => {
          return (
            <Form>
              <FastField name="name" component={InputField} type="text" label="Name" />
              <FastField name="slug" component={InputField} type="text" label="Slug" />
              <InputFileImage
                refInputFile={refInputFile}
                image={image}
                imagePrevious={topic.thumbnail}
                field="thumbnail"
                hasPrevious={isUpdateTopic}
                isLoading={isCreateUploadImageRequestLoading}
                setFieldValue={setFieldValue}
                onChangeImage={onChangeImage}
              />
              <Button
                className="mt-4"
                type="submit"
                label={isLoading ? <Spinner /> : isUpdateTopic ? 'Update' : 'Create'}
                disabled={isLoading || isCreateUploadImageRequestLoading}
              />
            </Form>
          )
        }}
      </Formik>
    </>
  )
}
