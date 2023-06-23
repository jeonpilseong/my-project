import { ChangeEvent, useState } from 'react'

import SearchUI from './Search.presenter'
import { ISearchProps } from './Search.types'
import { useForm } from 'react-hook-form'

export default function Search(props: ISearchProps) {
  // **** 상태값
  const [search, setSearch] = useState('')
  const { handleSubmit, control } = useForm()

  // **** 제목 입력
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value)
  }

  // **** 검색 버튼 클릭
  const onClickSearch = handleSubmit(data => {
    if (!data.dateValue || (!data.dateValue[0] && !data.dateValue[1])) {
      void props.refetch({ search, page: 1 })
    } else void props.refetch({ search, page: 1, startDate: data.dateValue[0], endDate: data.dateValue[1] })
  })

  return <SearchUI onChangeSearch={onChangeSearch} onClickSearch={onClickSearch} control={control} />
}
