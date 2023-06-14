import { Controller } from 'react-hook-form'

import * as S from './MarketWrite.styles'

export default function MarketWriteUI(props: any) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>상품 등록하기</S.Title>
        <S.Label>상품명</S.Label>
        <Controller
          name="name"
          control={props.control}
          rules={{ required: true }}
          render={({ field }) => <S.BasicInput placeholder="상품명을 입력해 주세요." {...field} />}
        />
        <S.Error>{props.formState.errors.name?.message}</S.Error>

        <S.Label>한줄요약</S.Label>
        <Controller
          name="remarks"
          control={props.control}
          rules={{ required: true }}
          render={({ field }) => <S.BasicInput placeholder="한줄요약을 입력해 주세요." {...field} />}
        />
        <S.Error>{props.formState.errors.remarks?.message}</S.Error>

        <S.Label>상품설명</S.Label>
        <Controller
          name="contents"
          control={props.control}
          rules={{ required: true }}
          render={({ field }) => <S.TextEditor {...field} />}
        />
        <S.Error>{props.formState.errors.contents?.message}</S.Error>

        <S.Label style={{ marginTop: '4rem' }}>가격</S.Label>
        <Controller
          name="price"
          control={props.control}
          rules={{ required: true }}
          render={({ field }) => <S.BasicInput placeholder="가격을 입력해 주세요." {...field} />}
        />
        <S.Error>{props.formState.errors.price?.message}</S.Error>

        <S.BtnWrapper>
          <S.SubmitBtn onClick={props.onClickSubmit}>등록하기</S.SubmitBtn>
        </S.BtnWrapper>
      </S.Wrapper>
    </S.Container>
  )
}
