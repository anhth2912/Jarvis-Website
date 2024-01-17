import React from 'react'
import Link from 'next/link'
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid'

type Props = {
  type: string
  id: string
  isIdField?: boolean
  linkText?: string
  hasDetailItem?: boolean
  onDeleteItem?: (id: string) => void
}

export const ItemAction: React.FC<Props> = ({
  type,
  id,
  isIdField = false,
  hasDetailItem = true,
  linkText,
  onDeleteItem,
}) => {
  if (isIdField) {
    return (
      <div className="text-center">
        <Link
          href={hasDetailItem ? `/${type}/${id}` : `/${type}/edit/${id}`}
          className="text-[#537FE7] hover:underline max-w-[150px] inline-block overflow-hidden text-ellipsis whitespace-nowrap"
        >
          {linkText ?? id}
        </Link>
      </div>
    )
  }

  return (
    <div className="flex justify-center">
      <Link href={`/${type}/edit/${id}`} className="">
        <div className="btn btn-secondary btn-sm mr-4">
          <PencilIcon color="#fff" width={15} />
        </div>
      </Link>
      <div className="btn btn-error btn-sm" onClick={() => onDeleteItem && onDeleteItem(id)}>
        <TrashIcon color="#fff" width={15} />
      </div>
    </div>
  )
}
