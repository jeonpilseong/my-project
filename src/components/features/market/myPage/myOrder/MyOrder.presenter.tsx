import * as S from './MyOrder.styles'
import MyHeader from '@/components/common/myPage/myHeader/myHeader.container'

export default function MyOrderUI() {
  const MY_ORDER_BUTTONS = ['구매내역', '판매내역']

  return (
    <S.Wrapper>
      <MyHeader myBtns={MY_ORDER_BUTTONS} />
    </S.Wrapper>
  )
}
