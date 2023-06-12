import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'

import { IApolloSettingProps } from './apollo.types'

export default function ApolloSetting(props: IApolloSettingProps) {
  // **** 이미지 업로드 세팅
  const uploadLink = createUploadLink({
    uri: 'https://backendonline.codebootcamp.co.kr/graphql',
  })

  // **** graphql 세팅
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(), // 컴퓨터 메모리에다가 백엔드에서 받아온 데이터 임시로 저장해놓기
  })

  return (
    // prettier-ignore
    <ApolloProvider client={client}>
      {props.children}
    </ApolloProvider>
  )
}
