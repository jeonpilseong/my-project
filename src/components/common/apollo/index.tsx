import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'

import { IApolloSettingProps } from './apollo.types'

// **** 페이지 이동 시 리렌더링으로 인한 global state 초기화 방지
const GLOBAL_STATE = new InMemoryCache()

export default function ApolloSetting(props: IApolloSettingProps) {
  // **** 이미지 업로드 세팅
  const uploadLink = createUploadLink({
    uri: 'https://backendonline.codebootcamp.co.kr/graphql',
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
