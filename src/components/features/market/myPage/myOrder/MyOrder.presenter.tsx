import { useScroll } from '@/common/hooks/useScroll'
import * as S from './MyOrder.styles'

export default function MyOrderUI(props: any) {
  const { scrollRef } = useScroll()

  return (
    <S.Wrapper ref={scrollRef}>
      <S.MyHeaderWrapper>
        <S.MyHeaderTextWrapper>
          <S.MyPurchaseText
            id="myPurchase"
            isClickMyPurchase={props.isClickMyPurchase}
            onClick={props.onClickMyPurchase}>
            구매내역
          </S.MyPurchaseText>
          <S.MySalesText id="mySales" isClickMyPurchase={props.isClickMyPurchase} onClick={props.onClickMyPurchase}>
            판매내역
          </S.MySalesText>
        </S.MyHeaderTextWrapper>
      </S.MyHeaderWrapper>
    </S.Wrapper>
  )
}
