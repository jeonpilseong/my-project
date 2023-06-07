import { useQuery } from '@apollo/client'

import BoardListUI from './BoardList.presenter'
import { FETCH_BOARDS } from './BoardList.queries'
import { IQuery } from '@/common/types/generated/types'

export default function BoardList() {
  // **** graphql api 요청
  const { data: BoardsData } = useQuery<Pick<IQuery, 'fetchBoards'>>(FETCH_BOARDS)

  return <BoardListUI BoardsData={BoardsData} />
}
