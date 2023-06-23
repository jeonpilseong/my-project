import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { Modal } from 'antd'
import { useRecoilState } from 'recoil'

import MarketDetailUI from './MarketDetail.presenter'
import { FETCH_USEDITEM, TOGGLE_USEDITEM_PICK } from './MarketDetail.queries'
import {
  IMutation,
  IMutationToggleUseditemPickArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from '@/common/types/generated/types'
import { useAuth } from '@/common/hooks/useAuth'
import { visitedPageState } from '@/common/stores'

export default function MarketDetail() {
  const router = useRouter()

  // **** 상태값
  const [, setVisitedPage] = useRecoilState(visitedPageState)

  // **** graphql api 요청
  const [toggleUseditemPick] = useMutation<Pick<IMutation, 'toggleUseditemPick'>, IMutationToggleUseditemPickArgs>(
    TOGGLE_USEDITEM_PICK,
  )
  const { data: UseditemData } = useQuery<Pick<IQuery, 'fetchUseditem'>, IQueryFetchUseditemArgs>(FETCH_USEDITEM, {
    variables: {
      useditemId: String(router.query.useditemId),
    },
  })

  // **** 로그인 체크
  const { accessToken } = useAuth()

  // **** 장바구니 넣기
  const onClickPick = async () => {
    await toggleUseditemPick({
      variables: {
        useditemId: String(router.query.useditemId),
      },
      refetchQueries: [
        {
          query: FETCH_USEDITEM,
          variables: { useditemId: String(router.query.useditemId) },
        },
      ],
    })
  }

  // **** 상품 결제
  const onClickPayment = () => {
    // ** 로그인 체크
    if (!accessToken) {
      // ** 방문 페이지 기록
      setVisitedPage(`/market/detail/${router.query.useditemId}`)

      Modal.error({ content: '로그인 후 이용 가능합니다.' })
      return router.push('/login/login')
    }
  }

  return <MarketDetailUI UseditemData={UseditemData} onClickPayment={onClickPayment} onClickPick={onClickPick} />
}
