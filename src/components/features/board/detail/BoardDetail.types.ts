import { IQuery } from '@/common/types/generated/types'

export interface IBoardDetailUIProps {
  BoardData?: Pick<IQuery, 'fetchBoard'>
  onClickDelete: () => void
  onClickUpBtn: () => void
  onClickDownBtn: () => void
}
