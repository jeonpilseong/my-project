import BoardCommentList from '../../../../src/components/features/board/boardComment/list/BoardCommentList.container'
import BoardCommentWrite from '../../../../src/components/features/board/boardComment/write/BoardCommentWrite.container'
import BoardDetail from '../../../../src/components/features/board/detail/BoardDetail.container'

export default function BoardDetailPage() {
  return (
    <>
      <BoardDetail />
      <BoardCommentWrite />
      <BoardCommentList />
    </>
  )
}
