import { ChangeEvent, memo, useState } from 'react'
import MarketSearchUI from './MarketSearch.presenter'
import { IMarketSearchProps } from './MarketSearch.types'

function MarketSearch(props: IMarketSearchProps) {
  // **** 상태값
  const [search, setSearch] = useState('')

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => setSearch(event.currentTarget.value)

  const onClickSearch = () => {
    props.refetch({
      search,
      page: 1,
    })
  }

  return <MarketSearchUI onChangeSearch={onChangeSearch} onClickSearch={onClickSearch} />
}
export default memo(MarketSearch)
