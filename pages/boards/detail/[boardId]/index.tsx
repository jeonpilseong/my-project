import BoardCommentList from '@/components/features/board/boardComment/list/BoardCommentList.container'
import BoardCommentWrite from '@/components/features/board/boardComment/write/BoardCommentWrite.container'
import BoardDetail from '@/components/features/board/detail/BoardDetail.container'

export default function BoardDetailPage() {
  return (
    <>
      <BoardDetail />
      <BoardCommentWrite />
      <BoardCommentList />
      <div style={{ marginBottom: '10rem' }} />
    </>
  )
}
