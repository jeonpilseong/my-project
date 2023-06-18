import * as S from './MyBasket.styles'
import MyHeader from '@/components/common/myPage/myHeader/myHeader.container'

export default function MyBasketUI() {
  const MY_BASKET_BUTTONS = ['나의상품', '마이찜']

  return (
    <S.Wrapper>
      <MyHeader myBtns={MY_BASKET_BUTTONS} />
    </S.Wrapper>
  )
}
