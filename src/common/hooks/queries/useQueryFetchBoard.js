import { gql, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

// **** 커스텀 훅 - 특정 페이지 게시글 정보 불러오기
const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`

export const useQueryFetchBoard = () => {
  const router = useRouter()
  const result = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  })

  return result
}
