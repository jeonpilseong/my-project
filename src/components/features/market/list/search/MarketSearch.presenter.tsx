import { SearchOutlined } from '@ant-design/icons'

import * as S from './MarketSearch.styles'
import { IMarketSearchUIProps } from './MarketSearch.types'

export default function MarketSearchUI(props: IMarketSearchUIProps) {
  return (
    <>
      <S.Wrapper>
        <S.TitleSearch
          prefix={<SearchOutlined style={{ color: 'var(--gray-2)' }} />}
          placeholder="제목을 입력해 주세요."
          onChange={props.onChangeSearch}
        />
      </S.Wrapper>

      <S.Btn onClick={props.onClickSearch} type="primary">
        상품 검색하기
      </S.Btn>
    </>
  )
}
