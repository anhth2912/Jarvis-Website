import { ChangeEvent, useState } from 'react'
import { Button } from '@components/common/Button'
import { Spinner } from '@components/common/Spinner'
import { UpdateNewsCrawlerConfigInput } from '@models/newsCrawlerConfig'

export type Props = {
  isLoading: boolean
  newsCrawlerConfig?: UpdateNewsCrawlerConfigInput
  isUpdateNewsCrawler?: boolean
  setUpdateNewsCrawlerConfigInput: React.Dispatch<React.SetStateAction<UpdateNewsCrawlerConfigInput | undefined>>
  handleSubmit: () => void
}

const inputClassName =
  // eslint-disable-next-line max-len
  'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:cursor-not-allowed disabled:bg-[#f1f5f9]'

export const NewsCrawlerConfigForm: React.FC<Props> = ({
  isLoading,
  isUpdateNewsCrawler = false,
  newsCrawlerConfig,
  setUpdateNewsCrawlerConfigInput,
  handleSubmit,
}) => {
  const [isKeyEmpty, setIsKeyEmpty] = useState<boolean>(false)
  const handleChangeKey = (e: ChangeEvent<HTMLInputElement>, index: number) =>
    setUpdateNewsCrawlerConfigInput((prev) => {
      if (!prev) {
        return prev
      }

      const topicMappings = prev.topicMappings
      return {
        ...prev,
        topicMappings: topicMappings
          ? [
              ...topicMappings.slice(0, index),
              [e.target.value, topicMappings[index][1] ?? []],
              ...topicMappings.slice(index + 1, topicMappings.length),
            ]
          : [],
      }
    })

  const handleChangeItemInKey = (e: ChangeEvent<HTMLInputElement>, keyIndex: number, itemIndex: number) =>
    setUpdateNewsCrawlerConfigInput((prev) => {
      if (!prev) {
        return prev
      }
      const topicMappings = prev.topicMappings
      return {
        ...prev,
        topicMappings: topicMappings
          ? [
              ...topicMappings.slice(0, keyIndex),
              [
                topicMappings[keyIndex][0] ?? '',
                topicMappings[keyIndex][1]
                  ? [
                      ...topicMappings[keyIndex][1].slice(0, itemIndex),
                      e.target.value,
                      ...topicMappings[keyIndex][1].slice(itemIndex + 1, topicMappings[keyIndex][1].length),
                    ]
                  : [],
              ],
              ...topicMappings.slice(keyIndex + 1, topicMappings.length),
            ]
          : [],
      }
    })

  const handleDeleteItem = (keyIndex: number, itemIndex: number) =>
    setUpdateNewsCrawlerConfigInput((prev) => {
      if (!prev) {
        return prev
      }
      const topicMappings = prev.topicMappings

      return {
        ...prev,
        topicMappings: topicMappings
          ? [
              ...topicMappings.slice(0, keyIndex),
              [
                topicMappings[keyIndex][0] ?? '',
                topicMappings[keyIndex][1]
                  ? [
                      ...topicMappings[keyIndex][1].slice(0, itemIndex),
                      ...topicMappings[keyIndex][1].slice(itemIndex + 1, topicMappings[keyIndex][1].length),
                    ]
                  : [],
              ],
              ...topicMappings.slice(keyIndex + 1, topicMappings.length),
            ]
          : [],
      }
    })

  const handleAddField = (keyIndex: number) => {
    setUpdateNewsCrawlerConfigInput((prev) => {
      if (!prev) {
        return prev
      }
      const topicMappings = prev.topicMappings
      return {
        ...prev,
        topicMappings: topicMappings
          ? [
              ...topicMappings.slice(0, keyIndex),
              [
                topicMappings[keyIndex][0] ?? '',
                topicMappings[keyIndex][1] ? [...topicMappings[keyIndex][1], ''] : [''],
              ],
              ...topicMappings.slice(keyIndex + 1, topicMappings.length),
            ]
          : [],
      }
    })
  }

  const handleChangeKeyConfig = (e: ChangeEvent<HTMLInputElement>) => {
    if (isKeyEmpty) {
      setIsKeyEmpty(!!e.target.value)
    }
    setUpdateNewsCrawlerConfigInput((prev) => {
      if (!prev) {
        return prev
      }
      return {
        ...prev,
        key: e.target.value,
      }
    })
  }

  const handleAddKey = () =>
    setUpdateNewsCrawlerConfigInput((prev) => {
      if (!prev) {
        return prev
      }

      const topicMappings = prev.topicMappings

      return {
        ...prev,
        topicMappings: topicMappings ? [...topicMappings, ['', ['']]] : [],
      }
    })

  const handleDeleteKey = (keyIndex: number) => {
    setUpdateNewsCrawlerConfigInput((prev) => {
      if (!prev) {
        return prev
      }

      const topicMappings = prev.topicMappings

      return {
        ...prev,
        topicMappings: topicMappings
          ? [...topicMappings.slice(0, keyIndex), ...topicMappings.slice(keyIndex + 1, topicMappings.length)]
          : [],
      }
    })
  }

  const onSubmit = () => {
    if (!newsCrawlerConfig?.key) {
      setIsKeyEmpty(true)
      return
    }
    handleSubmit()
  }

  return (
    <>
      <div className="">
        <label className="flex pb-2 w-[150px] items-center mb-2 mt-4 text-sm font-medium text-gray-900">Key</label>
        <input
          className={`${inputClassName} w-full`}
          value={newsCrawlerConfig?.key ?? ''}
          type="text"
          placeholder="Enter Key of news crawler config"
          disabled={isUpdateNewsCrawler}
          onChange={handleChangeKeyConfig}
        />
        {isKeyEmpty ? <div className="text-sm px-2 py-2 text-red-700">required</div> : null}
      </div>
      <div className="">
        <label className="flex pb-2 w-[120px] items-center mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-gray-300">
          Enabled
        </label>
        <div className="">
          <input
            type="checkbox"
            checked={newsCrawlerConfig?.enabled ?? false}
            className="checkbox checkbox-primary"
            onChange={(e) =>
              setUpdateNewsCrawlerConfigInput((prev) => {
                if (!prev) {
                  return prev
                }

                return {
                  ...prev,
                  enabled: e.target.checked ?? false,
                }
              })
            }
          />
        </div>
      </div>
      <div>
        <label className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-gray-300">Topic Mapping</label>
        {newsCrawlerConfig?.topicMappings && newsCrawlerConfig?.topicMappings.length > 0
          ? newsCrawlerConfig.topicMappings.map((topicMapping, index) => {
              const key = topicMapping[0] ?? ''
              const value = (topicMapping[1] as string[]) ?? []
              return (
                <div key={`${index}`} className="flex gap-4 mt-5">
                  <div className="flex gap-4">
                    <input
                      type="text"
                      className={`input input-info h-[46px] w-[200px]`}
                      value={key}
                      onChange={(e) => handleChangeKey(e, index)}
                    />
                    <div className="flex flex-col gap-3 ">
                      {value &&
                        value.map((item, itemIndex) => (
                          <div key={`${index}-${itemIndex}`} className="flex gap-2 items-center">
                            <input
                              className="input input-info w-[500px]"
                              value={item}
                              onChange={(e) => handleChangeItemInKey(e, index, itemIndex)}
                            />
                            <button className="btn btn-sm" onClick={() => handleDeleteItem(index, itemIndex)}>
                              x
                            </button>
                          </div>
                        ))}
                      <div className="flex justify-center items-center w-[500px]">
                        <button className="btn btn-sm" onClick={() => handleAddField(index)}>
                          Add Field
                        </button>
                      </div>
                    </div>
                    <div className="pt-2">
                      <button className="btn btn-sm btn-error" onClick={() => handleDeleteKey(index)}>
                        delete topic
                      </button>
                    </div>
                  </div>
                </div>
              )
            })
          : null}
        <div className="flex justify-center mt-6">
          <input type="button" className="btn" value="Add Key" onClick={handleAddKey} />
        </div>
      </div>
      <Button
        className="mt-4"
        type="submit"
        label={isLoading ? <Spinner /> : isUpdateNewsCrawler ? 'Update' : 'Create'}
        disabled={isLoading}
        onClick={onSubmit}
      />
    </>
  )
}
