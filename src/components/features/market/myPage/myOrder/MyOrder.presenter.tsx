import { useScroll } from '@/common/hooks/useScroll'
import * as S from './MyOrder.styles'

export default function MyOrderUI() {
  const { scrollRef } = useScroll()

  return (
    <S.Wrapper ref={scrollRef}>
      <S.MyHeaderWrapper>
        <S.MyHeaderTextWrapper>
          <S.MyheaderText>구매내역</S.MyheaderText>
          <S.MyheaderText>판매내역</S.MyheaderText>
        </S.MyHeaderTextWrapper>
      </S.MyHeaderWrapper>
    </S.Wrapper>
  )
}
