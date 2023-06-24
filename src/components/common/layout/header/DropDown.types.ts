import { IQuery } from '@/common/types/generated/types'

export interface IDropDownBtnProps {
  onClickLogout: () => void
  UserData?: Pick<IQuery, 'fetchUserLoggedIn'>
}
