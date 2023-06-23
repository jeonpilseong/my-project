import { atom, selector } from 'recoil'
import { v1 } from 'uuid'
import { getAccessToken } from '../libraries/getAccessToken'

// **** 방문 페이지 기록
export const visitedPageState = atom({
  key: `visitedPageState/${v1()}`,
  default: '',
})

// **** 수정, 등록 페이지 상태값
export const isEditState = atom({
  key: `isEditState/${v1()}`,
  default: true,
})

// **** 로그인 accessToken 상태값
export const accessTokenState = atom({
  key: `accessTokenState/${v1()}`,
  default: '',
})

// **** 로그아웃 상태값
export const logoutState = atom({
  key: `logoutState/${v1()}`,
  default: false,
})

// **** restoreAccessToken api 공유
export const restoreAccessTokenLadable = selector({
  key: `restoreAccessTokenLadable/${v1()}`,
  get: async () => {
    const newAccessToken = await getAccessToken()
    return newAccessToken
  },
})

// **** 마이페이지 - 내 장터 클릭 여부
export const isClickMyBasketState = atom({
  key: `isClickMyBasketState/${v1()}`,
  default: true,
})

// **** 마이페이지 - 내 구매내역 클릭 여부
export const isClickMyOrderState = atom({
  key: `isClickMyOrder/${v1()}`,
  default: false,
})

// **** 마이페이지 - 내 프로필 클릭 여부
export const isClickMyProfileState = atom({
  key: `isClickMyProfileState/${v1()}`,
  default: false,
})

// **** 포인트 충전 - 모달 생성 여부
export const isModalOpenState = atom({
  key: `isModalOpenState/${v1()}`,
  default: false,
})
