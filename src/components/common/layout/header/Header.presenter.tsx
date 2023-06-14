import { useMoveToPage } from '@/common/hooks/useMoveToPage'
import * as S from './Header.styles'

export default function LayoutHeaderUI() {
  const { onClickMoveToPage } = useMoveToPage()

  return (
    <S.Container>
      <S.Logo src="/images/logo/logo.png" onClick={onClickMoveToPage(`/`)} />
      <S.BtnWrapper>
        <S.Btn onClick={onClickMoveToPage(`/login/login`)}>로그인</S.Btn>
        <S.Btn onClick={onClickMoveToPage(`/signup/signup`)} type="primary">
          회원가입
        </S.Btn>
      </S.BtnWrapper>
    </S.Container>
  )
}
