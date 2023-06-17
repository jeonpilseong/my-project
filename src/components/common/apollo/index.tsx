import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink, fromPromise } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'
import { useRecoilState, useRecoilValueLoadable } from 'recoil'
import { useEffect } from 'react'
import { onError } from '@apollo/client/link/error'

import { IApolloSettingProps } from './apollo.types'
import { accessTokenState, restoreAccessTokenLadable } from '@/common/stores'
import { getAccessToken } from '@/common/libraries/getAccessToken'

// **** 페이지 이동 시 리렌더링으로 인한 global state 초기화 방지
const GLOBAL_STATE = new InMemoryCache()

export default function ApolloSetting(props: IApolloSettingProps) {
  const [accesToken, setAccessToken] = useRecoilState(accessTokenState)

  // **** 글로벌 함수 - restoreAccesstoken api 요청 결과를 공유
  const aaa = useRecoilValueLoadable(restoreAccessTokenLadable)

  // **** 프리렌더링 무시
  useEffect(() => {
    // ** 새로고침 시 accessToken 새로 발급
    void aaa.toPromise().then(newAccessToken => {
      setAccessToken(newAccessToken ?? '')
    })
  }, [])

  // **** 토큰 만료 에러 처리
  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // ** 에러 캐치
    if (typeof graphQLErrors !== 'undefined') {
      for (const err of graphQLErrors) {
        // ** 해당 에러가 토큰만료 에러인지 체크(UNAUTHENTICATED)
        if (err.extensions.code === 'UNAUTHENTICATED') {
          return fromPromise(
            getAccessToken().then(newAccessToken => {
              setAccessToken(newAccessToken ?? '')

              // ** 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기
              operation.setContext({
                headers: {
                  ...operation.getContext().headers, // Authorization: Bearer accessToken  => 만료된 토큰이 추가된 상태
                  Authorization: `Bearer ${newAccessToken}`, // 새로 발급 받은 토큰으로 교체하기
                },
              })
            }),
          ).flatMap(() => forward(operation)) // ** 방금 수정한 쿼리 재요청하기
        }
      }
    }
  })

  // **** 이미지 업로드 세팅
  const uploadLink = createUploadLink({
    uri: 'https://backendonline.codebootcamp.co.kr/graphql',

    // ** graphql api 요청할 때마다 http header에 accessToken 추가'
    headers: {
      Authorization: `Bearer ${accesToken}`,
    },

    // ** 재발급 받은 accessToken 쿠키에 저장 허용
    credentials: 'include',
  })

  // **** graphql 세팅
  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: GLOBAL_STATE,
  })

  return (
    // prettier-ignore
    <ApolloProvider client={client}>
      {props.children}
    </ApolloProvider>
  )
}
