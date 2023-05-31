import { Global } from '@emotion/react'

import { globalStyles } from '../src/common/styles/globalStyles'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

export default function App({ Component, pageProps }) {
  // **** graphql 세팅
  const client = new ApolloClient({
    uri: 'http://backend-example.codebootcamp.co,kr/graphql',
    cache: new InMemoryCache(), // 컴퓨터 메모리에다가 백엔드에서 받아온 데이터 임시로 저장해놓기
  })

  return (
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
