import { Controller } from 'react-hook-form'

import { useMoveToPage } from '@/common/hooks/useMoveToPage'
import * as S from './Login.styles'
import { ILoginUIProps } from './Login.types'
import { useScroll } from '@/common/hooks/useScroll'

export default function LoginUI(props: ILoginUIProps) {
  const { onClickMoveToPage } = useMoveToPage()
  const { scrollRef } = useScroll()

  return (
    <S.Container>
      <S.Wrapper ref={scrollRef}>
        <S.Title>로그인</S.Title>

        <S.Label>이메일 </S.Label>
        <Controller
          name="email"
          control={props.control}
          rules={{ required: true }}
          render={({ field }) => <S.BasicInput placeholder="이메일을 입력해 주세요." {...field} />}
        />
        <S.Error>{props.formState.errors.email?.message}</S.Error>

        <S.Label>비밀번호 </S.Label>
        <Controller
          name="password"
          control={props.control}
          rules={{ required: true }}
          render={({ field }) => <S.BasicInput type="password" placeholder="비밀번호를 입력해 주세요." {...field} />}
        />
        <S.Error>{props.formState.errors.password?.message}</S.Error>

        <S.BtnWrapper>
          <S.SubmitBtn onClick={props.onClickLogin}>로그인</S.SubmitBtn>
        </S.BtnWrapper>

        <S.SignupWrapper>
          아직 계정이 없으신가요?
          <S.MoveToSingup onClick={onClickMoveToPage(`/signup/signup`)}>회원가입</S.MoveToSingup>
        </S.SignupWrapper>
      </S.Wrapper>
    </S.Container>
  )
}
