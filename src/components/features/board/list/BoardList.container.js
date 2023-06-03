import { useQuery } from '@apollo/client'

import BoardListUI from './BoardList.presenter'
import { FETCH_BOARDS } from './BoardList.queries'

export default function BoardList() {
  // **** graphql api 요청
  const { data: BoardsData } = useQuery(FETCH_BOARDS)

  return <BoardListUI BoardsData={BoardsData} />
}
