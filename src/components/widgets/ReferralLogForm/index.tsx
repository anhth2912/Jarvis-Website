import { FastField, Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Button } from '@components/common/Button'
import { Spinner } from '@components/common/Spinner'
import { InputField } from '@components/common/CustomField/InputField'
import { SelectField } from '@components/common/CustomField/SelectField'
import { ReferralLogInput, statusOptions } from '@models/referral'

type Props = {
  referralLog: ReferralLogInput
  isLoading: boolean
  handleSubmit: (values: ReferralLogInput) => void
}

export const ReferralLogForm: React.FC<Props> = (props) => {
  const { referralLog, isLoading = false, handleSubmit } = props

  const schema = Yup.object().shape({
    status: Yup.string().required('required'),
  })

  return (
    <>
      <Formik initialValues={referralLog} validationSchema={schema} onSubmit={handleSubmit}>
        {(_) => {
          return (
            <Form>
              <FastField name="userId" component={InputField} type="text" label="User ID" disabled />
              <FastField name="referredBy" component={InputField} type="text" label="Referred By" disabled />
              <FastField name="referralCodeId" component={InputField} type="text" label="Referral Code Id" disabled />
              <FastField name="currentConfigTokenAmount" component={InputField} label="Token Amount" disabled />
              <FastField
                name="status"
                component={SelectField}
                label="Status"
                isSearchable={true}
                options={statusOptions}
              />
              <Button className="mt-4" type="submit" label={isLoading ? <Spinner /> : 'Edit'} disabled={isLoading} />
            </Form>
          )
        }}
      </Formik>
    </>
  )
}
