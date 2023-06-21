import { IUseditem } from '@/common/types/generated/types'
import * as S from './BestProduct.styles'
import { useMoneyFormat } from '@/common/hooks/useMoneyFormat'

export default function BestProductUI(props: any) {
  const { MoneyFormat } = useMoneyFormat()

  return (
    <>
      <S.Title>베스트 상품</S.Title>

      <S.Wrapper>
        {props.BestProductData?.fetchUseditemsOfTheBest.map((el: IUseditem) => (
          <S.ProductWrapper key={el._id} onClick={props.onClickBasket(el)}>
            {!el?.images?.[0] ? (
              <S.ProductImg src="/images/market/productDefault.jpg" />
            ) : (
              <S.ProductImg src={`https://storage.googleapis.com/${el.images[0]}`} />
            )}

            <S.ProductDetailWrapper>
              <S.ProductContents>
                <S.ProductName>{el.name}</S.ProductName>
                <S.ProductRemarks>{el.remarks}</S.ProductRemarks>
                <S.ProductPrice>{`${MoneyFormat(el.price ?? 0)}원`}</S.ProductPrice>
              </S.ProductContents>
              <S.PickWrapper>
                <S.PickImg src="/images/market/heart.png" />
                <S.PickCount>{el.pickedCount}</S.PickCount>
              </S.PickWrapper>
            </S.ProductDetailWrapper>
          </S.ProductWrapper>
        ))}
      </S.Wrapper>
    </>
  )
}
