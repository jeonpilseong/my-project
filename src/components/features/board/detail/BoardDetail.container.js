import { useRouter } from 'next/router'
import { useMutation, useQuery } from '@apollo/client'
import { Modal } from 'antd'

import BoardDetailUI from './BoardDetail.presenter'
import { DELETE_BOARD, FETCH_BOARD } from './BoardDetail.queries'

export default function BoardDetail() {
  const router = useRouter()

  // **** graphql api 요청
  const [deleteBoard] = useMutation(DELETE_BOARD)

  // **** 이벤트 핸들러 함수
  const onClickDelete = async () => {
    await deleteBoard({
      variables: {
        boardId: router.query.boardId,
      },
    })
    Modal.success({ content: '게시글이 삭제 되었습니다.' })
    router.push('/boards/list')
  }

  return <BoardDetailUI onClickDelete={onClickDelete} boardId={router.query.boardId} />
}
