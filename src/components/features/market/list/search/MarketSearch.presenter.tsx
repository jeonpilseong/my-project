import { SearchOutlined } from '@ant-design/icons'

import * as S from './MarketSearch.styles'

export default function MarketSearchUI() {
  return (
    <S.Wrapper>
      <S.TitleSearch
        prefix={<SearchOutlined style={{ color: 'var(--gray-2)' }} />}
        placeholder="제목을 입력해 주세요."
      />
    </S.Wrapper>
  )
}
