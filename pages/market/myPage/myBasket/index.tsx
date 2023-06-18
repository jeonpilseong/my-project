import { MyPageContainer } from '@/components/common/myPage/myContainer/myContainer'
import MySide from '@/components/common/myPage/mySidebar/MySidebar.container'
import MyBasket from '@/components/features/market/myPage/myBasket/MyBasket.container'

export default function MyBasketPage() {
  return (
    <MyPageContainer>
      <MySide />
      <MyBasket />
    </MyPageContainer>
  )
}
