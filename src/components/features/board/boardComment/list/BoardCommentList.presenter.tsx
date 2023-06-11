import { UserOutlined } from '@ant-design/icons'
import { MouseEvent, useState } from 'react'
import { Modal } from 'antd'

import * as S from './BoardCommentList.styles'
import BoardCommentWrite from '../write/BoardCommentWrite.container'
import { useMutation } from '@apollo/client'
import { DELETE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from './BoardCommentList.queries'
import { IMutation, IMutationDeleteBoardCommentArgs } from '@/common/types/generated/types'
import { IBoardCommentListUIProps } from './BoardCommentList.types'
import { useRouter } from 'next/router'

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  const router = useRouter()

  // **** 상태값
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [open, setOpen] = useState<boolean>(false)

  // **** graphql api 요청
  const [deleteBoardComment] = useMutation<Pick<IMutation, 'deleteBoardComment'>, IMutationDeleteBoardCommentArgs>(
    DELETE_BOARD_COMMENT,
  )

  // **** 수정 버튼 클릭 여부
  const onClickEdit = (event: MouseEvent<HTMLImageElement>) => setIsEdit(true)

  // **** 삭제 버튼 클릭 여부
  const showModal = (event: MouseEvent<HTMLImageElement>) => setOpen(true)

  // **** 삭제 모달창 Cancle
  const onCancel = () => setOpen(false)

  // **** 삭제 모달창 OK
  const onClickDelete = async () => {
    try {
      await deleteBoardComment({
        variables: {
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      })
      setOpen(false)
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }
  return (
    <>
      {!isEdit && (
        <S.Wrapper>
          <S.AvatarWrapper>
            <S.AvatarIcon icon={<UserOutlined />} />
          </S.AvatarWrapper>

          <S.ContentsWrapper>
            <S.ProfileWrapper>
              <S.Writer>{props.el.writer}</S.Writer>
              <S.RateIcon disabled value={props.el.rating} />
            </S.ProfileWrapper>
            <S.Contents>{props.el.contents}</S.Contents>
            <S.Date>{props.el.createdAt.slice(0, 10)}</S.Date>
          </S.ContentsWrapper>

          <S.EditWrapper>
            <S.EditIcon src="/images/boardcomment/Edit.png" onClick={onClickEdit} />
            <S.DeleteIcon src="/images/boardcomment/Delete.png" onClick={showModal} />
            <Modal title="댓글 삭제" open={open} onOk={onClickDelete} onCancel={onCancel}>
              <p>정말로 삭제 하시겠습니까?</p>
            </Modal>
          </S.EditWrapper>
        </S.Wrapper>
      )}
      {isEdit && <BoardCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />}
    </>
  )
}
