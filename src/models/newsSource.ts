export type NewsSource = {
  color: string
  id: string
  name: string
  slug: string
  thumbnail: string
  url: string
  createdAt: Date
}

export type NewsSourceInput = {
  name: string
  slug: string
  url: string
  color: string
  thumbnail: string
}

export type Thumbnail = {
  name: string
  src: string
}
