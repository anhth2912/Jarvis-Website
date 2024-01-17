import { PodcastCategory } from './podcastCategory'
import { Transcript } from './video'

export type Podcast = {
  id: string
  title: string
  thumbnail: string
  source: string
  podcastCategoryId: string
  duration: string
  content: string
  author: string
  audio: string
  highlightedPodcasts: HighlightedPodcastTranscript[]
  PodcastCategory: PodcastCategory
  transcriptData: string
  transcript: Transcript[]
  createdAt: Date
}

export type HighlightedPodcastTranscript = {
  highlightedTranscript: Transcript[]
}

export type PodcastInput = {
  audio: string
  author: string
  content: string
  duration: string
  podcastCategoryId: string
  source: string
  thumbnail: string
  title: string
  transcriptData?: string
}
