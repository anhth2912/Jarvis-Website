import { Transcript } from './video'

export type NewsArticleHighlightedContent = {
  highlightedContent: string
  newsArticleId: string
  wordHighlightPackId: string
}

export type VideoHighlightTranscript = {
  videoId: string
  wordHighlightPackId: string
  highlightedTranscript: [Transcript]
}

export type PodcastHighlightTranscript = {
  podcastId: string
  wordHighlightPackId: string
  highlightedTranscript: [Transcript]
}
