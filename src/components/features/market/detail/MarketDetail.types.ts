import { IQuery } from '@/common/types/generated/types'

export interface IMarketDetailProps {
  UseditemData?: Pick<IQuery, 'fetchUseditem'>
  UserData?: Pick<IQuery, 'fetchUserLoggedIn'>
  onClickPayment: () => void
  onClickPick: () => void
  onClickDelete: () => void
  onClickEdit: () => void
}
