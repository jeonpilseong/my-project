import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import InfiniteScroll from 'react-infinite-scroller'

import BoardCommentItem from './BoardCommentList.presenter'
import { FETCH_BOARD_COMMENTS } from './BoardCommentList.queries'
import { IQuery, IQueryFetchBoardCommentsArgs } from '@/common/types/generated/types'

export default function BoardCommentList() {
  const router = useRouter()

  // **** graphql api 요청
  const { data: commentData, fetchMore } = useQuery<Pick<IQuery, 'fetchBoardComments'>, IQueryFetchBoardCommentsArgs>(
    FETCH_BOARD_COMMENTS,
    {
      variables: {
        boardId: String(router.query.boardId),
      },
    },
  )

  // **** 댓글 무한스크롤
  const onLoadMore = () => {
    if (commentData === undefined) return

    fetchMore({
      variables: { page: Math.ceil((commentData?.fetchBoardComments.length ?? 10) / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchBoardComments === undefined) {
          return {
            fetchBoardComments: [...prev.fetchBoardComments],
          }
        }

        return {
          fetchBoardComments: [...prev.fetchBoardComments, ...fetchMoreResult.fetchBoardComments],
        }
      },
    })
  }

  return (
    <>
      <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
        {commentData?.fetchBoardComments.map(el => <BoardCommentItem key={el._id} el={el} />) ?? <></>}
      </InfiniteScroll>
    </>
  )
}
