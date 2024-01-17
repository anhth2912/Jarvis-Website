import { GetServerSideProps, NextPage } from 'next'
import { MainLayout } from '@layout/MainLayout'

const UpdateGameWordPage: NextPage = () => {
  return <MainLayout title="Game Word"></MainLayout>
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      permanent: false,
      destination: '/game-words',
    },
  }
}

export default UpdateGameWordPage
