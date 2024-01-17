export const DEFAULT_OFFSET = 0
export const DEFAULT_LIMIT = 10
export const DEFAULT_MAX_LIMIT = 300
export const DEFAULT_NUMBER_PER_COLLECTION = 10

export type PaginationInput = {
  offset: number
  limit: number
}

export type PaginationInfo = {
  offset: number
  limit: number
  totalItems: number
  totalPages: number
}

export type PaginationOnPage = {
  currentPage: number
  pageSize: number
}

export interface IPage<T> {
  docs: T[]
  paginationInfo: PaginationInfo
}

export const defaultPagination = {
  currentPage: 1,
  pageSize: 20,
}
