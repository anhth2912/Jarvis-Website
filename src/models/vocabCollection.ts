import { IOptions } from './common'

export enum VocabLevel {
  BEGINNER = 1,
  ELEMENTARY = 2,
  INTERMEDIATE = 3,
  ADVANCED = 4,
}

export const NUMBER_OF_WORDS_TO_USE_VIRTUAL = 1000

export const vocabLevelList = [
  {
    label: 'Beginner',
    value: VocabLevel.BEGINNER,
  },
  {
    label: 'Elementary',
    value: VocabLevel.ELEMENTARY,
  },
  {
    label: 'Intermediate',
    value: VocabLevel.INTERMEDIATE,
  },
  {
    label: 'Advanced',
    value: VocabLevel.ADVANCED,
  },
]

export const vocabLevelDisplay: Record<VocabLevel, string> = {
  [VocabLevel.BEGINNER]: 'Beginner',
  [VocabLevel.ELEMENTARY]: 'Elementary',
  [VocabLevel.INTERMEDIATE]: 'Intermediate',
  [VocabLevel.ADVANCED]: 'Advanced',
}

export type VocabCollection = {
  id: string
  slug: string
  name: string
  source: string
  backgroundPath: string
  iconPath: string
  isPublished: boolean
  isFeatured: boolean
  isOriginal: boolean
  level: VocabLevel
  parentId: string
  wordsAmount: number
  isFree: boolean
  hasSubVocabCollections: boolean
  subVocabCollections: VocabCollection[]
  createdAt: Date
}

export type VocabCollectionInput = {
  backgroundPath: string
  iconPath: string
  isPublished: boolean
  isOriginal: boolean
  level: VocabLevel
  name: string
  parentId: string | null
  slug: string
  source: string
  isFree: boolean
}

export type VocabCollectionFilter = {
  isPublished: boolean | null
  isFree: boolean | null
  isOriginal: boolean | null
  isFeatured: boolean | null
}

export const isPublishedOptions: IOptions<boolean | null>[] = [
  {
    label: 'Published',
    value: true,
  },
  {
    label: 'Not Published',
    value: false,
  },
]

export const isFreeOptions: IOptions<boolean | null>[] = [
  {
    label: 'Free',
    value: true,
  },
  {
    label: 'Not Free',
    value: false,
  },
]

export const isOriginalOptions: IOptions<boolean | null>[] = [
  {
    label: 'Original',
    value: true,
  },
  {
    label: 'Not Original',
    value: false,
  },
]

export const isFeaturedOptions: IOptions<boolean | null>[] = [
  {
    label: 'Featured',
    value: true,
  },
  {
    label: 'Not Featured',
    value: false,
  },
]
