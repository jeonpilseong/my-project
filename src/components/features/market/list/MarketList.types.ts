import { MouseEvent } from 'react'

import { IQuery } from '@/common/types/generated/types'

export interface IMarketListUIProps {
  UsedItemsData?: Pick<IQuery, 'fetchUseditems'>
  isSoldout: boolean
  isClickSelling: (event: MouseEvent<HTMLDivElement>) => void
  isClickSoldout: (event: MouseEvent<HTMLDivElement>) => void
  onClickBasket: (basket: any) => () => void
  fetchMore: any
}
