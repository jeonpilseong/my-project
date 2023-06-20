import { useRecoilState, useRecoilValueLoadable } from 'recoil'
import { useEffect } from 'react'

import { accessTokenState, logoutState, restoreAccessTokenLadable } from '../stores'

interface IUseAuthReturn {
  accessToken: string
}

export const useAuth = (): IUseAuthReturn => {
  // **** 상태값
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState)
  const [isLogout] = useRecoilState(logoutState)

  // **** 글로벌 함수 - restoreAccesstoken api 요청 결과를 공유
  const getNewAccessToken = useRecoilValueLoadable(restoreAccessTokenLadable)

  useEffect(() => {
    // ** 로그아웃하면 accessToken 새로 발급 받지 않는다.
    if (!isLogout) {
      void getNewAccessToken.toPromise().then(newAccessToken => {
        setAccessToken(newAccessToken ?? '')
      })
    }
  }, [])

  return { accessToken }
}
