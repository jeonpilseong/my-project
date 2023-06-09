import { useMoveToPage } from '@/common/hooks/useMoveToPage'
import * as S from './Header.styles'
import { ILayoutHeaderUIProps } from './Header.types'
import { PlusOutlined, UserOutlined } from '@ant-design/icons'
import { DropDownBtn } from './DropDown'

export default function LayoutHeaderUI(props: ILayoutHeaderUIProps) {
  // **** 커스텀 훅
  const { onClickMoveToPage } = useMoveToPage()

  return (
    <S.Container>
      <S.Logo src="/images/logo/logo.png" onClick={onClickMoveToPage(`/`)} />
      <S.BtnWrapper>
        {props.UserData ? (
          <>
            {props.UserData?.fetchUserLoggedIn?.picture ? (
              <S.AvatarIcon src={`https://storage.googleapis.com/${props.UserData.fetchUserLoggedIn.picture}`} />
            ) : (
              <S.AvatarIcon icon={<UserOutlined />} />
            )}
            <DropDownBtn onClickLogout={props.onClickLogout} UserData={props.UserData} />
            <S.Btn onClick={onClickMoveToPage(`/market/new`)} type="primary" icon={<PlusOutlined />}>
              상품 등록
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
