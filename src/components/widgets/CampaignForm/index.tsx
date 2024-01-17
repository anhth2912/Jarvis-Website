import { FastField, Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Button } from '@components/common/Button'
import { Spinner } from '@components/common/Spinner'
import { InputField } from '@components/common/CustomField/InputField'
import { CampaignInput } from '@models/campaign'

type Props = {
  campaign: CampaignInput
  isUpdateCampaign: boolean
  isLoading: boolean
  handleSubmit: (values: CampaignInput) => void
}

export const CampaignForm: React.FC<Props> = (props) => {
  const { campaign, isLoading, isUpdateCampaign, handleSubmit } = props

  const schema = Yup.object().shape({
    name: Yup.string().required('required'),
  })

  return (
    <>
      <Formik initialValues={campaign} validationSchema={schema} onSubmit={handleSubmit}>
        {(_) => {
          return (
            <Form>
              <FastField name="name" component={InputField} type="text" label="Name" />
              <FastField name="description" component={InputField} type="text" label="Description" />
              <Button
                className="mt-4"
                type="submit"
                label={isLoading ? <Spinner /> : isUpdateCampaign ? 'Update' : 'Create'}
                disabled={isLoading}
              />
            </Form>
          )
        }}
      </Formik>
    </>
  )
}
