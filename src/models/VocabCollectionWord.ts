import { VocabCollection } from './vocabCollection'

export type VocabCollectionWord = {
  createdAt: Date
  id: string
  vocabCollection: VocabCollection
  vocabCollectionId: string
  words: [VocabWordDetail]
  wordsHashes: Record<string, boolean>
}

export type VocabWordDetail = {
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
  isNew?: boolean
  isDuplicate?: boolean
}

export type VocabWordInput = {
  vocabCollectionId: string
  words: string
  newImages?: string[]
}
