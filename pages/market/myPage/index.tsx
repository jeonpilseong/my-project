import { MyPageContainer } from '@/components/common/myPage/myContainer/myContainer'
import MySide from '@/components/common/myPage/mySidebar/MySidebar.container'
import MyPage from '@/components/features/market/myPage/MyPage.container'

export default function MyHistoryPage() {
  return (
    <MyPageContainer>
      <MySide />
      <MyPage />
    </MyPageContainer>
  )
}
