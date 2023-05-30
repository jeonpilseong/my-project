import { PlusOutlined } from '@ant-design/icons'

import * as S from './BoardWrite.styles'

export default function BoardWriteUI() {
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  )

  return (
    <S.Container>
      <S.Wrapper>
        <S.BoardTitle>게시글 등록</S.BoardTitle>

        <S.ProfileWrapper>
          <S.HalfBox>
            <S.Label>작성자</S.Label>
            <S.WriterInput placeholder="작성자를 입력해 주세요." />
          </S.HalfBox>
          <S.HalfBox>
            <S.Label>비밀번호</S.Label>
            <S.PasswordInput type="password" placeholder="현재 비밀번호를 입력해 주세요." />
          </S.HalfBox>
        </S.ProfileWrapper>

        <S.TitleWrapper>
          <S.Label>제목</S.Label>
          <S.TitleInput placeholder="제목을 입력해 주세요." />
        </S.TitleWrapper>

        <S.ContentsWrapper>
          <S.Label>내용</S.Label>
          <S.ContentsInput showCount rows={20} maxLength={1000} placeholder="내용을 작성하세요." />
        </S.ContentsWrapper>

        <S.ZipcodeWrapper>
          <S.ZipcodeInput value="07250" readOnly />
          <S.ZicodeBtn>우편번호 검색</S.ZicodeBtn>
        </S.ZipcodeWrapper>
        <S.AddressInput />
        <S.AddressInput />

        <S.YoutubeWrapper>
          <S.Label>유튜브</S.Label>
          <S.YoutubeUrlInput placeholder="링크를 복사해주세요." />
        </S.YoutubeWrapper>

        <S.ImgWrapper>
          <S.Label>사진 첨부</S.Label>
          <S.ImgUploadWrapper>
            <S.ImgUploadBtn listType="picture-circle">{uploadButton}</S.ImgUploadBtn>
            <S.ImgUploadBtn listType="picture-circle">{uploadButton}</S.ImgUploadBtn>
          </S.ImgUploadWrapper>
        </S.ImgWrapper>

        <S.BtnWrapper>
          <S.SubmitBtn>등록하기</S.SubmitBtn>
        </S.BtnWrapper>
      </S.Wrapper>
    </S.Container>
  )
}
