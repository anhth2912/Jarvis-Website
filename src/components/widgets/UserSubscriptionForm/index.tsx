import { FastField, Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Button } from '@components/common/Button'
import { Spinner } from '@components/common/Spinner'
import { InputField } from '@components/common/CustomField/InputField'
import { UserSubscriptionInput } from '@models/user'
import { DiscountType, discountTypeLabel, SubscriptionPlan } from '@models/subscriptionPlan'
import { SelectField } from '@components/common/CustomField/SelectField'
import { DetailAttribute } from '../DetailAttribute'

type Props = {
  userSubscription: UserSubscriptionInput
  subscriptionPlans: SubscriptionPlan[]
  isLoading: boolean
  handleSubmit: (values: UserSubscriptionInput) => void
}

export const UserSubscriptionForm: React.FC<Props> = (props) => {
  const { userSubscription, isLoading, subscriptionPlans, handleSubmit } = props

  const schema = Yup.object().shape({
    userId: Yup.string().required('required'),
    subscriptionPlanId: Yup.string().required('required'),
  })

  const subscriptionPlansSelectInputOption = subscriptionPlans.map((subscriptionPlan) => ({
    label: subscriptionPlan.name,
    value: subscriptionPlan.id,
  }))

  const preViewSubscriptionPlan = (subscriptionPlanId: string) => {
    const subscriptionPlan = subscriptionPlans.find((subscriptionPlan) => subscriptionPlan.id === subscriptionPlanId)

    if (!subscriptionPlan) {
      return null
    }

    return (
      <div className="mt-8">
        <DetailAttribute title="Name" value={subscriptionPlan.name} />
        <DetailAttribute
          title="Discount type"
          value={
            <div>
              {(
                <div className="badge badge-primary">
                  {discountTypeLabel[Number(subscriptionPlan.discountType) as DiscountType]}
                </div>
              ) ?? ''}
            </div>
          }
        />
        <DetailAttribute title="Discount value" value={subscriptionPlan.discountValue ?? ''} />
        <DetailAttribute title="Description" value={subscriptionPlan.description ?? ''} />
      </div>
    )
  }

  return (
    <>
      <Formik initialValues={userSubscription} validationSchema={schema} onSubmit={handleSubmit}>
        {({ values }) => {
          return (
            <Form>
              <FastField name="userId" component={InputField} type="text" label="User ID " disabled={true} />
              <FastField
                name="subscriptionPlanId"
                component={SelectField}
                label="Subscription Plan"
                isSearchable={true}
                options={subscriptionPlansSelectInputOption}
              />
              {preViewSubscriptionPlan(values.subscriptionPlanId)}
              <Button className="mt-4" type="submit" label={isLoading ? <Spinner /> : 'Update'} disabled={isLoading} />
            </Form>
          )
        }}
      </Formik>
    </>
  )
}
