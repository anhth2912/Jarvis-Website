import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { MainLayout } from '@layout/MainLayout'

const CreateGameWordScreen = dynamic(
  () => import('@components/screens/GameWord/CreateGameWord').then((mod) => mod.CreateGameWordScreen),
  {
    ssr: false,
  },
)

const CreateGameWordPage: NextPage = () => {
  const router = useRouter()
  return (
    <MainLayout title="Create Game Word">
      <button type="button" className="btn btn-sm mr-4" onClick={() => router.back()}>
        Back
      </button>
      <p className="text-2xl font-semibold">Create a Word in game</p>
      <CreateGameWordScreen />
    </MainLayout>
  )
}

export default CreateGameWordPage
