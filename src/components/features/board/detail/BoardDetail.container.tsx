import { useRouter } from 'next/router'
import { useMutation } from '@apollo/client'
import { Modal } from 'antd'

import BoardDetailUI from './BoardDetail.presenter'
import { DELETE_BOARD } from './BoardDetail.queries'
import { IMutation, IMutationDeleteBoardArgs } from '@/common/types/generated/types'

export default function BoardDetail() {
  const router = useRouter()

  // **** graphql api 요청
  const [deleteBoard] = useMutation<Pick<IMutation, 'deleteBoard'>, IMutationDeleteBoardArgs>(DELETE_BOARD)

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

  return <BoardDetailUI onClickDelete={onClickDelete} />
}
