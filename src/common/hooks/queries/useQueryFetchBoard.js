import { gql, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

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
