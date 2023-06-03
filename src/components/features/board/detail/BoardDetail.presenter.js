import { UserOutlined } from '@ant-design/icons'

import * as S from './BoardDetail.styles'
import { useMoveToPage } from '../../../../../src/common/hooks/useMoveToPage'

export default function BoardDetailUI(props) {
  const { onClickMoveToPage } = useMoveToPage()
  return (
    <>
      <S.Wrapper>
        <S.Header>
          <S.ProfileWrapper>
            <S.AvatarIcon size={50} icon={<UserOutlined />} />
            <S.WriterWrapper>
              <S.Writer>{props.BoardData?.fetchBoard?.writer}</S.Writer>
              <S.Date>{props.BoardData?.fetchBoard.createdAt.slice(0, 10)}</S.Date>
            </S.WriterWrapper>
          </S.ProfileWrapper>
          <S.AddressWrapper>
            <S.ClipIcon src="/images/detail/Clip.png" />
            <S.AddressIcon src="/images/detail/Location.png" />
          </S.AddressWrapper>
        </S.Header>

        <S.Title>{props.BoardData?.fetchBoard?.title}</S.Title>
        <S.Image />
        <S.Contents>{props.BoardData?.fetchBoard?.contents}</S.Contents>
        <S.Youtube />

        <S.UpDownWrapper>
          <S.UpBtnWrapper>
            <S.UpBtn src="/images/detail/Up.png" />
            <S.UpCount>1920</S.UpCount>
          </S.UpBtnWrapper>
          <S.DownBtnWrapper>
            <S.DownBtn src="/images/detail/Down.png" />
            <S.DownCount>1920</S.DownCount>
          </S.DownBtnWrapper>
        </S.UpDownWrapper>
      </S.Wrapper>

      <S.BtnWrapper>
        <S.Btn onClick={onClickMoveToPage(`/boards/list`)}>목록으로</S.Btn>
        <S.Btn>수정하기</S.Btn>
        <S.Btn onClick={props.onClickDelete}>삭제하기</S.Btn>
      </S.BtnWrapper>
    </>
  )
}
