import { MouseEvent, useState } from 'react'

import * as S from './Pagination.styles'
import { IPaginationProps } from './Pagination.types'

export default function Pagination(props: IPaginationProps) {
  // **** 상태
  const [startpage, setStartPage] = useState(1)
  const [isClickedPage, setIsClickedPage] = useState(1)
  const lastPage = Math.ceil((props.BoardsCount?.fetchBoardsCount ?? 10) / 10)

  // **** 페이지 버튼 클릭
  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    setIsClickedPage(Number(event.currentTarget.id))
    props.refetch({ page: Number(event.currentTarget.id) })
  }

  // **** 이전 페이지
  const onClickPrevPage = () => {
    if (startpage === 1) return
    setStartPage(startpage - 10)
    setIsClickedPage(startpage - 10)
    props.refetch({ page: startpage - 10 })
  }

  // **** 다음 페이지
  const onClickNextPage = () => {
    if (startpage + 10 <= lastPage) {
      setStartPage(startpage + 10)
      setIsClickedPage(startpage + 10)
      props.refetch({ page: startpage + 10 })
    }
  }

  return (
    <S.Wrapper>
      <S.Page onClick={onClickPrevPage}>&lt;</S.Page>
      {new Array(10).fill(1).map(
        (_, index) =>
          startpage + index <= lastPage && (
            <S.Page
              key={index + startpage}
              id={String(index + startpage)}
              onClick={onClickPage}
              isActive={startpage + index === isClickedPage}>
              {index + startpage}
            </S.Page>
          ),
      )}
      <S.Page onClick={onClickNextPage}>&gt;</S.Page>
    </S.Wrapper>
  )
}
