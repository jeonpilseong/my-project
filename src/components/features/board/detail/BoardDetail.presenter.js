import { UserOutlined, LikeOutlined, DislikeOutlined } from '@ant-design/icons'

import * as S from './BoardDetail.styles'

export default function BoardDetailUI(props) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Header>
          <S.ProfileWrapper>
            <S.AvatarIcon size={50} icon={<UserOutlined />} />
            <S.WriterWrapper>
              <S.Writer>작성자</S.Writer>
              <S.Date>날짜</S.Date>
            </S.WriterWrapper>
          </S.ProfileWrapper>
          <S.AddressWrapper>
            <S.ClipIcon src="/images/detail/Clip.png" />
            <S.AddressIcon src="/images/detail/Location.png" />
          </S.AddressWrapper>
        </S.Header>

        <S.Title>타이틀</S.Title>
        <S.Image />
        <S.Contents>내용</S.Contents>
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
        <S.Btn>목록으로</S.Btn>
        <S.Btn>수정하기</S.Btn>
      </S.BtnWrapper>
    </S.Container>
  )
}
