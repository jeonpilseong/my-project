import * as S from './BoardCommentWrite.styles'
import { Rate } from 'antd'

export default function BoardCommentWriteUI() {
  return (
    <S.Wrapper>
      <S.Title>
        <S.TitleImg src="/images/boardComment/Comment.png" />
        <S.TitleText>댓글</S.TitleText>
      </S.Title>
      <Rate />
      <S.CommentInput showCount rows={5} maxLength={100} placeholder="내용을 입력해 주세요." />
      <S.Btn type="primary">Add Comment</S.Btn>
    </S.Wrapper>
  )
}
