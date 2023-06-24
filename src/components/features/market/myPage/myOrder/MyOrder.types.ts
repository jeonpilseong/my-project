import { IQuery } from '@/common/types/generated/types'
import { ApolloQueryResult, OperationVariables } from '@apollo/client'
import { MouseEvent } from 'react'

export interface IMyOrderUIProps {
  isClickHistory: boolean[]
  onClickMyPurchase: (event: MouseEvent<HTMLHeadingElement>) => void
  PointData?: Pick<IQuery, 'fetchPointTransactionsOfLoading'>
  BuyingData?: Pick<IQuery, 'fetchPointTransactionsOfBuying'>
  SellingData?: Pick<IQuery, 'fetchPointTransactionsOfSelling'>
  PointDataCount?: Pick<IQuery, 'fetchPointTransactionsCountOfLoading'>
  BuyingDataCount?: Pick<IQuery, 'fetchPointTransactionsCountOfBuying'>
  SellingDataCount?: Pick<IQuery, 'fetchPointTransactionsCountOfSelling'>
  PointDataRefetch: (
    variables?: Partial<OperationVariables> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, 'fetchPointTransactionsOfLoading'>>>
  BuyingDataRefetch: (
    variables?: Partial<OperationVariables> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, 'fetchPointTransactionsOfBuying'>>>
  SellingDataRefetch: (
    variables?: Partial<OperationVariables> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, 'fetchPointTransactionsOfSelling'>>>
}
