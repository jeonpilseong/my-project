import { Controller } from 'react-hook-form'

import * as S from './MyProfile.styles'

export default function MyProfileUI(props: any) {
  return (
    <S.Wrapper>
      <S.Title>비밀번호 변경</S.Title>

      <S.BtnWrapper>
        <S.BtnText>현재 비밀번호</S.BtnText>
        <Controller
          name="currentPassword"
          control={props.control}
          rules={{ required: true }}
          render={({ field }) => <S.BasicInput type="password" placeholder="이메일을 입력해 주세요." {...field} />}
        />
      </S.BtnWrapper>
      <S.ErrorWrapper>
        <S.HiddenDiv />
        <S.Error>{props.formState.errors.currentPassword?.message}</S.Error>
      </S.ErrorWrapper>

      <S.BtnWrapper>
        <S.BtnText>새 비밀번호</S.BtnText>
        <Controller
          name="newPassword"
          control={props.control}
          rules={{ required: true }}
          render={({ field }) => <S.BasicInput type="password" placeholder="이메일을 입력해 주세요." {...field} />}
        />
      </S.BtnWrapper>
      <S.ErrorWrapper>
        <S.HiddenDiv />
        <S.Error>{props.formState.errors.newPassword?.message}</S.Error>
      </S.ErrorWrapper>

      <S.BtnWrapper>
        <S.BtnText>새 비밀번호 확인</S.BtnText>
        <Controller
          name="CheckPassword"
          control={props.control}
          rules={{ required: true }}
          render={({ field }) => <S.BasicInput type="password" placeholder="이메일을 입력해 주세요." {...field} />}
        />
      </S.BtnWrapper>
      <S.ErrorWrapper>
        <S.HiddenDiv />
        <S.Error>{props.formState.errors.CheckPassword?.message}</S.Error>
      </S.ErrorWrapper>

      <S.SubmitBtn onClick={props.onClickEditPassword} isvalid={String(props.formState.isValid)}>
        비밀번호 변경
      </S.SubmitBtn>
    </S.Wrapper>
  )
}
