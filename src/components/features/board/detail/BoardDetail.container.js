import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'

import BoardDetailUI from './BoardDetail.presenter'
import { FETCH_BOARD } from './BoardDetail.queries'

export default function BoardDetail() {
  const router = useRouter()

  // **** graphql api 요청
  const { data: BoardData } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  })
  return <BoardDetailUI BoardData={BoardData} />
}
