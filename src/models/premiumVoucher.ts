import { Campaign } from './campaign'
import { SubscriptionPlan } from './subscriptionPlan'

export type PremiumVoucher = {
  id: string
  code: string
  campaignId: string
  subscriptionPlanId: string
  usedBy: string
  usedAt: Date
  campaign: Campaign
  subscriptionPlan: SubscriptionPlan
  createdAt: Date
}

export type SubscriptionWithAmount = {
  subscriptionPlanId: string
  amount: number
}

export type PremiumVoucherGenerated = {
  code: string
  subscriptionPlanId: string
}
