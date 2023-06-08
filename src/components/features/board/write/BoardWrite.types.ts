import { IQuery } from '@/common/types/generated/types'
import { MouseEvent } from 'react'

export interface IBoardWriteUIProps {
  BoardData?: Pick<IQuery, 'fetchBoard'>
  handleSubmit: any
  control: any
  onClickSubmit: any
  formState: any
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void
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
