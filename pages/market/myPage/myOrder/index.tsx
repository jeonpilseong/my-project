import { MyPageContainer } from '@/components/common/myPage/myContainer/myContainer'
import MySide from '@/components/common/myPage/mySidebar/MySidebar.container'
import MyOrder from '@/components/features/market/myPage/myOrder/MyOrder.container'

export default function MyBasketPage() {
  return (
    <MyPageContainer>
      <MySide />
      <MyOrder />
    </MyPageContainer>
  )
}
