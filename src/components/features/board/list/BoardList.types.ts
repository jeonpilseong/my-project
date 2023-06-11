import { IQuery } from '@/common/types/generated/types'
import { ApolloQueryResult, OperationVariables } from '@apollo/client'

export interface IBoardListUIProps {
  BoardsData?: Pick<IQuery, 'fetchBoards'>
  refetch: (
    variables?: Partial<OperationVariables> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, 'fetchBoards'>>>
  BoardsCount?: Pick<IQuery, 'fetchBoardsCount'>
}
