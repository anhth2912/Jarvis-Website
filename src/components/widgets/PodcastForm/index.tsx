import { useRef } from 'react'
import { FastField, Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useMutation } from '@tanstack/react-query'
import { InputFileImage } from '../InputFileImage'
import { Button } from '@components/common/Button'
import { Spinner } from '@components/common/Spinner'
import { InputField } from '@components/common/CustomField/InputField'
import { SelectField } from '@components/common/CustomField/SelectField'
import { InputAreaField } from '@components/common/CustomField/InputAreaField'
import { PodcastCategory } from '@models/podcastCategory'
import { PodcastInput } from '@models/podcast'
import { useChangeImage } from '@hooks/useChangeImage'
import { createUploadImageRequestForPodcast } from '@schema/mutation/createUploadImageRequestForPodcast'

type Props = {
  podcast: PodcastInput
  podcastCategories: PodcastCategory[]
  isCreatePodcast?: boolean
  isLoading: boolean
  handleSubmit: (values: PodcastInput) => void
}

export const PodcastForm: React.FC<Props> = (props) => {
  const { podcast, podcastCategories, isLoading, isCreatePodcast = false, handleSubmit } = props
  const refInputFile = useRef<HTMLInputElement>(null)
  const { mutate, isLoading: isCreateUploadImageRequestLoading } = useMutation({
    mutationFn: (filename: string) => createUploadImageRequestForPodcast(filename),
  })
  const { image, setImage, onChangeImage } = useChangeImage(refInputFile, mutate)

  const schema = Yup.object().shape({
    title: Yup.string().required('required'),
    author: Yup.string().required('required'),
    podcastCategoryId: Yup.string().required('required'),
  })

  return (
    <>
      <Formik
        initialValues={podcast}
        validationSchema={schema}
        onSubmit={(value: PodcastInput) => {
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
              <FastField name="author" component={InputField} type="text" label="Author" />
              <FastField name="source" component={InputField} type="text" label="Source" />
              <FastField name="content" component={InputAreaField} label="Content" />
              <InputFileImage
                refInputFile={refInputFile}
                image={image}
                imagePrevious={podcast.thumbnail}
                field="thumbnail"
                hasPrevious={!isCreatePodcast}
                isLoading={isCreateUploadImageRequestLoading}
                setFieldValue={setFieldValue}
                onChangeImage={onChangeImage}
              />
              <FastField name="audio" component={InputField} type="text" label="Audio URL" isAudio={true} />
              <FastField name="duration" component={InputField} type="text" label="Duration" />
              {isCreatePodcast ? (
                <FastField name="transcriptData" component={InputAreaField} label="Transcript" />
              ) : null}
              <FastField
                name="podcastCategoryId"
                component={SelectField}
                label="Category"
                isSearchable={true}
                options={podcastCategories.map((podcastCategory) => ({
                  label: podcastCategory.title,
                  value: podcastCategory.id,
                }))}
              />
              <Button
                className="mt-4"
                type="submit"
                label={isLoading ? <Spinner /> : isCreatePodcast ? 'Create' : 'Edit'}
                disabled={isLoading}
              />
            </Form>
          )
        }}
      </Formik>
    </>
  )
}
