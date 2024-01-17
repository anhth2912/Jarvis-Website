import { PaginationInfo } from './pagination'
import { PremiumVoucher } from './premiumVoucher'

export interface Campaign {
  id: string
  name: string
  description: string
  hasVouchers: boolean
  premiumVouchers: PremiumVoucher[]
  createdAt: Date
}

export type CampaignPayload = {
  campaign: Campaign
  paginationInfo: PaginationInfo
}

export type CampaignInput = {
  name: string
  description: string
}
