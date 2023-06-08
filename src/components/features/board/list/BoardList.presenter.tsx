import { useMoveToPage } from '@/common/hooks/useMoveToPage'
import * as S from './BoardList.styles'
import { IBoardListUIProps } from './BoardList.types'

export default function BoardListUI(props: IBoardListUIProps) {
  const { onClickMoveToPage } = useMoveToPage()

  return (
    <S.Wrapper>
      <S.BoardHeader>
        <S.ColumnNumber>번호</S.ColumnNumber>
        <S.ColumnTitle>제목</S.ColumnTitle>
        <S.ColumnWriter>작성자</S.ColumnWriter>
        <S.ColumnDate>날짜</S.ColumnDate>
      </S.BoardHeader>

      {props.BoardsData?.fetchBoards.map(el => (
        <S.Row key={el._id}>
          <S.ColumnNumber>{el._id.slice(-4).toUpperCase()}</S.ColumnNumber>
          <S.ColumnTitle onClick={onClickMoveToPage(`/boards/detail/${el._id}`)}>{el.title}</S.ColumnTitle>
          <S.ColumnWriter>{el.writer}</S.ColumnWriter>
          <S.ColumnDate>{el.createdAt.slice(0, 10)}</S.ColumnDate>
        </S.Row>
      ))}

      <S.BoardFooter>
        <S.HiddenDiv />
        <S.Btn onClick={onClickMoveToPage(`/boards/new`)}>
          <S.BtnImg src="/images/list/Write.png" />
          <S.BtnText>게시글 등록하기</S.BtnText>
        </S.Btn>
      </S.BoardFooter>
    </S.Wrapper>
  )
}