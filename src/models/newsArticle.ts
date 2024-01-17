import { IOptions } from './common'
import { NewsSource } from './newsSource'
import { Topic } from './topic'

export enum NewsArticleStatus {
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
}

export const NewsArticleStatusOptions: IOptions<NewsArticleStatus>[] = [
  {
    label: 'Pending',
    value: NewsArticleStatus.PENDING,
  },
  {
    label: 'Success',
    value: NewsArticleStatus.SUCCESS,
  },
  {
    label: 'Failed',
    value: NewsArticleStatus.FAILED,
  },
]

export const NewsArticlePublishedOptions: IOptions<boolean | null>[] = [
  {
    label: 'Published',
    value: true,
  },
  {
    label: 'Not Published',
    value: false,
  },
]

export interface NewsArticle {
  id: string
  title: string
  content: string
  audioUrl: string
  featuredImageUrl: string
  isFavorited: boolean
  newsSource: NewsSource
  slug: string
  sourceId: string | null
  topic: Topic
  topicId: string | null
  url: string
  isPublished: boolean
  status: NewsArticleStatus
  featuredNewsArticle: FeaturedNewsArticle
  createdAt: Date
}

export enum FeaturedNewsArticleStatus {
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export const FeaturedNewsArticleStatusOptions: IOptions<FeaturedNewsArticleStatus>[] = [
  {
    label: 'Done',
    value: FeaturedNewsArticleStatus.DONE,
  },
  {
    label: 'In Progress',
    value: FeaturedNewsArticleStatus.IN_PROGRESS,
  },
]

export type UpdateFeaturedNewsArticleInput = {
  summary?: string
  vocab?: string
  quizzes?: string
  status?: FeaturedNewsArticleStatus
}

export interface FeaturedNewsArticle {
  newsArticleId: string
  rawSummary: FeaturedNewsArticleSummary
  rawVocab: FeaturedNewsArticleVocab
  rawQuizzes: FeaturedNewsArticleQuizzes
  status: FeaturedNewsArticleStatus
}

export interface FeaturedNewsArticlePayload {
  newsArticleId: string
  rawSummary: FeaturedNewsArticleSummary
  rawVocab: FeaturedNewsArticleVocab
  rawQuizzes: FeaturedNewsArticleQuizzes
  newsArticle: NewsArticle
}

export type FeaturedNewsArticleSummary = {
  summary: string
}

export type FeaturedNewsArticleQuizzes = {
  quizzes: Quiz[]
}

export type FeaturedNewsArticleVocab = {
  B1: string[]
  B2: string[]
  C1: string[]
  C2: string[]
}

export type Quiz = {
  question: string
  options: string[]
  correct_answer: number | string
}

export type NewsArticleInput = {
  url: string
  title: string
  slug: string
  featuredImageUrl: string
  content: string
  audioUrl: string
  topicId: string | null
  sourceId: string | null
}

export type NewsArticleFilter = {
  id: string
  url: string
  isPublished: boolean | null
  status: NewsArticleStatus | null
  title: string
  topicId: string
  sourceId: string
}
