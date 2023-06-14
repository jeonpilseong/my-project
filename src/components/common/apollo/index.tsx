import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'
import { useRecoilState } from 'recoil'

import { IApolloSettingProps } from './apollo.types'
import { accessTokenState } from '@/common/stores'
import { useEffect } from 'react'

// **** 페이지 이동 시 리렌더링으로 인한 global state 초기화 방지
const GLOBAL_STATE = new InMemoryCache()

export default function ApolloSetting(props: IApolloSettingProps) {
  const [accesToken, setAccessToken] = useRecoilState(accessTokenState)

  // **** 프리렌더링 무시하고 브라우저에서 localStorage 조회
  useEffect(() => {
    // ** 새로고침 시 accessToken 유지
    const result = localStorage.getItem('accessToken')
    setAccessToken(result ?? '')
  }, [])

  // **** 이미지 업로드 세팅
  const uploadLink = createUploadLink({
    uri: 'https://backendonline.codebootcamp.co.kr/graphql',

    // ** graphql api 요청할 때마다 http header에 accessToken 추가'
    headers: {
      Authorization: `Bearer ${accesToken}`,
    },
  })

  // **** graphql 세팅
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: GLOBAL_STATE,
  })

  return (
    // prettier-ignore
    <ApolloProvider client={client}>
      {props.children}
    </ApolloProvider>
  )
}
