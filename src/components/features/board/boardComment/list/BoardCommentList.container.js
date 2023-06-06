import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

import BoardCommentListUI from './BoardCommentList.presenter'
import { FETCH_BOARD_COMMENTS } from './BoardCommentList.queries'

export default function BoardCommentList() {
  const router = useRouter()

  // **** graphql api 요청
  const { data: commentData } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.boardId,
    },
  })

  // **** 이벤트 핸들러 함수 - 댓글 수정 기능
  const onClickEdit = () => {
    setIsEdit(true)
  }

  return (
    <>
      {commentData?.fetchBoardComments.map(el => (
        <BoardCommentListUI key={el._id} el={el} onClickEdit={onClickEdit} />
      ))}
    </>
  )
}
