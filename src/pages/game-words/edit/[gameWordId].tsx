import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { MainLayout } from '@layout/MainLayout'

const UpdateGameWordScreen = dynamic(
  () => import('@components/screens/GameWord/UpdateGameWord').then((mod) => mod.UpdateGameWordScreen),
  {
    ssr: false,
  },
)

const UpdateGameWordPage: NextPage = () => {
  const router = useRouter()
  const gameWordId = router.query.gameWordId as string

  return (
    <MainLayout title="Edit Game Words">
      <div className="my-4">
        <button type="button" className="btn btn-sm mr-4" onClick={() => router.back()}>
          Back
        </button>
      </div>
      <p className="text-2xl font-semibold mb-6">Game Word {gameWordId ? `#${gameWordId}` : ''}</p>

      <UpdateGameWordScreen gameWordId={gameWordId} />
    </MainLayout>
  )
}

export default UpdateGameWordPage
