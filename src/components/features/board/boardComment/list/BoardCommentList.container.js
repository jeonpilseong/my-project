import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'

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

  return (
    <>
      {commentData?.fetchBoardComments.map(el => (
        <BoardCommentListUI key={el._id} el={el} boardId={router.query.boardId} />
      ))}
    </>
  )
}
