import { useQuery } from '@apollo/client'
import { useState } from 'react'

import MarketListUI from './MarketList.presenter'
import { FETCH_USEDITEMS } from './MarketList.queries'
import { IQuery, IQueryFetchUseditemsArgs, IUseditem } from '@/common/types/generated/types'
import { useRouter } from 'next/router'

export default function MarketList() {
  const router = useRouter()

  // **** 상태값
  const [isSoldout, setIsSoldout] = useState(false)

  // **** graphql api 요청
  const {
    data: UsedItemsData,
    fetchMore,
    refetch,
  } = useQuery<Pick<IQuery, 'fetchUseditems'>, IQueryFetchUseditemsArgs>(FETCH_USEDITEMS, {
    variables: {
      isSoldout,
      search: '',
      page: 1,
    },
  })

  // **** 판매 여부
  const isClickSelling = () => {
    setIsSoldout(false)
  }

  const isClickSoldout = () => {
    setIsSoldout(true)
  }

  // **** 장바구니 담기
  const onClickBasket = (basket: IUseditem) => () => {
    // ** 장바구니가 비어있을 경우
    if (!localStorage.getItem('baskets')) {
      const baskets = [basket]
      localStorage.setItem('baskets', JSON.stringify(baskets))
      return router.push(`/market/detail/${basket._id}`)
    }

    // ** 기존 장바구니 가져오기
    const baskets: IUseditem[] = JSON.parse(localStorage.getItem('baskets') ?? '[]')

    // ** 이미 담겼는지 확인하기
    const temp = baskets.filter(el => el._id === basket._id)
    if (temp.length >= 1) return router.push(`/market/detail/${basket._id}`)

    // ** 내가 클릭한 상품 장바구니에 추가하기
    baskets.push(basket)

    // ** 장바구니에 상품 4개만 담기
    if (baskets.length >= 4) baskets.shift()

    // ** 추가된 장바구니로 변경하기
    localStorage.setItem('baskets', JSON.stringify(baskets))
    router.push(`/market/detail/${basket._id}`)
  }

  return (
    <MarketListUI
      UsedItemsData={UsedItemsData}
      isSoldout={isSoldout}
      isClickSelling={isClickSelling}
      isClickSoldout={isClickSoldout}
      onClickBasket={onClickBasket}
      fetchMore={fetchMore}
      refetch={refetch}
    />
  )
}
