import { Controller } from 'react-hook-form'

import * as S from './Signup.styles'
import { ISignUpUIProps } from './Signup.types'
import { useMoveToPage } from '@/common/hooks/useMoveToPage'
import { useScroll } from '@/common/hooks/useScroll'

export default function SignUpUI(props: ISignUpUIProps) {
  const { onClickMoveToPage } = useMoveToPage()
  const { scrollRef } = useScroll()

  return (
    <S.Container>
      <S.Wrapper ref={scrollRef}>
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
