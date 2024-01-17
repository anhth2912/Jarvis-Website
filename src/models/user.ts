import { IOptions } from './common'
import { SubscriptionPlan } from './subscriptionPlan'

export enum STATUS {
  ACTIVATED = 'ACTIVATED',
  NOT_ACTIVATED = 'NOT_ACTIVATED',
  BLOCKED = 'BLOCKED',
  WITHDRAWN = 'WITHDRAWN',
  DEPRECATED = 'DEPRECATED',
}

export const StatusOptions: IOptions<STATUS>[] = [
  {
    label: 'Activated',
    value: STATUS.ACTIVATED,
  },
  {
    label: 'Not Activated',
    value: STATUS.NOT_ACTIVATED,
  },
  {
    label: 'Blocked',
    value: STATUS.BLOCKED,
  },
  {
    label: 'Withdrawn',
    value: STATUS.WITHDRAWN,
  },
  {
    label: 'Deprecated',
    value: STATUS.DEPRECATED,
  },
]

export const getStatusLabel = (status: STATUS) => StatusOptions.find((item) => item.value === status)?.label ?? ''

export enum GENDER {
  MALE = 1,
  FEMALE = 2,
  OTHER = 3,
}

export enum SNS_TYPE {
  NO_USE = 0,
  GOOGLE = 1,
  FACEBOOK = 2,
}

export const SNSOptions: IOptions<SNS_TYPE>[] = [
  {
    label: 'Not use',
    value: SNS_TYPE.NO_USE,
  },
  {
    label: 'Google',
    value: SNS_TYPE.GOOGLE,
  },
  {
    label: 'Facebook',
    value: SNS_TYPE.FACEBOOK,
  },
]

export const emailVerifiedOptions: IOptions<boolean | null>[] = [
  {
    label: 'All',
    value: null,
  },
  {
    label: 'Email verified',
    value: true,
  },
  {
    label: 'Email not verify yet',
    value: false,
  },
]

export enum SortType {
  UNSORT = 'UNSORT',
  DESC = 'DESC',
  ASC = 'ASC',
}

export interface UsersSort {
  username: SortType
  name: SortType
  email: SortType
}

export const getGenderLabel = (value: GENDER) => {
  if (value === GENDER.MALE) {
    return 'Male'
  } else if (value === GENDER.FEMALE) {
    return 'Female'
  } else if (value === GENDER.OTHER) {
    return 'Other'
  } else {
    return ''
  }
}

export const getSNSTypeLabel = (value: SNS_TYPE) => {
  if (value === SNS_TYPE.GOOGLE) {
    return 'Google'
  } else if (value === SNS_TYPE.FACEBOOK) {
    return 'Facebook'
  } else {
    return ''
  }
}

export type UserFilter = {
  email: string
  username: string
  socialProviderType: SNS_TYPE | null
  status: STATUS | null
  emailVerified: boolean | null
}

export type User = {
  id: string
  username: string
  passwordHash: string
  deviceToken: string
  email: string
  emailVerified: boolean
  socialProviderType: number
  socialUserId: string
  firstName: string
  lastName: string
  nickname: string
  picture: string
  displayedUsername: string
  gender: GENDER
  birthdate: string
  status: STATUS
  externalUserId: string
  createdAt: Date
}

export type UserSubscription = {
  userId: string
  user: User
  subscriptionPlan: SubscriptionPlan
  expiresAt: Date
  createdAt: Date
}

export type UserSubscriptionInput = {
  userId: string
  subscriptionPlanId: string
}

export type UserSubscriptionFilter = {
  userId: string
  subscriptionPlanId: string
  startExpiredAt: Date | null
  endExpiredAt: Date | null
}

export enum ACTIVITY {
  LOGIN_BY_GOOGLE = 'LOGIN_BY_GOOGLE',
  LOGIN_BY_FACEBOOK = 'LOGIN_BY_FACEBOOK',
  LOGIN_BY_APPLE = 'LOGIN_BY_APPLE',
  LOGIN_BY_EMAIL = 'LOGIN_BY_EMAIL',
  TOGGLE_NOTIFICATION = 'TOGGLE_NOTIFICATION',
  REQUEST_WITHDRAW_ACCOUNT = 'REQUEST_WITHDRAW_ACCOUNT',
  WITHDRAW_ACCOUNT = 'WITHDRAW_ACCOUNT',
  CHANGE_GOAL = 'CHANGE_GOAL',
  CHANGE_LEVEL = 'CHANGE_LEVEL',
  CHANGE_TOPIC = 'CHANGE_TOPIC',
  TOGGLE_DARKMODE = 'TOGGLE_DARKMODE',
  CHANGE_APP_LANGUAGE = 'CHANGE_APP_LANGUAGE',
  CHANGE_LOCALE = 'CHANGE_LOCALE',
  SHARE_REF_LINK = 'SHARE_REF_LINK',
  FIND_WORD = 'FIND_WORD',
  SAVE_WORD = 'SAVE_WORD',
  READ_NEWS_ARTICLE = 'READ_NEWS_ARTICLE',
  HIGHLIGHT_NEWS_ARTICLE = 'HIGHLIGHT_NEWS_ARTICLE',
  FAVORITE_NEWS_ARTICLE = 'FAVORITE_NEWS_ARTICLE',
  PLAY_VIDEO_WITH_SUBTITLE = 'PLAY_VIDEO_WITH_SUBTITLE',
  PLAY_VIDEO_WITH_MULTIPLE_CHOICES = 'PLAY_VIDEO_WITH_MULTIPLE_CHOICES',
  PLAY_VIDEO_WITH_TYPING = 'PLAY_VIDEO_WITH_TYPING',
  FAVORITE_VIDEO = 'FAVORITE_VIDEO',
  LISTEN_PODCAST = 'LISTEN_PODCAST',
  FAVORITE_PODCAST = 'FAVORITE_PODCAST',
  DOWNLOAD_VOCAB = 'DOWNLOAD_VOCAB',
  LEARN_VOCAB = 'LEARN_VOCAB',
  USE_FLASHCARD = 'USE_FLASHCARD',
  VIEW_GRAMMAR = 'VIEW_GRAMMAR',
  VIEW_BLOG = 'VIEW_BLOG',
  USE_BROWSER = 'USE_BROWSER',
}

export const getActivityTypeLabel = (activityType: ACTIVITY) => {
  return ActivitiesOptions.find((activity) => activity.value === activityType)?.label ?? ''
}

export const ActivitiesOptions: IOptions<ACTIVITY>[] = [
  {
    label: 'Login By Google',
    value: ACTIVITY.LOGIN_BY_GOOGLE,
  },
  {
    label: 'Login By Facebook',
    value: ACTIVITY.LOGIN_BY_FACEBOOK,
  },
  {
    label: 'Login By Apply',
    value: ACTIVITY.LOGIN_BY_APPLE,
  },
  {
    label: 'Login By Email',
    value: ACTIVITY.LOGIN_BY_EMAIL,
  },
  {
    label: 'Toggle Notification',
    value: ACTIVITY.TOGGLE_NOTIFICATION,
  },
  {
    label: 'Request Withdraw account',
    value: ACTIVITY.REQUEST_WITHDRAW_ACCOUNT,
  },
  {
    label: 'Withdraw Account',
    value: ACTIVITY.WITHDRAW_ACCOUNT,
  },
  {
    label: 'Change Goal',
    value: ACTIVITY.CHANGE_GOAL,
  },
  {
    label: 'Change Level',
    value: ACTIVITY.CHANGE_LEVEL,
  },
  {
    label: 'Change Topic',
    value: ACTIVITY.CHANGE_TOPIC,
  },
  {
    label: 'Toggle DarkMode',
    value: ACTIVITY.TOGGLE_DARKMODE,
  },
  {
    label: 'Change App Language',
    value: ACTIVITY.CHANGE_APP_LANGUAGE,
  },
  {
    label: 'Change Locale',
    value: ACTIVITY.CHANGE_LOCALE,
  },
  {
    label: 'Share Ref Link',
    value: ACTIVITY.SHARE_REF_LINK,
  },
  {
    label: 'Find Word',
    value: ACTIVITY.FIND_WORD,
  },
  {
    label: 'Save Word',
    value: ACTIVITY.SAVE_WORD,
  },
  {
    label: 'Read News Article',
    value: ACTIVITY.READ_NEWS_ARTICLE,
  },
  {
    label: 'Highlight News Article',
    value: ACTIVITY.HIGHLIGHT_NEWS_ARTICLE,
  },
  {
    label: 'Favorite News Articles',
    value: ACTIVITY.FAVORITE_NEWS_ARTICLE,
  },
  {
    label: 'Play Video With Subtitle',
    value: ACTIVITY.PLAY_VIDEO_WITH_SUBTITLE,
  },
  {
    label: 'Play Video With Multiple Choices',
    value: ACTIVITY.PLAY_VIDEO_WITH_MULTIPLE_CHOICES,
  },
  {
    label: 'Play Video With Typing',
    value: ACTIVITY.PLAY_VIDEO_WITH_TYPING,
  },
  {
    label: 'Favorite Video',
    value: ACTIVITY.FAVORITE_VIDEO,
  },
  {
    label: 'Listen Podcast',
    value: ACTIVITY.LISTEN_PODCAST,
  },
  {
    label: 'Favorite Podcast',
    value: ACTIVITY.FAVORITE_PODCAST,
  },
  {
    label: 'Download Vocab',
    value: ACTIVITY.DOWNLOAD_VOCAB,
  },
  {
    label: 'Learn Vocab',
    value: ACTIVITY.LEARN_VOCAB,
  },
  {
    label: 'Use Flashcard',
    value: ACTIVITY.USE_FLASHCARD,
  },
  {
    label: 'View Grammar',
    value: ACTIVITY.VIEW_GRAMMAR,
  },
  {
    label: 'View Blog',
    value: ACTIVITY.VIEW_BLOG,
  },
  {
    label: 'Use Browser',
    value: ACTIVITY.USE_BROWSER,
  },
]

export type UserActivityLog = {
  activity: ACTIVITY
  id: string
  extraData: any
  userId: string
  createdAt: Date
}

export type UserActivityLogFilter = {
  activity: ACTIVITY | null
  userId: string
  startDate: Date | null
  endDate: Date | null
}
