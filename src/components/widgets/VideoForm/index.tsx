import { FastField, Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Button } from '@components/common/Button'
import { Spinner } from '@components/common/Spinner'
import { InputField } from '@components/common/CustomField/InputField'
import { SelectField } from '@components/common/CustomField/SelectField'
import { VideoInput } from '@models/video'
import { VideoChannel } from '@models/videoChannel'
import { InputCheckboxField } from '@components/common/CustomField/InputCheckboxField'

type Props = {
  video: VideoInput
  videoChannels: VideoChannel[]
  isUpdateVideo: boolean
  isLoading: boolean
  handleSubmit: (values: VideoInput) => void
}

export const VideoForm: React.FC<Props> = (props) => {
  const { video, videoChannels, isLoading, isUpdateVideo, handleSubmit } = props

  const schema = Yup.object().shape({
    title: Yup.string().required('required'),
    url: Yup.string().url('it must be url').required('required'),
    videoChannelId: Yup.string().required('required'),
  })

  return (
    <>
      <Formik initialValues={video} validationSchema={schema} onSubmit={handleSubmit}>
        {(_) => {
          return (
            <Form>
              <FastField name="title" component={InputField} type="text" label="Title" />
              <FastField name="url" component={InputField} type="text" label="Youtube URL" />
              <FastField name="youtubeId" component={InputField} type="text" label="Youtube ID" />
              <FastField name="thumbnail" component={InputField} hasPreviewImage={true} type="text" label="Thumbnail" />
              <FastField name="picked" component={InputCheckboxField} label="Featured" />
              <FastField name="duration" component={InputField} type="text" label="Duration" />
              <FastField
                name="videoChannelId"
                component={SelectField}
                label="Channel"
                isSearchable={true}
                options={videoChannels.map((videoChannel) => ({
                  label: videoChannel.name,
                  value: videoChannel.id,
                }))}
              />
              {isUpdateVideo ? (
                <>
                  <FastField
                    name="shouldUpdateMetadata"
                    component={InputCheckboxField}
                    label="Should Update Metadata"
                  />
                  <FastField
                    name="shouldUpdateTranscript"
                    component={InputCheckboxField}
                    label="Should Update Transcript"
                  />
                </>
              ) : null}
              <Button
                className="mt-4"
                type="submit"
                label={isLoading ? <Spinner /> : isUpdateVideo ? 'Update' : 'Create'}
                disabled={isLoading}
              />
            </Form>
          )
        }}
      </Formik>
    </>
  )
}
