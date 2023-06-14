import { useMoveToPage } from '@/common/hooks/useMoveToPage'
import * as S from './Header.styles'
import { ILayoutHeaderUIProps } from './Header.types'

export default function LayoutHeaderUI(props: ILayoutHeaderUIProps) {
  const { onClickMoveToPage } = useMoveToPage()

  return (
    <S.Container>
      <S.Logo src="/images/logo/logo.png" onClick={onClickMoveToPage(`/`)} />
      <S.BtnWrapper>
        {props.UserData ? (
          <>
            <S.Btn>마이페이지</S.Btn>
            <S.Btn onClick={props.onClickLogout} type="primary">
              로그아웃
            </S.Btn>
          </>
        ) : (
          <>
            <S.Btn onClick={onClickMoveToPage(`/login/login`)}>로그인</S.Btn>
            <S.Btn onClick={onClickMoveToPage(`/signup/signup`)} type="primary">
              회원가입
            </S.Btn>
          </>
        )}
      </S.BtnWrapper>
    </S.Container>
  )
}
