import { MouseEvent } from 'react'

export interface IBoardWriteUIProps {
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
  }
  password: string
  boardId: string
}
