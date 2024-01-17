import { FastField, Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Button } from '@components/common/Button'
import { Spinner } from '@components/common/Spinner'
import { InputField } from '@components/common/CustomField/InputField'
import { discountTypeOptions, SubscriptionPlanInput } from '@models/subscriptionPlan'
import { SelectField } from '@components/common/CustomField/SelectField'
import { InputCheckboxField } from '@components/common/CustomField/InputCheckboxField'

type Props = {
  subscriptionPlan: SubscriptionPlanInput
  isUpdateSubscriptionPlan?: boolean
  isLoading: boolean
  handleSubmit: (values: SubscriptionPlanInput) => void
}

export const SubscriptionPlanForm: React.FC<Props> = (props) => {
  const { subscriptionPlan, isLoading, isUpdateSubscriptionPlan = false, handleSubmit } = props

  const schema = Yup.object().shape({
    name: Yup.string().required('required'),
    sku: Yup.string().required('required'),
    price: Yup.number().required('required'),
    amountOfDays: Yup.number().required('required'),
    discountType: Yup.string().required('required'),
  })

  return (
    <>
      <Formik initialValues={subscriptionPlan} validationSchema={schema} onSubmit={handleSubmit}>
        {(_) => {
          return (
            <Form>
              <FastField name="name" component={InputField} type="text" label="Name" />
              <FastField name="price" component={InputField} type="number" label="Price ($)" />
              <FastField name="sku" component={InputField} type="text" label="SKU" />
              <FastField name="amountOfDays" component={InputField} type="number" label="Amount Of Days" />
              <FastField name="description" component={InputField} type="text" label="Description" />
              <FastField
                name="discountType"
                component={SelectField}
                label="Discount Type"
                isSearchable={true}
                options={discountTypeOptions}
              />
              <FastField name="discountValue" component={InputField} type="number" label="Discount Value" />
              <FastField name="isSubscription" component={InputCheckboxField} label="Subscription" />
              <Button
                className="mt-4"
                type="submit"
                label={isLoading ? <Spinner /> : isUpdateSubscriptionPlan ? 'Update' : 'Create'}
                disabled={isLoading}
              />
            </Form>
          )
        }}
      </Formik>
    </>
  )
}
