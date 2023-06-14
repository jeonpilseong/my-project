import { IQuery } from '@/common/types/generated/types'

export interface ILayoutHeaderUIProps {
  UserData?: Pick<IQuery, 'fetchUserLoggedIn'>
  onClickLogout: () => void
}
