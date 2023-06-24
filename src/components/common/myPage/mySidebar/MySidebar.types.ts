import { IQuery } from '@/common/types/generated/types'
import { ChangeEvent, MouseEvent } from 'react'

export interface MySideUIProps {
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void
  onClickImage: () => void
  fileRef: any
  imageUrl?: string
  isClickMySide: boolean[]
  UserData?: Pick<IQuery, 'fetchUserLoggedIn'>
  onClickmyBtn: (event: MouseEvent<HTMLDivElement>) => void
  onClickEdit: () => void
  onClickChangeBtn: () => void
  onChageName: (event: ChangeEvent<HTMLInputElement>) => void
  isEdit: boolean
}

export interface IUpdateUserInputType {
  name?: string
}
