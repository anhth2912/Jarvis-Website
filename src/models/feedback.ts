import { IOptions } from './common'

export interface IFeedback {
  id: string
  userId: string
  type: FeedBackType
  content: string
  createdAt: Date
  updatedAt: Date
}

export enum FeedBackType {
  APP_CONTENT = 'APP_CONTENT',
  BUG = 'BUG',
  DICTIONARY_AND_VOCAB = 'DICTIONARY_AND_VOCAB',
  OTHER = 'OTHER',
}

export const FeedBackTypeMapping: Record<FeedBackType, string> = {
  [FeedBackType.APP_CONTENT]: 'App Content',
  [FeedBackType.BUG]: 'Bug',
  [FeedBackType.DICTIONARY_AND_VOCAB]: 'Dictionary And Vocab',
  [FeedBackType.OTHER]: 'Other',
}

export type FeedbackFilter = {
  userId: string
  type: FeedBackType | null
  startDate: Date | null
  endDate: Date | null
}

export const FeedBackTypeOption: IOptions<FeedBackType>[] = [
  {
    label: 'App Content',
    value: FeedBackType.APP_CONTENT,
  },
  {
    label: 'Bug',
    value: FeedBackType.BUG,
  },
  {
    label: 'Dictionary And Vocab',
    value: FeedBackType.DICTIONARY_AND_VOCAB,
  },
  {
    label: 'Other',
    value: FeedBackType.OTHER,
  },
]
