import { FastField, Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Button } from '@components/common/Button'
import { Spinner } from '@components/common/Spinner'
import { InputField } from '@components/common/CustomField/InputField'
import { VideoChannelInput } from '@models/videoChannel'
import { InputCheckboxField } from '@components/common/CustomField/InputCheckboxField'

type Props = {
  videoChannel: VideoChannelInput
  isUpdateVideoChannel: boolean
  isLoading: boolean
  handleSubmit: (values: VideoChannelInput) => void
}

export const VideoChannelForm: React.FC<Props> = (props) => {
  const { videoChannel, isLoading, isUpdateVideoChannel, handleSubmit } = props

  const schema = Yup.object().shape({
    name: Yup.string().required('required'),
    youtubeId: Yup.string().required('required'),
  })

  return (
    <>
      <Formik initialValues={videoChannel} validationSchema={schema} onSubmit={handleSubmit}>
        {(_) => {
          return (
            <Form>
              <FastField name="name" component={InputField} type="text" label="Name" />
              <FastField name="youtubeId" component={InputField} type="text" label="Youtube ID" />
              <FastField name="youtubeUrl" component={InputField} type="text" label="Youtube URL" />
              <FastField name="thumbnail" component={InputField} hasPreviewImage={true} type="text" label="Thumbnail" />
              <FastField name="color" component={InputField} type="text" label="Color" />
              {isUpdateVideoChannel ? (
                <>
                  <FastField
                    name="shouldUpdateMetadata"
                    component={InputCheckboxField}
                    label="Should Update Metadata"
                  />
                </>
              ) : null}
              <Button
                className="mt-4"
                type="submit"
                label={isLoading ? <Spinner /> : isUpdateVideoChannel ? 'Update' : 'Create'}
                disabled={isLoading}
              />
            </Form>
          )
        }}
      </Formik>
    </>
  )
}
