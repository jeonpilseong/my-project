import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

import BoardCommentListUI from './BoardCommentList.presenter'
import { FETCH_BOARD_COMMENTS } from './BoardCommentList.queries'
import { IQuery, IQueryFetchBoardCommentsArgs } from '@/common/types/generated/types'

export default function BoardCommentList() {
  const router = useRouter()

  // **** graphql api 요청
  const { data: commentData } = useQuery<Pick<IQuery, 'fetchBoardComments'>, IQueryFetchBoardCommentsArgs>(
    FETCH_BOARD_COMMENTS,
    {
      variables: {
        boardId: String(router.query.boardId),
      },
    },
  )

  return (
    <>
      {commentData?.fetchBoardComments.map(el => (
        <BoardCommentListUI key={el._id} el={el} />
      ))}
    </>
  )
}
