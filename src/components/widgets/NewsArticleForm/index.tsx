import { useRef } from 'react'
import { FastField, Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useMutation } from '@tanstack/react-query'
import { InputFileImage } from '../InputFileImage'
import { Button } from '@components/common/Button'
import { Spinner } from '@components/common/Spinner'
import { InputField } from '@components/common/CustomField/InputField'
import { InputAreaField } from '@components/common/CustomField/InputAreaField'
import { SelectField } from '@components/common/CustomField/SelectField'
import { Topic } from '@models/topic'
import { NewsSource } from '@models/newsSource'
import { NewsArticleInput } from '@models/newsArticle'
import { useChangeImage } from '@hooks/useChangeImage'
import { createUploadImageRequestForNews } from '@schema/mutation/createUploadImageRequestForNews'

type Props = {
  newsArticle: NewsArticleInput
  isUpdateNewsArticle: boolean
  isLoading: boolean
  newsSources?: NewsSource[]
  topics?: Topic[]
  handleSubmit: (values: NewsArticleInput) => void
}

export const NewsArticleForm: React.FC<Props> = (props) => {
  const { newsArticle, isLoading, newsSources = [], topics = [], isUpdateNewsArticle, handleSubmit } = props
  const refInputFile = useRef<HTMLInputElement>(null)
  const { mutate, isLoading: isCreateUploadImageRequestLoading } = useMutation({
    mutationFn: (filename: string) => createUploadImageRequestForNews(filename),
  })
  const { image: featuredImageUrl, setImage, onChangeImage } = useChangeImage(refInputFile, mutate)

  const schema = Yup.object().shape({
    title: Yup.string().required('required'),
    url: Yup.string().url().required('Please enter url'),
    slug: Yup.string().required('required'),
    content: Yup.string().required('required'),
    featuredImageUrl: Yup.string().required('required'),
    sourceId: Yup.string().required('required'),
    topicId: Yup.string().required('required'),
  })

  return (
    <>
      <Formik
        initialValues={newsArticle}
        validationSchema={schema}
        onSubmit={(value: NewsArticleInput) => {
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
              <FastField name="slug" component={InputField} type="text" label="Slug" />
              <FastField name="url" component={InputField} type="text" label="URL" />
              <FastField
                name="topicId"
                component={SelectField}
                type="text"
                label="Topic"
                options={topics.map((topic) => ({
                  label: topic.name,
                  value: topic.id,
                }))}
              />
              <FastField
                name="sourceId"
                component={SelectField}
                type="text"
                label="Source"
                options={newsSources.map((newsSource) => ({
                  label: newsSource.name,
                  value: newsSource.id,
                }))}
              />
              <InputFileImage
                refInputFile={refInputFile}
                image={featuredImageUrl}
                imagePrevious={newsArticle.featuredImageUrl}
                field="featuredImageUrl"
                hasPrevious={isUpdateNewsArticle}
                isLoading={isCreateUploadImageRequestLoading}
                setFieldValue={setFieldValue}
                onChangeImage={onChangeImage}
              />

              <FastField name="audioUrl" component={InputField} type="text" label="Audio URL" />
              <FastField name="content" component={InputAreaField} label="Content" />
              <Button
                className="mt-4"
                type="submit"
                label={isLoading ? <Spinner /> : isUpdateNewsArticle ? 'Update' : 'Create'}
                disabled={isLoading}
              />
            </Form>
          )
        }}
      </Formik>
    </>
  )
}
