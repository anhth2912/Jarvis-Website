export enum DiscountType {
  UNSPECIFIED = 0,
  PERCENTAGE = 1,
  AMOUNT = 2,
}

export const discountTypeOptions = [
  {
    label: 'Unspecified',
    value: DiscountType.UNSPECIFIED,
  },
  {
    label: 'Percentage',
    value: DiscountType.PERCENTAGE,
  },
  {
    label: 'Amount',
    value: DiscountType.AMOUNT,
  },
]

export const discountTypeLabel: Record<DiscountType, string> = {
  [DiscountType.UNSPECIFIED]: 'Unspecified',
  [DiscountType.PERCENTAGE]: 'Percentage',
  [DiscountType.AMOUNT]: 'Amount',
}

export type SubscriptionPlan = {
  id: string
  name: string
  sku: string
  description: string
  price: number
  discountType: DiscountType
  discountValue: number
  amountOfDays: number
  isSubscription: boolean
  createdAt: Date
}

export type SubscriptionPlanInput = {
  name: string
  sku: string
  description: string
  price: number | null
  discountType: DiscountType | null
  discountValue: number | null
  amountOfDays: number | null
  isSubscription: boolean
}
