import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { IApolloSettingProps } from './apollo.types'

export default function ApolloSetting(props: IApolloSettingProps) {
  // **** graphql 세팅
  const client = new ApolloClient({
    uri: 'https://backendonline.codebootcamp.co.kr/graphql',
    cache: new InMemoryCache(), // 컴퓨터 메모리에다가 백엔드에서 받아온 데이터 임시로 저장해놓기
  })

  return (
    // prettier-ignore
    <ApolloProvider client={client}>
      {props.children}
    </ApolloProvider>
  )
}
