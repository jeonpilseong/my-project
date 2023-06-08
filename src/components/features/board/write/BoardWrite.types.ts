import { MouseEvent } from 'react'
import { Address } from 'react-daum-postcode'

import { IQuery } from '@/common/types/generated/types'

export interface IBoardWriteUIProps {
  address: string
  zipcode: string
  BoardData?: Pick<IQuery, 'fetchBoard'>
  handleSubmit: any
  control: any
  onClickSubmit: any
  formState: any
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void
  onclickAddress: () => void
  onComplete: (data: Address) => void
}

export interface IVariables {
  updateBoardInput: {
    title?: string
    contents?: string
    youtubeUrl?: string
  }
  password: string
  boardId: string
}
