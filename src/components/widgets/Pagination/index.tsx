import React, { Dispatch, ReactElement, SetStateAction, useMemo } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { PaginationOnPage } from '@models/pagination'
import { usePagination } from '@hooks/usePagination'
import { setPagination } from '@utils/sessionStorage'

export type Props = {
  totalRecord: number
  totalPages: number
  pageSize?: number
  type: string
  currentPage: number
  isDisPlayCreateButton?: boolean
  leftSideElement?: ReactElement
  setPaginationOnPage?: Dispatch<SetStateAction<PaginationOnPage>>
}

const DOTS = '...'

export const Pagination = ({
  totalRecord,
  totalPages,
  pageSize = 20,
  currentPage,
  type,
  isDisPlayCreateButton = true,
  leftSideElement,
  setPaginationOnPage,
}: Props) => {
  const router = useRouter()
  const { paginationRange } = usePagination(totalRecord, pageSize, 1, currentPage)

  const onChangePage = (page: number) => {
    if (setPaginationOnPage) {
      setPaginationOnPage((prev) => ({
        ...prev,
        currentPage: page,
      }))
      return
    }
    setPagination(type, { currentPage: page })

    void router.push({
      pathname: type,
      query: {
        currentPage: page,
        pageSize,
      },
    })
  }

  const onChangePageSize = (pageSizeChange: number) => {
    if (setPaginationOnPage) {
      setPaginationOnPage((prev) => ({
        ...prev,
        pageSize: pageSizeChange,
      }))
      return
    }
    setPagination(type, { currentPage: 1, pageSize })
    void router.push({
      pathname: type,
      query: {
        currentPage: 1,
        pageSize: pageSizeChange,
      },
    })
  }

  const itemIndexRecordShowing = useMemo(() => {
    const startIndexRecord = pageSize * (currentPage - 1) + 1
    const endIndexRecord = startIndexRecord + pageSize - 1
    return {
      startIndexRecord,
      endIndexRecord,
    }
  }, [pageSize, currentPage])

  const onClickPage = (page: string | number) => {
    if (page !== DOTS) {
      onChangePage(Number(page))
    }
  }

  return (
    <>
      {totalRecord ? (
        <div className="mb-2">
          Showing {itemIndexRecordShowing.startIndexRecord} to{' '}
          {itemIndexRecordShowing.endIndexRecord > totalRecord ? totalRecord : itemIndexRecordShowing.endIndexRecord} of{' '}
          {totalRecord}
        </div>
      ) : null}
      <div className="w-full flex justify-between gap-4 max-1366:text-[14px] max-1366:flex-col">
        <div className="w-full xl:w-fit flex md:gap-4 xl:justify-start items-center">
          <div className="flex justify-center items-stretch gap-2 select-none">
            <button className="btn btn-sm" disabled={currentPage === 1} onClick={() => onClickPage(currentPage - 1)}>
              Prev
            </button>
            <div className="items-center hidden md:flex">
              {paginationRange?.map((element, index) => (
                <span
                  key={index}
                  onClick={() => onClickPage(element)}
                  className={`text-shadow-2 h-full flex justify-center items-center px-4
            ${currentPage === element ? 'text-white bg-black' : 'text-[#6E8B9D]'}
            ${
              currentPage !== element && element !== DOTS
                ? 'active:bg-[#253040] hover:bg-[#2530409f] hover:text-white'
                : ''
            }
            ${element !== DOTS ? 'cursor-pointer' : ''}`}
                >
                  {element}
                </span>
              ))}
            </div>
            <div className="items-center md:hidden flex">
              <span className="text-black">
                {currentPage} / {totalPages}
              </span>
            </div>
            <button
              className="btn btn-sm"
              disabled={currentPage >= totalPages}
              onClick={() => onClickPage(currentPage + 1)}
            >
              Next
            </button>
          </div>
          <select
            style={{ outline: 'none' }}
            className="select select-sm select-info"
            value={pageSize}
            onChange={(event) => {
              onChangePageSize(Number(event.target.value))
            }}
          >
            <option value={10}>10 / page</option>
            <option value={20}>20 / page</option>
            <option value={30}>30 / page</option>
          </select>
        </div>

        <div>
          {isDisPlayCreateButton ? (
            <Link href={`/${type}/create`} className="btn btn-sm">
              Create New
            </Link>
          ) : null}
          {leftSideElement ? leftSideElement : null}
        </div>
      </div>
    </>
  )
}
