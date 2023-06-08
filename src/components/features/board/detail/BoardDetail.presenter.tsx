import { UserOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'

import * as S from './BoardDetail.styles'
import { useMoveToPage } from '@/common/hooks/useMoveToPage'
import { IBoardDetailUIProps } from './BoardDetail.types'

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  const router = useRouter()
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
        <S.Youtube
          width={'60%'}
          height={'360px'}
          muted={false}
          volume={0.05}
          controls={true}
          url={props.BoardData?.fetchBoard?.youtubeUrl ?? ''}
        />

        <S.UpDownWrapper>
          <S.UpBtnWrapper>
            <S.UpBtn onClick={props.onClickUpBtn} src="/images/detail/Up.png" />
            <S.UpCount>{props.BoardData?.fetchBoard?.likeCount}</S.UpCount>
          </S.UpBtnWrapper>
          <S.DownBtnWrapper>
            <S.DownBtn onClick={props.onClickDownBtn} src="/images/detail/Down.png" />
            <S.DownCount>{props.BoardData?.fetchBoard?.dislikeCount}</S.DownCount>
          </S.DownBtnWrapper>
        </S.UpDownWrapper>
      </S.Wrapper>

      <S.BtnWrapper>
        <S.Btn onClick={onClickMoveToPage(`/boards/list`)}>목록으로</S.Btn>
        <S.Btn onClick={onClickMoveToPage(`/boards/edit/${router.query.boardId}`)}>수정하기</S.Btn>
        <S.Btn onClick={props.onClickDelete}>삭제하기</S.Btn>
      </S.BtnWrapper>
    </>
  )
}
