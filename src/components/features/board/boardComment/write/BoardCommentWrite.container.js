import { useMutation } from '@apollo/client'
import { Modal } from 'antd'
import { useState } from 'react'
import { useRouter } from 'next/router'

import BoardCommentWriteUI from './BoardCommentWrite.presenter'
import { CREATE_BOARD_COMMENT, UPDATE_BOARD_COMMENT } from './BoardCommentWrite.queries'
import { FETCH_BOARD_COMMENTS } from '../list/BoardCommentList.queries'

export default function BoardCommentWrite(props) {
  const router = useRouter()

  // **** state
  const [rating, setRating] = useState(0)
  const [contents, setContents] = useState('')

  // **** graphql api 요청
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT)
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT)

  // **** 이벤트 핸들러 함수 - 댓글 등록 기능
  const onChangeContents = event => setContents(event.target.value)

  const onChangeStar = rating => setRating(rating)

  const onClickAddComment = async () => {
    if (!contents) {
      Modal.error({ content: '댓글을 입력해 주세요.' })
      return
    }

    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: '철수',
            contents,
            rating,
          },
          boardId: router.query.boardId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {
              boardId: router.query.boardId,
            },
          },
        ],
      })
      Modal.success({ content: '댓글이 등록 되었습니다.' })
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  // **** 이벤트 핸들러 함수 - 댓글 수정 기능
  const onClickEdit = async () => {
    if (!contents && !rating) {
      props.setIsEdit?.(false)
      return
    }

    try {
      const updateBoardCommentInput = {}
      if (contents) updateBoardCommentInput.contents = contents
      if (rating !== props.el?.rating) updateBoardCommentInput.rating = rating
      await updateBoardComment({
        variables: {
          updateBoardCommentInput,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      })
      props.setIsEdit?.(false)
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  return (
    <BoardCommentWriteUI
      isEdit={props.isEdit}
      el={props.el}
      contents={contents}
      onClickAddComment={onClickAddComment}
      onChangeStar={onChangeStar}
      onChangeContents={onChangeContents}
      onClickEdit={onClickEdit}
    />
  )
}
