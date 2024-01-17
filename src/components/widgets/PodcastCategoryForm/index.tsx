import { useRef } from 'react'
import { FastField, Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useMutation } from '@tanstack/react-query'
import { InputFileImage } from '../InputFileImage'
import { Button } from '@components/common/Button'
import { InputField } from '@components/common/CustomField/InputField'
import { Spinner } from '@components/common/Spinner'
import { PodcastCategoryInput } from '@models/podcastCategory'
import { useChangeImage } from '@hooks/useChangeImage'
import { createUploadImageRequestForPodcast } from '@schema/mutation/createUploadImageRequestForPodcast'

type Props = {
  podcastCategory: PodcastCategoryInput
  isCreatePodcastCategory?: boolean
  isLoading: boolean
  handleSubmit: (values: PodcastCategoryInput) => void
}

export const PodcastCategoryForm: React.FC<Props> = (props) => {
  const { podcastCategory, isLoading, isCreatePodcastCategory = false, handleSubmit } = props
  const refInputFile = useRef<HTMLInputElement>(null)
  const { mutate, isLoading: isCreateUploadImageRequestLoading } = useMutation({
    mutationFn: (filename: string) => createUploadImageRequestForPodcast(filename),
  })
  const { image, setImage, onChangeImage } = useChangeImage(refInputFile, mutate)

  const schema = Yup.object().shape({
    title: Yup.string().required('required'),
  })

  return (
    <>
      <Formik
        initialValues={podcastCategory}
        validationSchema={schema}
        onSubmit={(value: PodcastCategoryInput) => {
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
              <FastField name="title" component={InputField} type="text" label="Title" />
              <InputFileImage
                refInputFile={refInputFile}
                image={image}
                imagePrevious={podcastCategory.thumbnail}
                field="thumbnail"
                hasPrevious={!isCreatePodcastCategory}
                isLoading={isCreateUploadImageRequestLoading}
                setFieldValue={setFieldValue}
                onChangeImage={onChangeImage}
              />
              <Button
                className="mt-4"
                type="submit"
                label={isLoading ? <Spinner /> : isCreatePodcastCategory ? 'Create' : 'Edit'}
                disabled={isLoading}
              />
            </Form>
          )
        }}
      </Formik>
    </>
  )
}
