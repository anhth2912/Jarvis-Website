export type UserCustomVocabCollection = {
  backgroundPath: string
  iconPath: string
  id: string
  name: string
  slug: string
  userId: string
  createdAt: Date
  words: [WordDetailInVoCabCollection]
}

export type WordDetailInVoCabCollection = {
  id: string
  example: string
  image: string
  note: string
  ukAudio: string
  ukPhonetics: string
  usAudio: string
  usPhonetics: string
  vietExample: string
  vietNote: string
  word: string
}
