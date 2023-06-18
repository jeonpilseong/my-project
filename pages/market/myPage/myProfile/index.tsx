import { MyPageContainer } from '@/components/common/myPage/myContainer/myContainer'
import MySide from '@/components/common/myPage/mySidebar/MySidebar.container'
import MyProfile from '@/components/features/market/myPage/myProfile/MyProfile.container'

export default function MyBasketPage() {
  return (
    <MyPageContainer>
      <MySide />
      <MyProfile />
    </MyPageContainer>
  )
}
