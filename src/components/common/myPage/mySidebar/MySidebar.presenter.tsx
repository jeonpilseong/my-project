import { PlusOutlined } from '@ant-design/icons'

import * as S from './MySidebar.styles'
import { MySideUIProps } from './MySidebar.types'

export default function MySideUI(props: MySideUIProps) {
  return (
    <S.Wrapper>
      <S.Title>MYPAGE</S.Title>

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

      <S.Writer>노원두</S.Writer>

      <S.BtnWrapper>
        <S.myProductBtn id="1" onClick={props.onClickmyBtn} myBtnId={props.myBtnId}>
          내 장터
        </S.myProductBtn>
        <S.myHistorytBtn id="2" onClick={props.onClickmyBtn} myBtnId={props.myBtnId}>
          내 구매내역
        </S.myHistorytBtn>
        <S.myProfileBtn id="3" onClick={props.onClickmyBtn} myBtnId={props.myBtnId}>
          내 프로필
        </S.myProfileBtn>
      </S.BtnWrapper>
    </S.Wrapper>
  )
}
