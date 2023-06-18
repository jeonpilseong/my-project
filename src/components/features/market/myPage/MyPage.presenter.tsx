import { useRecoilState } from 'recoil'

import MyHeader from '@/components/common/myPage/myHeader/myHeader.container'
import * as S from './MyPage.styles'
import { isClickMyProductState, isClickMyProfileState } from '@/common/stores'

const MY_PRODUCT_BUTTONS = ['나의상품', '마이찜']
const MY_HISTORY_BUTTONS = ['구매내역', '판매내역']

export default function MyPageUI() {
  const [isClickMyProduct] = useRecoilState(isClickMyProductState)
  const [isClickMyProfile] = useRecoilState(isClickMyProfileState)

  return (
    <S.Wrapper>
      {isClickMyProfile ? (
        <>비밀번호 수정</>
      ) : (
        <>{isClickMyProduct ? <MyHeader myBtns={MY_PRODUCT_BUTTONS} /> : <MyHeader myBtns={MY_HISTORY_BUTTONS} />}</>
      )}
    </S.Wrapper>
  )
}
