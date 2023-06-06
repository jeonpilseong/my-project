import { UserOutlined } from '@ant-design/icons'
import { useState } from 'react'

import * as S from './BoardCommentList.styles'
import BoardCommentWrite from '../write/BoardCommentWrite.container'

export default function BoardCommentListUI(props) {
  // **** 상태값
  const [isEdit, setIsEdit] = useState(false)

  // **** 이벤트 핸들러 함수
  const onClickEdit = () => setIsEdit(true)

  return (
    <>
      {!isEdit && (
        <S.Wrapper key={props.key}>
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
            <S.DeleteIcon src="/images/boardcomment/Delete.png" />
          </S.EditWrapper>
        </S.Wrapper>
      )}
      {isEdit && <BoardCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />}
    </>
  )
}
