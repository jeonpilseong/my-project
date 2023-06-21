import { useMoneyFormat } from '@/common/hooks/useMoneyFormat'
import * as S from './MyBasket.styles'
import { useMoveToPage } from '@/common/hooks/useMoveToPage'
import { useScroll } from '@/common/hooks/useScroll'

export default function MyBasketUI(props: any) {
  const { scrollRef } = useScroll()

  // **** 커스텀 훅
  const { onClickMoveToPage } = useMoveToPage()
  const { MoneyFormat } = useMoneyFormat()

  return (
    <S.Wrapper ref={scrollRef}>
      <S.MyHeaderWrapper>
        <S.MyHeaderTextWrapper>
          <S.MyProductText id="myProduct" isClickMyProduct={props.isClickMyProduct} onClick={props.onClickMyBtn}>
            나의상품
          </S.MyProductText>
          <S.MyPickText id="myPick" isClickMyProduct={props.isClickMyProduct} onClick={props.onClickMyBtn}>
            마이찜
          </S.MyPickText>
        </S.MyHeaderTextWrapper>
      </S.MyHeaderWrapper>

      {props.isClickMyProduct ? (
        <>
          <S.BasketHeader>
            <S.ColumnNumber>번호</S.ColumnNumber>
            <S.ColumnProduct isClickMyProduct={props.isClickMyProduct}>상품명</S.ColumnProduct>
            <S.ColumnPrice>판매가격</S.ColumnPrice>
            <S.ColumnDate>날짜</S.ColumnDate>
          </S.BasketHeader>

          {props.UsedItemsData?.fetchUseditems
            .filter((el: any) => el.seller._id === props.UserData?.fetchUserLoggedIn._id)
            .map((el: any, index: number) => (
              <S.Row key={el._id}>
                <S.ColumnNumber>{index + 1}</S.ColumnNumber>
                <S.ColumnProduct
                  isClickMyProduct={props.isClickMyProduct}
                  onClick={onClickMoveToPage(`/market/detail/${el._id}`)}>
                  {el.name}
                </S.ColumnProduct>
                <S.ColumnPrice>{`${MoneyFormat(el.price)}원`}</S.ColumnPrice>
                <S.ColumnDate>{el.createdAt.slice(0, 10)}</S.ColumnDate>
              </S.Row>
            ))}
        </>
      ) : (
        <>
          <S.BasketHeader>
            <S.ColumnNumber>번호</S.ColumnNumber>
            <S.ColumnProduct isClickMyProduct={props.isClickMyProduct}>상품명</S.ColumnProduct>
            <S.ColumnPrice>판매가격</S.ColumnPrice>
            <S.CoulmeSeller>판매자</S.CoulmeSeller>
            <S.ColumnDate>날짜</S.ColumnDate>
          </S.BasketHeader>
        </>
      )}
    </S.Wrapper>
  )
}
