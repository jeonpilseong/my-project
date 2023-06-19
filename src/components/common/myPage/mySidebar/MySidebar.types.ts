import { IQuery } from '@/common/types/generated/types'
import { ChangeEvent, MouseEvent } from 'react'

export interface MySideUIProps {
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void
  onClickImage: () => void
  fileRef: any
  imageUrl?: string
  isClickMyBasket: boolean
  isClickMyOrder: boolean
  isClickMyProfile: boolean
  UserData?: Pick<IQuery, 'fetchUserLoggedIn'>
  onClickmyBtn: (event: MouseEvent<HTMLDivElement>) => void
}
