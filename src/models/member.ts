export type MemberAuthenticateInput = {
  email: string
  password: string
}

export type Member = {
  id: string
  createdAt: Date
  email: string
}

export type MemberAuthenticatePayload = {
  member: Member
  accessToken: string
}
