import { Controller } from 'react-hook-form'

import * as S from './Signup.styles'
import { ISignUpUIProps } from './Signup.types'
import { useMoveToPage } from '@/common/hooks/useMoveToPage'
import { PlusOutlined } from '@ant-design/icons'

export default function SignUpUI(props: ISignUpUIProps) {
  const { onClickMoveToPage } = useMoveToPage()

  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>회원가입</S.Title>

        <S.Label>이메일 </S.Label>
        <Controller
          name="email"
          control={props.control}
          rules={{ required: true }}
          render={({ field }) => <S.BasicInput placeholder="이메일을 입력해 주세요." {...field} />}
        />
        <S.Error>{props.formState.errors.email?.message}</S.Error>

        <S.Label>비밀번호 입력</S.Label>
        <Controller
          name="password"
          control={props.control}
          rules={{ required: true }}
          render={({ field }) => <S.BasicInput type="password" placeholder="비밀번호를 입력해 주세요." {...field} />}
        />
        <S.Error>{props.formState.errors.password?.message}</S.Error>

        <S.Label>비밀번호 재입력</S.Label>
        <Controller
          name="checkPassword"
          control={props.control}
          rules={{ required: true }}
          render={({ field }) => (
            <S.BasicInput type="password" placeholder="비밀번호를 다시 입력해 주세요." {...field} />
          )}
        />
        <S.Error>{props.formState.errors.checkPassword?.message}</S.Error>

        <S.Label>닉네임</S.Label>
        <Controller
          name="name"
          control={props.control}
          rules={{ required: true }}
          render={({ field }) => <S.BasicInput placeholder="닉네임을 입력해 주세요." {...field} />}
        />
        <S.Error>{props.formState.errors.name?.message}</S.Error>

        <S.Label>프로필 사진 첨부</S.Label>
        <S.UploadImageBtn onClick={props.onClickImage}>
          <S.UploadTextWrapper>
            {props.imageUrl ? (
              <img src={`${props.imageUrl}`} style={{ width: '100%' }} />
            ) : (
              <>
                <PlusOutlined style={{ fontSize: '1.6rem' }} />
                <S.UploadText>Upload</S.UploadText>
              </>
            )}
          </S.UploadTextWrapper>
        </S.UploadImageBtn>
        <input style={{ display: 'none' }} type="file" onChange={props.onChangeFile} ref={props.fileRef} />

        <S.BtnWrapper>
          <S.SubmitBtn onClick={props.onClickSignup} isvalid={String(props.formState.isValid)}>
            회원가입
          </S.SubmitBtn>
        </S.BtnWrapper>

        <S.SignupWrapper>
          이미 계정이 있으신가요?
          <S.MoveToSingup onClick={onClickMoveToPage(`/login/login`)}>로그인</S.MoveToSingup>
        </S.SignupWrapper>
      </S.Wrapper>
    </S.Container>
  )
}
