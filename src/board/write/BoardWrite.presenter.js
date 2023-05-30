import { Form } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Controller } from 'react-hook-form'

import * as S from './BoardWrite.styles'

export default function BoardWriteUI(props) {
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  )

  return (
    <S.Container>
      <S.Wrapper>
        <Form onFinish={props.onClickSubmit}>
          <S.BoardTitle>게시글 등록</S.BoardTitle>
          <S.ProfileWrapper>
            <S.HalfBox>
              <S.Label>작성자</S.Label>
              <Controller
                name="writer"
                control={props.control}
                rules={{ required: true }}
                render={({ field }) => <S.WriterInput placeholder="작성자를 입력해 주세요." {...field} />}
              />
              <S.Error>{props.formState.errors.writer?.message}</S.Error>
            </S.HalfBox>
            <S.HalfBox>
              <S.Label>비밀번호</S.Label>
              <Controller
                name="password"
                control={props.control}
                rules={{ required: true }}
                render={({ field }) => (
                  <S.PasswordInput type="password" placeholder="현재 비밀번호를 입력해 주세요." {...field} />
                )}
              />
              <S.Error>{props.formState.errors.password?.message}</S.Error>
            </S.HalfBox>
          </S.ProfileWrapper>

          <S.TitleWrapper>
            <S.Label>제목</S.Label>
            <Controller
              name="title"
              control={props.control}
              rules={{ required: true }}
              render={({ field }) => <S.TitleInput placeholder="제목을 입력해 주세요." {...field} />}
            />
            <S.Error>{props.formState.errors.title?.message}</S.Error>
          </S.TitleWrapper>

          <S.ContentsWrapper>
            <S.Label>내용</S.Label>
            <Controller
              name="contents"
              control={props.control}
              rules={{ required: true }}
              render={({ field }) => (
                <S.ContentsInput showCount rows={20} maxLength={1000} placeholder="내용을 입력해 주세요." {...field} />
              )}
            />
            <S.Error>{props.formState.errors.contents?.message}</S.Error>
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
            <S.SubmitBtn
              style={{ backgroundColor: props.formState.isValid ? '#ffd600' : '#bdbdbd' }}
              onClick={props.onClickSubmit}>
              등록하기
            </S.SubmitBtn>
          </S.BtnWrapper>
        </Form>
      </S.Wrapper>
    </S.Container>
  )
}
