import { MouseEvent } from 'react'

import { IQuery } from '@/common/types/generated/types'
import { ApolloQueryResult, OperationVariables } from '@apollo/client'

export interface IMarketListUIProps {
  UsedItemsData?: Pick<IQuery, 'fetchUseditems'>
  isSoldout: boolean
  isClickSelling: (event: MouseEvent<HTMLDivElement>) => void
  isClickSoldout: (event: MouseEvent<HTMLDivElement>) => void
  onClickBasket: (basket: any) => () => void
  refetch: (
    variables?: Partial<OperationVariables> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, 'fetchUseditems'>>>
  fetchMore: any
}
