import { useRouter } from 'next/router'
import { useMutation, useQuery } from '@apollo/client'
import { Modal } from 'antd'

import BoardDetailUI from './BoardDetail.presenter'
import { DELETE_BOARD, DISLIKE_BOARD, LIKE_BOARD } from './BoardDetail.queries'
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from '@/common/types/generated/types'
import { FETCH_BOARD } from '../write/BoardWrite.queries'

export default function BoardDetail() {
  const router = useRouter()

  // **** graphql api 요청
  const [deleteBoard] = useMutation<Pick<IMutation, 'deleteBoard'>, IMutationDeleteBoardArgs>(DELETE_BOARD)
  const [likeBoard] = useMutation<Pick<IMutation, 'likeBoard'>, IMutationLikeBoardArgs>(LIKE_BOARD)
  const [dislikeBoard] = useMutation<Pick<IMutation, 'dislikeBoard'>, IMutationDislikeBoardArgs>(DISLIKE_BOARD)
  const { data: BoardData } = useQuery<Pick<IQuery, 'fetchBoard'>, IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: {
      boardId: String(router.query.boardId),
    },
  })

  // **** 게시글 삭제
  const onClickDelete = async () => {
    try {
      if (typeof router.query.boardId !== 'string') return
      await deleteBoard({
        variables: {
          boardId: router.query.boardId,
        },
      })
      Modal.success({ content: '게시글이 삭제 되었습니다.' })
      router.push('/boards/list')
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  // **** UP, DOWN
  const onClickUpBtn = async () => {
    try {
      if (typeof router.query.boardId !== 'string') return
      await likeBoard({
        variables: {
          boardId: router.query.boardId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: {
              boardId: router.query.boardId,
            },
          },
        ],
      })
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  const onClickDownBtn = async () => {
    try {
      if (typeof router.query.boardId !== 'string') return
      await dislikeBoard({
        variables: {
          boardId: router.query.boardId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: {
              boardId: router.query.boardId,
            },
          },
        ],
      })
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  return (
    <BoardDetailUI
      onClickDelete={onClickDelete}
      BoardData={BoardData}
      onClickUpBtn={onClickUpBtn}
      onClickDownBtn={onClickDownBtn}
    />
  )
}
