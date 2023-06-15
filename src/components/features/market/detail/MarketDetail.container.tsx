import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

import MarketDetailUI from './MarketDetail.presenter'
import { FETCH_USEDITEM } from './MarketDetail.queries'
import { IQuery, IQueryFetchUseditemArgs } from '@/common/types/generated/types'
import { FETCH_USER_LOGGED_IN } from '@/components/common/layout/header/Header.queries'

export default function MarketDetail() {
  const router = useRouter()

  // **** graphql api 요청
  const { data: UseditemData } = useQuery<Pick<IQuery, 'fetchUseditem'>, IQueryFetchUseditemArgs>(FETCH_USEDITEM, {
    variables: {
      useditemId: String(router.query.useditemId),
    },
  })
  const { data: UserData } = useQuery<Pick<IQuery, 'fetchUserLoggedIn'>>(FETCH_USER_LOGGED_IN)

  return <MarketDetailUI UseditemData={UseditemData} UserData={UserData} />
}
