import { UserOutlined } from '@ant-design/icons'
import { Rate } from 'antd'

import * as S from './BoardCommentList.styles'

export default function BoardCommentListUI() {
  return (
    <S.Wrapper>
      <S.AvatarWrapper>
        <S.AvatarIcon icon={<UserOutlined />} />
      </S.AvatarWrapper>

      <S.ContentsWrapper>
        <S.ProfileWrapper>
          <S.Writer>작성자</S.Writer>
          <S.RateIcon disabled value={3} />
        </S.ProfileWrapper>
        <S.Contents>진짜 유익하고 정말 필요한 정리인 것 같아요!</S.Contents>
        <S.Date>2023.02.22</S.Date>
      </S.ContentsWrapper>

      <S.EditWrapper>
        <S.EditIcon src="/images/boardcomment/Edit.png" />
        <S.DeleteIcon src="/images/boardcomment/Delete.png" />
      </S.EditWrapper>
    </S.Wrapper>
  )
}
