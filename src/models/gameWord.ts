export interface GameWord {
  id: string
  word: string
  imagePath: string
  createdAt: Date
}

export interface GameWordInput {
  word: string
  imagePath: string
}
