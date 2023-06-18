import { ChangeEvent, MouseEvent } from 'react'

export interface MySideUIProps {
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void
  onClickImage: () => void
  fileRef: any
  imageUrl?: string
  myBtnId: string
  onClickmyBtn: (event: MouseEvent<HTMLDivElement>) => void
}
