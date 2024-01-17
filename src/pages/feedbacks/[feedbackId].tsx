import { NextPage } from 'next'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { MainLayout } from '@layout/MainLayout'

const DetailFeedback = dynamic(
  () => import('@components/screens/Feedback/DetailFeedback').then((mod) => mod.DetailFeedback),
  {
    ssr: false,
  },
)

const DetailFeedbackPage: NextPage = () => {
  const router = useRouter()
  const feedbackId = router.query.feedbackId as string

  return (
    <MainLayout title="News Article">
      <DetailFeedback feedbackId={feedbackId} />
    </MainLayout>
  )
}

export default DetailFeedbackPage
