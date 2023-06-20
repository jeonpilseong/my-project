import { useScroll } from '@/common/hooks/useScroll'
import * as S from './MyOrder.styles'
import MyHeader from '@/components/common/myPage/myHeader/myHeader.container'

const MY_ORDER_BUTTONS = ['구매내역', '판매내역']

export default function MyOrderUI() {
  const { scrollRef } = useScroll()

  return (
    <S.Wrapper ref={scrollRef}>
      <MyHeader myBtns={MY_ORDER_BUTTONS} />
    </S.Wrapper>
  )
}
