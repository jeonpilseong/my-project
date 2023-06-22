import { useApolloClient, useMutation, useQuery } from '@apollo/client'

import LayoutHeaderUI from './Header.presenter'
import { Modal } from 'antd'
import { useRecoilState } from 'recoil'
import { useRouter } from 'next/router'

import { FETCH_USER_LOGGED_IN, LOGOUT_USER } from './Header.queries'
import { IMutation, IQuery } from '@/common/types/generated/types'
import { accessTokenState, logoutState, visitedPageState } from '@/common/stores'

export default function LayoutHeader() {
  const router = useRouter()
  const client = useApolloClient()

  // **** 상태값
  const [, setAccessToken] = useRecoilState(accessTokenState)
  const [, setVisitedPage] = useRecoilState(visitedPageState)
  const [, setIsLogout] = useRecoilState(logoutState)

  // **** graphql api 요청
  const { data: UserData } = useQuery<Pick<IQuery, 'fetchUserLoggedIn'>>(FETCH_USER_LOGGED_IN)
  const [logout] = useMutation<Pick<IMutation, 'logoutUser'>>(LOGOUT_USER)
  console.log(UserData?.fetchUserLoggedIn.picture)

  // **** logout
  const onClickLogout = async () => {
    try {
      const result = await logout()

      if (result.data?.logoutUser) {
        Modal.success({ content: '로그아웃 되었습니다.' })

        // **** accessToken, 캐시 초기화
        setAccessToken('')
        setVisitedPage('')
        client.clearStore()
        setIsLogout(true)
        void router.push('/login/login', undefined, { scroll: false })
      }
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  return <LayoutHeaderUI UserData={UserData} onClickLogout={onClickLogout} />
}
