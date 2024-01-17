import React, { useRef } from 'react'
import { FastField, Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useMutation } from '@tanstack/react-query'
import { Button } from '@components/common/Button'
import { Spinner } from '@components/common/Spinner'
import { InputField } from '@components/common/CustomField/InputField'
import { SelectField } from '@components/common/CustomField/SelectField'
import { VocabCollection, VocabCollectionInput, vocabLevelList } from '@models/vocabCollection'
import { InputCheckboxField } from '@components/common/CustomField/InputCheckboxField'
import { InputFileImage } from '../InputFileImage'
import { useChangeImage } from '@hooks/useChangeImage'
import { createUploadImageRequestForVocab } from '@schema/mutation/createUploadImageRequestForVocab'

type Props = {
  vocabCollection: VocabCollectionInput
  vocabCollections: VocabCollection[]
  isLoading: boolean
  isUpdateVocabCollection?: boolean
  handleSubmit: (values: VocabCollectionInput) => void
}

export const VocabCollectionForm: React.FC<Props> = (props) => {
  const { vocabCollection, vocabCollections, isLoading, isUpdateVocabCollection = false, handleSubmit } = props
  const refInputIconPathFile = useRef<HTMLInputElement>(null)
  const refInputBackgroundPathFile = useRef<HTMLInputElement>(null)
  const { mutate, isLoading: isCreateUploadImageRequestLoading } = useMutation({
    mutationFn: (filename: string) => createUploadImageRequestForVocab(filename),
  })

  const { image: icon, setImage: setIcon, onChangeImage: onChangeIcon } = useChangeImage(refInputIconPathFile, mutate)
  const {
    image: background,
    setImage: setBackground,
    onChangeImage: onChangeBackground,
  } = useChangeImage(refInputBackgroundPathFile, mutate)

  const schema = Yup.object().shape({
    name: Yup.string().required('required'),
    slug: Yup.string().required('Required'),
  })

  return (
    <>
      <Formik
        initialValues={vocabCollection}
        validationSchema={schema}
        onSubmit={(value: VocabCollectionInput) => {
          handleSubmit(value)
          if (refInputIconPathFile.current) {
            refInputIconPathFile.current.value = ''
          }
          if (refInputBackgroundPathFile.current) {
            refInputBackgroundPathFile.current.value = ''
          }
          setIcon('')
          setBackground('')
        }}
      >
        {({ setFieldValue }) => {
          return (
            <Form>
              <FastField name="name" component={InputField} type="text" label="Name" />
              <FastField name="slug" component={InputField} type="text" label="Slug" />
              <FastField
                name="parentId"
                component={SelectField}
                label="Parent Vocab Collection"
                isSearchable={true}
                options={vocabCollections.map((vocabCollection) => ({
                  label: vocabCollection.name,
                  value: vocabCollection.id,
                }))}
              />
              <FastField
                name="level"
                component={SelectField}
                label="Level"
                isSearchable={true}
                options={vocabLevelList}
              />
              <FastField name="source" component={InputField} type="text" label="Source" />
              <FastField name="isPublished" component={InputCheckboxField} label="Published" />
              <FastField name="isOriginal" component={InputCheckboxField} label="Original" />
              <FastField name="isFree" component={InputCheckboxField} label="Free" />
              <InputFileImage
                refInputFile={refInputIconPathFile}
                image={icon}
                imagePrevious={vocabCollection.iconPath}
                field="iconPath"
                hasPrevious={isUpdateVocabCollection}
                isLoading={isCreateUploadImageRequestLoading}
                setFieldValue={setFieldValue}
                onChangeImage={onChangeIcon}
              />
              <InputFileImage
                refInputFile={refInputBackgroundPathFile}
                image={background}
                imagePrevious={vocabCollection.backgroundPath}
                field="backgroundPath"
                hasPrevious={isUpdateVocabCollection}
                isLoading={isCreateUploadImageRequestLoading}
                setFieldValue={setFieldValue}
                onChangeImage={onChangeBackground}
              />

              <Button
                className="mt-4"
                type="submit"
                label={isLoading ? <Spinner /> : isUpdateVocabCollection ? 'Update' : 'Create'}
                disabled={isLoading}
              />
            </Form>
          )
        }}
      </Formik>
    </>
  )
}
