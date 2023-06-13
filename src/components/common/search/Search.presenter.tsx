import { SearchOutlined } from '@ant-design/icons'
import { Controller } from 'react-hook-form'

import * as S from './Search.styles'
import { ISearchUIProps } from './Search.types'

export default function SearchUI(props: ISearchUIProps) {
  const dateFormat = 'YYYY.MM.DD'

  return (
    <S.Wrapper>
      <S.TitleSearch
        onChange={props.onChangeSearch}
        prefix={<SearchOutlined style={{ color: 'var(--gray-2)' }} />}
        placeholder="제목을 입력해 주세요."
      />
      <Controller
        control={props.control}
        name="dateValue"
        render={({ field: { onChange } }) => (
          <S.Calendar
            onChange={(value, dateString) => {
              onChange(dateString)
            }}
            format={dateFormat}
          />
        )}
      />

      <S.Btn onClick={props.onClickSearch} type="primary">
        검색하기
      </S.Btn>
    </S.Wrapper>
  )
}
