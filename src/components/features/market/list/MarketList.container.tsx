import { useQuery } from '@apollo/client'
import { useState } from 'react'

import MarketListUI from './MarketList.presenter'
import { FETCH_USEDITEMS } from './MarketList.queries'
import { IQuery, IQueryFetchUseditemsArgs } from '@/common/types/generated/types'

export default function MarketList() {
  // **** 상태값
  const [isSoldout, setIsSoldout] = useState(false)

  // **** graphql api 요청
  const { data: UsedItemsData, fetchMore } = useQuery<Pick<IQuery, 'fetchUseditems'>, IQueryFetchUseditemsArgs>(
    FETCH_USEDITEMS,
    {
      variables: {
        isSoldout,
      },
    },
  )

  // **** 판매 여부
  const isClickSelling = () => {
    setIsSoldout(false)
  }

  const isClickSoldout = () => {
    setIsSoldout(true)
  }

  return (
    <MarketListUI
      UsedItemsData={UsedItemsData}
      isSoldout={isSoldout}
      isClickSelling={isClickSelling}
      isClickSoldout={isClickSoldout}
      fetchMore={fetchMore}
    />
  )
}
