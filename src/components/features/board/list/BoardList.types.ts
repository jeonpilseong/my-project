import { IQuery } from '@/common/types/generated/types'

export interface IBoardListUIProps {
  BoardsData?: Pick<IQuery, 'fetchBoards'>
}
