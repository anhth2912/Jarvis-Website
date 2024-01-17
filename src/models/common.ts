const tmpBucket = process.env.NEXT_PUBLIC_STORAGE_TEMP_BUCKET || 'dev-myenglishschool-tmp'
const assetBucket = process.env.NEXT_PUBLIC_STORAGE_ASSETS_BUCKET || 'dev-myenglishschool-assets'
const avatarBucket = process.env.NEXT_PUBLIC_STORAGE_AVATARS_BUCKET || 'dev-myenglishschool-avatars'
const uploadBucket = process.env.NEXT_PUBLIC_STORAGE_UPLOADS_BUCKET || 'dev-myenglishschool-uploads'

export interface IOptions<T> {
  label: string
  value: T
}

export interface AppAccountInfo {
  appAccessToken: string
  expiresAt?: number
  tokenType?: string
}

export const BUCKET = {
  TMP: tmpBucket,
  ASSETS: assetBucket,
  AVATARS: avatarBucket,
  UPLOADS: uploadBucket,
}

export type UploadImageRequestPayload = {
  url: string
  generatedFilename: string
}

export type PropsPagination = {
  currentPage: number
  pageSize: number
}
