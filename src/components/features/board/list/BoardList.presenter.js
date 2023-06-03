import * as S from './BoardList.styles'

export default function BoardListUI(props) {
  return (
    <S.Wrapper>
      <S.BoardHeader>
        <S.ColumnNumber>번호</S.ColumnNumber>
        <S.ColumnTitle>제목</S.ColumnTitle>
        <S.ColumnWriter>작성자</S.ColumnWriter>
        <S.ColumnDate>날짜</S.ColumnDate>
      </S.BoardHeader>

      <S.Row>
        <S.ColumnNumber>1</S.ColumnNumber>
        <S.ColumnTitle>게시글 제목입니다.</S.ColumnTitle>
        <S.ColumnWriter>작성자</S.ColumnWriter>
        <S.ColumnDate>2020.09.28</S.ColumnDate>
      </S.Row>

      <S.BoardFooter>
        <S.HiddenDiv />
        <S.BoardWriteBtn>
          <S.BoardWriteBtnImg src="/images/list/Write.png" />
          <S.BoardWriteBtnText>게시글 등록하기</S.BoardWriteBtnText>
        </S.BoardWriteBtn>
      </S.BoardFooter>
    </S.Wrapper>
  )
}
