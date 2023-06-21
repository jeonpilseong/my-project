import { useQuery } from '@apollo/client'
import { MouseEvent, useState } from 'react'
import MyBasketUI from './MyBasket.presenter'
import { IQuery, IQueryFetchUseditemsArgs } from '@/common/types/generated/types'
import { FETCH_USEDITEMS, FETCH_USER_LOGGED_IN } from './MyBasket.queries'

export default function MyBasket() {
  // **** 상태값
  const [isClickMyProduct, setIsClickMyProduct] = useState(true)

  // **** grapql api 요청
  const { data: UsedItemsData } = useQuery<Pick<IQuery, 'fetchUseditems'>, IQueryFetchUseditemsArgs>(FETCH_USEDITEMS)
  const { data: UserData } = useQuery<Pick<IQuery, 'fetchUserLoggedIn'>>(FETCH_USER_LOGGED_IN)

  // **** 나의상품 클릭
  const onClickMyBtn = (event: MouseEvent<HTMLHeadingElement>) => {
    if (event.currentTarget.id === 'myProduct') setIsClickMyProduct(true)
    if (event.currentTarget.id === 'myPick') setIsClickMyProduct(false)
  }

  return (
    <MyBasketUI
      UsedItemsData={UsedItemsData}
      UserData={UserData}
      isClickMyProduct={isClickMyProduct}
      onClickMyBtn={onClickMyBtn}
    />
  )
}
