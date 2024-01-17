export type Topic = {
  id: string
  name: string
  slug: string
  thumbnail: string
  createdAt: Date
}

export type TopicInput = {
  name: string
  slug: string
  thumbnail: string
}
