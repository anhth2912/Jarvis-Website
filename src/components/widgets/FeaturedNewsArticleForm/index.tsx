import React, { ChangeEvent, useState } from 'react'
import { Button } from '@components/common/Button'
import { Spinner } from '@components/common/Spinner'
import { CustomSelect } from '@components/common/CustomSelect'
import { DetailAttribute } from '@components/widgets/DetailAttribute'
import {
  FeaturedNewsArticle,
  FeaturedNewsArticleQuizzes,
  FeaturedNewsArticleStatus,
  FeaturedNewsArticleStatusOptions,
  FeaturedNewsArticleSummary,
  FeaturedNewsArticleVocab,
  UpdateFeaturedNewsArticleInput,
} from '@models/newsArticle'

export type Props = {
  isLoading: boolean
  featuredNewsArticle: FeaturedNewsArticle
  handleSubmit: (values: UpdateFeaturedNewsArticleInput) => void
}

type UpdateFeaturedNewsArticle = {
  summary: FeaturedNewsArticleSummary
  vocab: FeaturedNewsArticleVocab
  quizzes: FeaturedNewsArticleQuizzes
  status?: FeaturedNewsArticleStatus
}

export const FeaturedNewsArticleForm: React.FC<Props> = ({ isLoading, featuredNewsArticle, handleSubmit }) => {
  const [featuredNewsArticleUpdater, setFeaturedNewsArticleUpdater] = useState<UpdateFeaturedNewsArticle>({
    quizzes: featuredNewsArticle.rawQuizzes,
    summary: featuredNewsArticle.rawSummary,
    vocab: featuredNewsArticle.rawVocab,
    status: featuredNewsArticle.status,
  })

  const onSubmit = () => {
    const featuredNewsArticleUpdateData: UpdateFeaturedNewsArticleInput = {
      quizzes: JSON.stringify(featuredNewsArticleUpdater.quizzes),
      summary: JSON.stringify(featuredNewsArticleUpdater.summary),
      vocab: JSON.stringify(featuredNewsArticleUpdater.vocab),
      status: featuredNewsArticleUpdater.status,
    }
    handleSubmit(featuredNewsArticleUpdateData)
  }

  const onChangeSummary = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFeaturedNewsArticleUpdater((prev) => {
      const featuredNewsArticleUpdaterClone = { ...prev }
      return {
        ...prev,
        summary: {
          ...featuredNewsArticleUpdaterClone.summary,
          summary: e.target.value,
        },
      }
    })
  }

  const onChangeItemLevelVocab = (level: string, e: ChangeEvent<HTMLInputElement>) => {
    setFeaturedNewsArticleUpdater((prev) => {
      const featuredNewsArticleUpdaterClone = { ...prev }
      return {
        ...prev,
        vocab: {
          ...featuredNewsArticleUpdaterClone.vocab,
          [level]: e.target.value,
        },
      }
    })
  }

  const onChangeDeleteLevelVocab = (level: string) => {
    setFeaturedNewsArticleUpdater((prev) => {
      const featuredNewsArticleUpdaterClone = { ...prev }
      return {
        ...prev,
        vocab: {
          ...featuredNewsArticleUpdaterClone.vocab,
          [level]: '',
        },
      }
    })
  }

  const onChangeQuestion = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    setFeaturedNewsArticleUpdater((prev) => {
      const quizzesClone = prev.quizzes.quizzes ? [...prev.quizzes.quizzes] : []

      return {
        ...prev,
        quizzes: {
          quizzes: [
            ...quizzesClone.slice(0, index),
            {
              ...quizzesClone[index],
              question: e.target.value,
            },
            ...quizzesClone.slice(index + 1, quizzesClone.length),
          ],
        },
      }
    })
  }

  const onDeleteQuestion = (index: number) => {
    setFeaturedNewsArticleUpdater((prev) => {
      const quizzesClone = prev.quizzes.quizzes ? [...prev.quizzes.quizzes] : []

      return {
        ...prev,
        quizzes: {
          quizzes: [...quizzesClone.slice(0, index), ...quizzesClone.slice(index + 1, quizzesClone.length)],
        },
      }
    })
  }

  const onChangeOption = (e: ChangeEvent<HTMLInputElement>, questionIndex: number, optionIndex: number) => {
    setFeaturedNewsArticleUpdater((prev) => {
      const quizzesClone = prev.quizzes.quizzes ? [...prev.quizzes.quizzes] : []

      return {
        ...prev,
        quizzes: {
          quizzes: [
            ...quizzesClone.slice(0, questionIndex),
            {
              ...quizzesClone[questionIndex],
              options: [
                ...quizzesClone[questionIndex].options.slice(0, optionIndex),
                e.target.value,
                ...quizzesClone[questionIndex].options.slice(
                  optionIndex + 1,
                  quizzesClone[questionIndex].options.length,
                ),
              ],
            },
            ...quizzesClone.slice(questionIndex + 1, quizzesClone.length),
          ],
        },
      }
    })
  }

  const onDeleteOption = (questionIndex: number, optionIndex: number) => {
    setFeaturedNewsArticleUpdater((prev) => {
      const quizzesClone = prev.quizzes.quizzes ? [...prev.quizzes.quizzes] : []

      return {
        ...prev,
        quizzes: {
          quizzes: [
            ...quizzesClone.slice(0, questionIndex),
            {
              ...quizzesClone[questionIndex],
              options: [
                ...quizzesClone[questionIndex].options.slice(0, optionIndex),
                ...quizzesClone[questionIndex].options.slice(
                  optionIndex + 1,
                  quizzesClone[questionIndex].options.length,
                ),
              ],
            },
            ...quizzesClone.slice(questionIndex + 1, quizzesClone.length),
          ],
        },
      }
    })
  }

  const onAddOption = (questionIndex: number) =>
    setFeaturedNewsArticleUpdater((prev) => {
      const quizzesClone = prev.quizzes.quizzes ? [...prev.quizzes.quizzes] : []
      return {
        ...prev,
        quizzes: {
          quizzes: [
            ...quizzesClone.slice(0, questionIndex),
            {
              ...quizzesClone[questionIndex],
              options: [...quizzesClone[questionIndex].options, ''],
            },
            ...quizzesClone.slice(questionIndex + 1, quizzesClone.length),
          ],
        },
      }
    })

  const onAddQuestion = () => {
    setFeaturedNewsArticleUpdater((prev) => {
      const quizzesClone = prev.quizzes.quizzes ? [...prev.quizzes.quizzes] : []
      return {
        ...prev,
        quizzes: {
          quizzes: [
            ...quizzesClone,
            {
              correct_answer: 0,
              options: [''],
              question: '',
            },
          ],
        },
      }
    })
  }

  const onChangeCorrectAnswer = (e: ChangeEvent<HTMLInputElement>, questionIndex: number) => {
    setFeaturedNewsArticleUpdater((prev) => {
      const quizzesClone = [...prev.quizzes.quizzes]
      return {
        ...prev,
        quizzes: {
          quizzes: [
            ...quizzesClone.slice(0, questionIndex),
            {
              ...quizzesClone[questionIndex],
              correct_answer: e.target.value,
            },
            ...quizzesClone.slice(questionIndex + 1, quizzesClone.length),
          ],
        },
      }
    })
  }

  return (
    <>
      <div className="mt-10">
        <DetailAttribute
          title="Status"
          value={
            <CustomSelect
              options={FeaturedNewsArticleStatusOptions}
              value={featuredNewsArticleUpdater.status}
              placeholder="Filter by published"
              className="min-w-[330px] max-w-[350px]"
              onChangeValue={(value: FeaturedNewsArticleStatus) =>
                setFeaturedNewsArticleUpdater((prev) => {
                  return {
                    ...prev,
                    status: value,
                  }
                })
              }
            />
          }
        />
        <div>
          <DetailAttribute
            title="Summary Detail"
            value={
              <div>
                <div className="grid grid-cols-5 gap-4 mb-2 max-w-[1000px]">
                  <div className="col-span-1">Summary:</div>
                  <div className="col-span-4">
                    <textarea
                      className="textarea textarea-primary w-full"
                      placeholder="Summary of news"
                      rows={7}
                      value={featuredNewsArticleUpdater.summary?.summary ?? ''}
                      onChange={onChangeSummary}
                    />
                  </div>
                </div>
              </div>
            }
          />
          <DetailAttribute
            title="Vocab Detail"
            value={
              <>
                {Object.keys(featuredNewsArticleUpdater.vocab ?? {}).map((level, index) => (
                  <div key={index} className="flex gap-4 mb-2">
                    <div>{level}:</div>
                    <div className="flex gap-2 items-center">
                      <input
                        className="input input-info w-[700px]"
                        value={featuredNewsArticleUpdater.vocab[level as keyof FeaturedNewsArticleVocab]}
                        onChange={(e) => onChangeItemLevelVocab(level, e)}
                      />
                      <button className="btn btn-sm" onClick={() => onChangeDeleteLevelVocab(level)}>
                        x
                      </button>
                    </div>
                  </div>
                ))}
              </>
            }
          />
          <DetailAttribute
            title="Quizzes Detail"
            value={
              <>
                {(featuredNewsArticleUpdater.quizzes?.quizzes ?? []).map((quiz, index) => (
                  <React.Fragment key={index}>
                    <div className="grid grid-cols-5 gap-4 mb-4 max-w-[800px]">
                      <div className="col-span-1">Question:</div>
                      <div className="col-span-4 flex gap-2 items-center">
                        <input
                          className="input input-info w-[700px]"
                          value={quiz.question}
                          onChange={(e) => onChangeQuestion(e, index)}
                        />
                        <button className="btn btn-sm btn-error" onClick={() => onDeleteQuestion(index)}>
                          delete
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-5 gap-4 mb-3 max-w-[800px]">
                      <div className="col-span-1">Answer:</div>
                      <div className="col col-span-4">
                        {(quiz.options ?? []).map((option, optionIndex) => (
                          <div key={`${index}-${optionIndex}`} className="flex gap-4 mb-2">
                            <div>
                              <input
                                className="input input-info w-[600px]"
                                value={option}
                                onChange={(e) => onChangeOption(e, index, optionIndex)}
                              />
                            </div>
                            <button className="btn btn-sm" onClick={() => onDeleteOption(index, optionIndex)}>
                              x
                            </button>
                          </div>
                        ))}
                        <button className="btn btn-sm btn-secondary" onClick={() => onAddOption(index)}>
                          Add Answer
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-5 gap-4 mb-10 max-w-[800px]">
                      <div className="col-span-1">Correct Answer:</div>
                      <div className="col-span-4 flex items-center">
                        <div className="flex flex-col gap-2">
                          <input
                            className="input input-info w-[700px]"
                            value={quiz.correct_answer ? quiz.correct_answer : ''}
                            onChange={(e) => onChangeCorrectAnswer(e, index)}
                          />
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
                <div className="flex justify-center items-center w-[500px]">
                  <button className="btn btn-sm btn-secondary" onClick={() => onAddQuestion()}>
                    Add Question
                  </button>
                </div>
              </>
            }
          />
        </div>
        <Button
          className="mt-4"
          type="submit"
          label={isLoading ? <Spinner /> : 'Update'}
          disabled={isLoading}
          onClick={onSubmit}
        />
      </div>
    </>
  )
}
