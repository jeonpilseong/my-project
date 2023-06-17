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
  key: 'accessTokenState',
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
