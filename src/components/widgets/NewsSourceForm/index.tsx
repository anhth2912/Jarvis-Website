import { useRef } from 'react'
import { FastField, Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useMutation } from '@tanstack/react-query'
import { InputFileImage } from '../InputFileImage'
import { Button } from '@components/common/Button'
import { Spinner } from '@components/common/Spinner'
import { InputField } from '@components/common/CustomField/InputField'
import { InputColorField } from '@components/common/CustomField/InputColorField'
import { NewsSourceInput } from '@models/newsSource'
import { useChangeImage } from '@hooks/useChangeImage'
import { createUploadImageRequestForNews } from '@schema/mutation/createUploadImageRequestForNews'

type Props = {
  newsSource: NewsSourceInput
  isUpdateNewsSource: boolean
  isLoading: boolean
  handleSubmit: (values: NewsSourceInput) => void
}

export const NewsSourceForm: React.FC<Props> = (props) => {
  const { newsSource, isLoading, isUpdateNewsSource, handleSubmit } = props
  const refInputFile = useRef<HTMLInputElement>(null)
  const { mutate, isLoading: isCreateUploadImageRequestLoading } = useMutation({
    mutationFn: (filename: string) => createUploadImageRequestForNews(filename),
  })
  const { image, setImage, onChangeImage } = useChangeImage(refInputFile, mutate)

  const schema = Yup.object().shape({
    name: Yup.string().required('required'),
    slug: Yup.string().required('required'),
    url: Yup.string().required('required').url('must be url'),
  })

  return (
    <>
      <Formik
        initialValues={newsSource}
        validationSchema={schema}
        onSubmit={(values: NewsSourceInput) => {
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
              <FastField name="name" component={InputField} type="text" label="Name" />
              <FastField name="slug" component={InputField} type="text" label="Slug" />
              <FastField name="url" component={InputField} type="text" label="URL" />
              <FastField name="color" component={InputColorField} label="Color" />
              <InputFileImage
                refInputFile={refInputFile}
                image={image}
                imagePrevious={newsSource.thumbnail}
                field="thumbnail"
                hasPrevious={isUpdateNewsSource}
                isLoading={isCreateUploadImageRequestLoading}
                setFieldValue={setFieldValue}
                onChangeImage={onChangeImage}
              />
              <Button
                className="mt-4"
                type="submit"
                label={isLoading ? <Spinner /> : isUpdateNewsSource ? 'Update' : 'Create'}
                disabled={isLoading || isCreateUploadImageRequestLoading}
              />
            </Form>
          )
        }}
      </Formik>
    </>
  )
}
