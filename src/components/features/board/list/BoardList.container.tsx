import { useQuery } from '@apollo/client'

import BoardListUI from './BoardList.presenter'
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from './BoardList.queries'
import { IQuery, IQueryFetchBoardsCountArgs } from '@/common/types/generated/types'

export default function BoardList() {
  // **** graphql api 요청
  const { data: BoardsData, refetch } = useQuery<Pick<IQuery, 'fetchBoards'>>(FETCH_BOARDS)
  const { data: BoardsCount } = useQuery<Pick<IQuery, 'fetchBoardsCount'>, IQueryFetchBoardsCountArgs>(
    FETCH_BOARDS_COUNT,
  )

  return (
    <>
      <BoardListUI BoardsData={BoardsData} refetch={refetch} BoardsCount={BoardsCount} />
    </>
  )
}
