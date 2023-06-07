import { useMutation } from '@apollo/client'
import { Modal } from 'antd'
import { useState, ChangeEvent } from 'react'
import { useRouter } from 'next/router'

import BoardCommentWriteUI from './BoardCommentWrite.presenter'
import { CREATE_BOARD_COMMENT, UPDATE_BOARD_COMMENT } from './BoardCommentWrite.queries'
import { FETCH_BOARD_COMMENTS } from '../list/BoardCommentList.queries'
import { IBoardCommentWriteProps, IUpdateBoardCommentInput } from './BoardCommentWrite.types'
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
} from '@/common/types/generated/types'

export default function BoardCommentWrite(props: IBoardCommentWriteProps) {
  const router = useRouter()

  // **** state
  const [rating, setRating] = useState(0)
  const [contents, setContents] = useState('')

  // **** graphql api 요청
  const [createBoardComment] = useMutation<Pick<IMutation, 'createBoardComment'>, IMutationCreateBoardCommentArgs>(
    CREATE_BOARD_COMMENT,
  )
  const [updateBoardComment] = useMutation<Pick<IMutation, 'updateBoardComment'>, IMutationUpdateBoardCommentArgs>(
    UPDATE_BOARD_COMMENT,
  )

  // **** 댓글 등록
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => setContents(event.target.value)

  const onChangeStar = (rating: number) => setRating(rating)

  const onClickAddComment = async () => {
    if (!contents) {
      Modal.error({ content: '댓글을 입력해 주세요.' })
      return
    }

    try {
      if (typeof router.query.boardId !== 'string') return
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

  // **** 댓글 수정
  const onClickEdit = async () => {
    if (!contents && !rating) {
      props.setIsEdit?.(false)
      return
    }

    try {
      const updateBoardCommentInput: IUpdateBoardCommentInput = {}
      if (contents) updateBoardCommentInput.contents = contents
      if (rating !== props.el?.rating) updateBoardCommentInput.rating = rating
      if (typeof props.el?._id !== 'string') return
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
