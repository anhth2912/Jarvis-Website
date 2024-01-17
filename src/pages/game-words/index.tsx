import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { MainLayout } from '@layout/MainLayout'
import { useRouter } from 'next/router'
import { defaultPagination } from '@models/pagination'

const ListGameWordsScreen = dynamic(
  () => import('@components/screens/GameWord/ListGameWords').then((mod) => mod.ListGameWordsScreen),
  {
    ssr: false,
  },
)

const GameWordsPage: NextPage = () => {
  const router = useRouter()
  const { currentPage, pageSize } = router.query

  return (
    <MainLayout title="Game Words">
      <p className="my-4 text-2xl font-semibold">Game Words</p>
      <ListGameWordsScreen
        currentPage={currentPage ? Number(currentPage as string) : defaultPagination.currentPage}
        pageSize={pageSize ? Number(pageSize as string) : defaultPagination.pageSize}
      />
    </MainLayout>
  )
}

export default GameWordsPage
