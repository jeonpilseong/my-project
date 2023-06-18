import { ChangeEvent, MouseEvent } from 'react'

export interface MySideUIProps {
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void
  onClickImage: () => void
  fileRef: any
  imageUrl?: string
  isClickMyBasket: boolean
  isClickMyOrder: boolean
  isClickMyProfile: boolean
  onClickmyBtn: (event: MouseEvent<HTMLDivElement>) => void
}
