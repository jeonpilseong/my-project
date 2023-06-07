import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

import BoardCommentListUI from './BoardCommentList.presenter'
import { FETCH_BOARD_COMMENTS } from './BoardCommentList.queries'
import { IQuery, IQueryFetchBoardCommentsArgs } from '@/common/types/generated/types'

export default function BoardCommentList() {
  const router = useRouter()
  if (typeof router.query.boardId !== 'string') {
    alert('올바르지 않은 게시글 아이디입니다.')
    void router.push('/')
    return <></>
  }

  // **** graphql api 요청
  const { data: commentData } = useQuery<Pick<IQuery, 'fetchBoardComments'>, IQueryFetchBoardCommentsArgs>(
    FETCH_BOARD_COMMENTS,
    {
      variables: {
        boardId: router.query.boardId,
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
