import React from 'react'
import { Button } from '@components/common/Button'
import { Spinner } from '@components/common/Spinner'

type Props = {
  title: string
  content: string
  accordionTitle: string
  isNeedUpdate?: boolean
  buttonTitle?: string
  isLoading: boolean
  handleSubmit?: () => void
}

export const DetailContentAttribute: React.FC<Props> = (props) => {
  const { title, content, accordionTitle, isNeedUpdate = false, buttonTitle, isLoading, handleSubmit } = props

  return (
    <div className="grid grid-cols-12 gap-2 mb-4">
      <div className="col-span-2 font-bold">{title}</div>
      <div className="col-span-10">
        <div className="grid grid-cols-12 gap-2">
          <div className="xs:col-span-6 lg:col-span-7 xl:col-span-9">
            <div className="collapse">
              <input type="checkbox" className="peer" />
              <div
                // eslint-disable-next-line max-len
                className="collapse-title flex items-center justify-between w-full p-5 font-medium text-left peer-checked:border-b-0 text-gray-500 border  border-gray-400 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {accordionTitle}
              </div>
              <div
                // eslint-disable-next-line max-len
                className="collapse-content transition-[height] ease-in-out delay-150 border border-gray-200 dark:border-gray-700 dark:bg-gray-900 peer-checked:bg-slate-50 peer-checked:text-secondary-content"
              >
                <div className="mb-2 text-gray-500 dark:text-gray-400">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: content,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="xs:col-span-6 lg:col-span-5 xl:col-span-3">
            {isNeedUpdate ? (
              <Button onClick={handleSubmit} disabled={isLoading} label={isLoading ? <Spinner /> : buttonTitle} />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
