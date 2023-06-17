import { gql, GraphQLClient } from 'graphql-request'

import { IMutation } from '../types/generated/types'

const RESTORE_ACCESS_TOKEN = gql`
  mutation {
    restoreAccessToken {
      accessToken
    }
  }
`

export const getAccessToken = async () => {
  try {
    // ** refreshToken으로 accessToken을 재발급 받기
    const graphQLClient = new GraphQLClient('https://backendonline.codebootcamp.co.kr/graphql', {
      credentials: 'include', // ** 재발급 받은 accessToken 쿠키에 저장 허용
    })

    // ** ApolloClient 실행 없이 query, mutaion 재요청하기
    const result = await graphQLClient.request<Pick<IMutation, 'restoreAccessToken'>>(RESTORE_ACCESS_TOKEN)
    const newAccessToken = result.restoreAccessToken.accessToken
    return newAccessToken
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
  }
}
