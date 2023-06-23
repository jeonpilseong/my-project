import { IQuery } from '@/common/types/generated/types'

export interface IMarketDetailProps {
  UseditemData?: Pick<IQuery, 'fetchUseditem'>
  onClickPayment: () => void
  onClickPick: () => void
}
