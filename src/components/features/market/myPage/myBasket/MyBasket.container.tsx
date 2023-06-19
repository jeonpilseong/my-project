import { useQuery } from '@apollo/client'
import MyBasketUI from './MyBasket.presenter'
import { IQuery, IQueryFetchUseditemsArgs } from '@/common/types/generated/types'
import { FETCH_USEDITEMS, FETCH_USER_LOGGED_IN } from './MyBasket.queries'

export default function MyBasket() {
  const { data: UsedItemsData } = useQuery<Pick<IQuery, 'fetchUseditems'>, IQueryFetchUseditemsArgs>(FETCH_USEDITEMS)
  const { data: UserData } = useQuery<Pick<IQuery, 'fetchUserLoggedIn'>>(FETCH_USER_LOGGED_IN)

  return <MyBasketUI UsedItemsData={UsedItemsData} UserData={UserData} />
}
