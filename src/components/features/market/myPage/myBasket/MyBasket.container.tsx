import { useQuery } from '@apollo/client'
import { MouseEvent, useState } from 'react'
import MyBasketUI from './MyBasket.presenter'
import { IQuery, IQueryFetchUseditemsArgs, IQueryFetchUseditemsIPickedArgs } from '@/common/types/generated/types'
import {
  FETCH_USEDITEMS,
  FETCH_USEDITEMS_COUNT_IPICKED,
  FETCH_USEDITEMS_IPICKED,
  FETCH_USER_LOGGED_IN,
} from './MyBasket.queries'

export default function MyBasket() {
  // **** 상태값
  const [isClickMyProduct, setIsClickMyProduct] = useState(true)

  // **** graphql api 요청
  const { data: UsedItemsData, refetch: UsedItemsRefetch } = useQuery<
    Pick<IQuery, 'fetchUseditems'>,
    IQueryFetchUseditemsArgs
  >(FETCH_USEDITEMS)
  const { data: UserData } = useQuery<Pick<IQuery, 'fetchUserLoggedIn'>>(FETCH_USER_LOGGED_IN)
  const { data: MyPickData, refetch: MyPickDataRefetch } = useQuery<
    Pick<IQuery, 'fetchUseditemsIPicked'>,
    IQueryFetchUseditemsIPickedArgs
  >(FETCH_USEDITEMS_IPICKED, {
    variables: {
      search: '',
    },
  })
  const { data: MyPickCount } = useQuery<Pick<IQuery, 'fetchUseditemsCountIPicked'>>(FETCH_USEDITEMS_COUNT_IPICKED)

  // **** 나의상품 클릭
  const onClickMyBtn = (event: MouseEvent<HTMLHeadingElement>) => {
    if (event.currentTarget.id === 'myProduct') setIsClickMyProduct(true)
    if (event.currentTarget.id === 'myPick') setIsClickMyProduct(false)
  }

  return (
    <MyBasketUI
      UsedItemsData={UsedItemsData}
      UserData={UserData}
      MyPickData={MyPickData}
      MyPickCount={MyPickCount}
      isClickMyProduct={isClickMyProduct}
      onClickMyBtn={onClickMyBtn}
      UsedItemsRefetch={UsedItemsRefetch}
      MyPickDataRefetch={MyPickDataRefetch}
    />
  )
}
