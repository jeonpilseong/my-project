import { IQuery } from '@/common/types/generated/types'
import { ApolloQueryResult, OperationVariables } from '@apollo/client'
import { ChangeEvent } from 'react'

export interface ISearchProps {
  refetch: (
    variables?: Partial<OperationVariables> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, 'fetchBoards'>>>
}

export interface ISearchUIProps {
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void
  onClickSearch: () => void
  control: any
}
