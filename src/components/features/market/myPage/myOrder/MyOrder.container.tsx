import { MouseEvent, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { useQuery } from '@apollo/client'

import MyOrderUI from './MyOrder.presenter'
import { isClickMySideState } from '@/common/stores'
import {
  FETCH_POINT_TRANSACTIONS_COUNT_OF_BUYING,
  FETCH_POINT_TRANSACTIONS_COUNT_OF_LOADING,
  FETCH_POINT_TRANSACTIONS_COUNT_OF_SELLING,
  FETCH_POINT_TRANSACTIONS_OF_BUYING,
  FETCH_POINT_TRANSACTIONS_OF_LOADING,
  FETCH_POINT_TRANSACTIONS_OF_SELLING,
} from './MyOrder.queries'
import {
  IQuery,
  IQueryFetchPointTransactionsOfBuyingArgs,
  IQueryFetchPointTransactionsOfLoadingArgs,
  IQueryFetchPointTransactionsOfSellingArgs,
} from '@/common/types/generated/types'

export default function MyOrder() {
  // **** 상태값
  const [isClickHistory, SetIsClickHistory] = useState([true, false, false])
  const [, setIsClickMySide] = useRecoilState(isClickMySideState)

  // **** 페이지 마운트 시 사이드 메뉴 상태값 초기화
  useEffect(() => {
    setIsClickMySide([false, true, false])
  }, [])

  // **** graphql api 요청하기
  const { data: PointData, refetch: PointDataRefetch } = useQuery<
    Pick<IQuery, 'fetchPointTransactionsOfLoading'>,
    IQueryFetchPointTransactionsOfLoadingArgs
  >(FETCH_POINT_TRANSACTIONS_OF_LOADING, {
    variables: {
      search: '',
    },
  })

  const { data: BuyingData, refetch: BuyingDataRefetch } = useQuery<
    Pick<IQuery, 'fetchPointTransactionsOfBuying'>,
    IQueryFetchPointTransactionsOfBuyingArgs
  >(FETCH_POINT_TRANSACTIONS_OF_BUYING)

  const { data: SellingData, refetch: SellingDataRefetch } = useQuery<
    Pick<IQuery, 'fetchPointTransactionsOfSelling'>,
    IQueryFetchPointTransactionsOfSellingArgs
  >(FETCH_POINT_TRANSACTIONS_OF_SELLING)

  const { data: PointDataCount } = useQuery<Pick<IQuery, 'fetchPointTransactionsCountOfLoading'>>(
    FETCH_POINT_TRANSACTIONS_COUNT_OF_LOADING,
  )

  const { data: BuyingDataCount } = useQuery<Pick<IQuery, 'fetchPointTransactionsCountOfBuying'>>(
    FETCH_POINT_TRANSACTIONS_COUNT_OF_BUYING,
  )

  const { data: SellingDataCount } = useQuery<Pick<IQuery, 'fetchPointTransactionsCountOfSelling'>>(
    FETCH_POINT_TRANSACTIONS_COUNT_OF_SELLING,
  )

  // **** 구매내역 클릭
  const onClickMyPurchase = (event: MouseEvent<HTMLHeadingElement>) => {
    if (event.currentTarget.id === 'myPoint') SetIsClickHistory([true, false, false])
    if (event.currentTarget.id === 'myPurchase') SetIsClickHistory([false, true, false])
    if (event.currentTarget.id === 'mySales') SetIsClickHistory([false, false, true])
  }

  return (
    <MyOrderUI
      isClickHistory={isClickHistory}
      onClickMyPurchase={onClickMyPurchase}
      PointData={PointData}
      BuyingData={BuyingData}
      SellingData={SellingData}
      PointDataRefetch={PointDataRefetch}
      BuyingDataRefetch={BuyingDataRefetch}
      SellingDataRefetch={SellingDataRefetch}
      PointDataCount={PointDataCount}
      BuyingDataCount={BuyingDataCount}
      SellingDataCount={SellingDataCount}
    />
  )
}
