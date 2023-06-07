import { IBoardComment } from '@/common/types/generated/types'
import { Dispatch, SetStateAction } from 'react'

export interface IBoardCommentWriteUIProps {
  isEdit?: boolean
  el?: IBoardComment
  contents?: string
  onClickAddComment: () => void
  onChangeStar: any
  onChangeContents: any
  onClickEdit: () => void
}

export interface IUpdateBoardCommentInput {
  contents?: string
  rating?: number
}

export interface IBoardCommentWriteProps {
  isEdit?: boolean
  setIsEdit?: Dispatch<SetStateAction<boolean>>
  el?: IBoardComment
}
