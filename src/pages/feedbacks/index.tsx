import { NextPage } from 'next'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { MainLayout } from '@layout/MainLayout'
import { defaultPagination } from '@models/pagination'

const ListFeedbackScreen = dynamic(
  () => import('@components/screens/Feedback/ListFeedbacks').then((mod) => mod.ListFeedbackScreen),
  {
    ssr: false,
  },
)

const FeedbacksPage: NextPage = () => {
  const router = useRouter()
  const { currentPage, pageSize } = router.query

  return (
    <MainLayout title="Feedbacks">
      <p className="my-4 text-2xl font-semibold">Feedbacks</p>
      <ListFeedbackScreen
        currentPage={currentPage ? Number(currentPage as string) : defaultPagination.currentPage}
        pageSize={pageSize ? Number(pageSize as string) : defaultPagination.pageSize}
      />
    </MainLayout>
  )
}

export default FeedbacksPage
