import { Video } from './video'

export type VideoChannel = {
  id: string
  youtubeUrl: string
  youtubeId: string
  name: string
  slug: string
  color: string
  thumbnail: string
  createdAt: Date
  videos: Video[]
}

export type VideoChannelInput = {
  color: string
  name: string
  shouldUpdateMetadata?: boolean
  thumbnail: string
  youtubeId: string
  youtubeUrl: string
}
