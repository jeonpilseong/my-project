import { IQuery } from '@/common/types/generated/types'
import { ApolloQueryResult, OperationVariables } from '@apollo/client'
import { ChangeEvent } from 'react'

export interface IMarketSearchProps {
  refetch: (
    variables?: Partial<OperationVariables> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, 'fetchUseditems'>>>
}

export interface IMarketSearchUIProps {
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void
  onClickSearch: () => void
}
