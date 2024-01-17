import { IOptions } from './common'
import { VideoChannel } from './videoChannel'

export const VideoPickedOptions: IOptions<boolean | null>[] = [
  {
    label: 'Picked',
    value: true,
  },
  {
    label: 'Not Picked',
    value: false,
  },
]

export type Video = {
  id: string
  youtubeId: string
  url: string
  title: string
  thumbnail: string
  transcript: Transcript[]
  duration: string
  picked: boolean
  videoChannelId: string
  memberId?: string
  updatedBy?: string
  deletedAt?: Date | null
  updatedAt?: Date
  videoChannel: Partial<VideoChannel>
  createdAt: Date
}

export type Transcript = {
  text: string
  start: number
  duration: number
}

export type VideoInput = {
  duration: string
  picked: boolean
  shouldUpdateMetadata?: boolean
  shouldUpdateTranscript?: boolean
  thumbnail: string
  title: string
  url: string
  videoChannelId: string
  youtubeId: string
}

export type VideoFilter = {
  id: string
  title: string
  url: string
  picked: boolean | null
  videoChannelId: string
}
