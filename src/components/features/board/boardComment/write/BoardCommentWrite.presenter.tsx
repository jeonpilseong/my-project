import { Rate } from 'antd'

import * as S from './BoardCommentWrite.styles'
import { IBoardCommentWriteUIProps } from './BoardCommentWrite.types'

export default function BoardCommentWriteUI(props: IBoardCommentWriteUIProps) {
  return (
    <>
      {!props.isEdit && (
        <S.Wrapper>
          <S.Title>
            <S.TitleImg src="/images/boardComment/Comment.png" />
            <S.TitleText>댓글</S.TitleText>
          </S.Title>

          <Rate onChange={props.onChangeStar} />
          <S.CommentInput
            onChange={props.onChangeContents}
            showCount
            rows={5}
            maxLength={100}
            placeholder="댓글을 입력해 주세요."
          />

          <S.Btn onClick={props.onClickAddComment} type="primary">
            Add Comment
          </S.Btn>
        </S.Wrapper>
      )}

      {props.isEdit && (
        <S.EditWrapper>
          <Rate onChange={props.onChangeStar} defaultValue={props.el?.rating} />
          <S.CommentInput
            onChange={props.onChangeContents}
            showCount
            rows={5}
            maxLength={100}
            placeholder="댓글을 입력해 주세요."
            value={props.contents || (props.el?.contents ?? '')}
          />

          <S.Btn onClick={props.onClickEdit} type="primary">
            Edit Comment
          </S.Btn>
        </S.EditWrapper>
      )}
    </>
  )
}
