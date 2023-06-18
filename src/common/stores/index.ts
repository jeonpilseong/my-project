import { atom, selector } from 'recoil'
import { v1 } from 'uuid'
import { getAccessToken } from '../libraries/getAccessToken'

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

// **** restoreAccessToken api 공유
export const restoreAccessTokenLadable = selector({
  key: `restoreAccessTokenLadable/${v1()}`,
  get: async () => {
    const newAccessToken = await getAccessToken()
    return newAccessToken
  },
})

// **** myPage 내 장터 클릭 여부
export const isClickMyProductState = atom({
  key: `isClickMyProductState/${v1()}`,
  default: true,
})

// **** myPage 내 프로필 클릭 여부
export const isClickMyProfileState = atom({
  key: `isClickMyProfileState/${v1()}`,
  default: false,
})
