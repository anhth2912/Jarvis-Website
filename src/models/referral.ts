export interface ReferralCode {
  id: string
  userId: string
  referralCode: string
  createdAt: Date
}

export type ReferralCodeInput = {
  userId: string
  referralCode: string
}

export enum Status {
  PENDING = 'PENDING',
  SUCCEED = 'SUCCEED',
  REJECTED = 'REJECTED',
}

export const statusOptions = [
  {
    label: 'Pending',
    value: Status.PENDING,
  },
  {
    label: 'Succeed',
    value: Status.SUCCEED,
  },
  {
    label: 'Rejected',
    value: Status.REJECTED,
  },
]

export type DeviceInfo = {
  // action: string
  device_id: string
  device_token: string
  device_type: string
  // appVersion: string
}

export type Extra = {
  deviceInfo: Partial<DeviceInfo>
}

export interface ReferralLog {
  id: string
  userId: string
  referralCodeId: string
  referredBy: string
  extraData: string
  extra: Partial<Extra>
  currentConfigTokenAmount: number
  status: Status
  createdAt: Date
}

export type ReferralLogInput = {
  currentConfigTokenAmount: number
  userId: string
  status: Status
  referredBy: string
  referralCodeId: string
  extraData: string
}

export type ReferralLogsInput = {
  userId?: string
  referredBy?: string
  currentConfigTokenAmountFrom?: number | null
  currentConfigTokenAmountTo?: number | null
  status?: Status | null
}

export type ReferralLogsFilterType = {
  userId: string
  referredBy: string
  currentConfigTokenAmountFrom: number | null
  currentConfigTokenAmountTo: number | null
}

export interface ReferralStat {
  userId: string
  totalReferrals: number
  totalTokenAmount: number
  createdAt: Date
}
