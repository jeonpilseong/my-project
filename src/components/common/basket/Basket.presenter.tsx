import * as S from './Basket.styles'

export default function BasketUI() {
  return (
    <S.Wrapper>
      <S.Title>오늘 본 상품</S.Title>
      <S.ProductWrapper>
        <S.ProductImg />
        <S.Name>삼성전자 갤럭시탭</S.Name>
        <S.Remarks>2019 LTE 32GB</S.Remarks>
        <S.Price>240,120원</S.Price>
      </S.ProductWrapper>
      <S.ProductWrapper>
        <S.ProductImg />
        <S.Name>삼성전자 갤럭시탭</S.Name>
        <S.Remarks>2019 LTE 32GB</S.Remarks>
        <S.Price>240,120원</S.Price>
      </S.ProductWrapper>
    </S.Wrapper>
  )
}
