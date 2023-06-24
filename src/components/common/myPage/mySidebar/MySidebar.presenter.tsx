import { PlusOutlined } from '@ant-design/icons'

import * as S from './MySidebar.styles'
import { MySideUIProps } from './MySidebar.types'

export default function MySideUI(props: MySideUIProps) {
  return (
    <S.Wrapper>
      <S.Title>MYPAGE</S.Title>

      <S.UploadImageBtn onClick={props.onClickImage}>
        <S.UploadTextWrapper>
          {props.UserData?.fetchUserLoggedIn.picture && !props.imageUrl ? (
            <img
              src={`https://storage.googleapis.com/${props.UserData?.fetchUserLoggedIn.picture}`}
              style={{ width: '100%' }}
            />
          ) : (
            <>
              {props.imageUrl ? (
                <img src={`${props.imageUrl}`} style={{ width: '100%' }} />
              ) : (
                <>
                  <PlusOutlined style={{ fontSize: '1.6rem' }} />
                  <S.UploadText>Upload</S.UploadText>
                </>
              )}
            </>
          )}
        </S.UploadTextWrapper>
      </S.UploadImageBtn>
      <input style={{ display: 'none' }} type="file" onChange={props.onChangeFile} ref={props.fileRef} />

      <S.Writer>{props.UserData?.fetchUserLoggedIn.name}</S.Writer>

      <S.BtnWrapper>
        <S.MyBasket id="myBasket" onClick={props.onClickmyBtn} isClickMySide={props.isClickMySide}>
          내 장터
        </S.MyBasket>
        <S.MyOrder id="myOrder" onClick={props.onClickmyBtn} isClickMySide={props.isClickMySide}>
          내 구매내역
        </S.MyOrder>
        <S.MyProfile id="myProfile" onClick={props.onClickmyBtn} isClickMySide={props.isClickMySide}>
          내 프로필
        </S.MyProfile>
      </S.BtnWrapper>
    </S.Wrapper>
  )
}
