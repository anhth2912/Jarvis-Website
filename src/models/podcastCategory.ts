import { Podcast } from './podcast'

export type PodcastCategory = {
  id: string
  podcasts: Podcast[]
  thumbnail: string
  title: string
  createdAt: Date
}

export type PodcastCategoryInput = {
  thumbnail: string
  title: string
}
