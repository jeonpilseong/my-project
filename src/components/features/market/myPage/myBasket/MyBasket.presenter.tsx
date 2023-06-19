import { useMoneyFormat } from '@/common/hooks/useMoneyFormat'
import * as S from './MyBasket.styles'
import MyHeader from '@/components/common/myPage/myHeader/myHeader.container'
import { useMoveToPage } from '@/common/hooks/useMoveToPage'

const MY_BASKET_BUTTONS = ['나의상품', '마이찜']

export default function MyBasketUI(props: any) {
  // **** 커스텀 훅
  const { onClickMoveToPage } = useMoveToPage()
  const { MoneyFormat } = useMoneyFormat()

  return (
    <S.Wrapper>
      <MyHeader myBtns={MY_BASKET_BUTTONS} />

      <S.BasketHeader>
        <S.ColumnNumber>번호</S.ColumnNumber>
        <S.ColumnProduct>상품명</S.ColumnProduct>
        <S.ColumnPrice>가격</S.ColumnPrice>
        <S.ColumnDate>날짜</S.ColumnDate>
      </S.BasketHeader>

      {props.UsedItemsData?.fetchUseditems
        .filter((el: any) => el.seller._id === props.UserData?.fetchUserLoggedIn._id)
        .map((el: any, index: number) => (
          <S.Row key={el._id}>
            <S.ColumnNumber>{index + 1}</S.ColumnNumber>
            <S.ColumnProduct onClick={onClickMoveToPage(`/market/detail/${el._id}`)}>{el.name}</S.ColumnProduct>
            <S.ColumnPrice>{`${MoneyFormat(el.price)}원`}</S.ColumnPrice>
            <S.ColumnDate>{el.createdAt.slice(0, 10)}</S.ColumnDate>
          </S.Row>
        ))}
    </S.Wrapper>
  )
}
