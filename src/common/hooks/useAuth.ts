import { Modal } from 'antd'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useRecoilValueLoadable } from 'recoil'

import { restoreAccessTokenLadable } from '../stores'

export const useAuth = () => {
  const router = useRouter()

  // **** 글로벌 함수 - restoreAccesstoken api 요청 결과를 공유
  const aaa = useRecoilValueLoadable(restoreAccessTokenLadable)

  useEffect(() => {
    void aaa.toPromise().then(newAccessToken => {
      if (newAccessToken === undefined) {
        Modal.error({ content: '로그인 후 이용 가능합니다.' })
        router.push('login/login')
      }
    })
  }, [])
}
