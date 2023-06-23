import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { Modal } from 'antd'
import { useRecoilState } from 'recoil'

import MarketDetailUI from './MarketDetail.presenter'
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  FETCH_USEDITEM,
  FETCH_USER_LOGGED_IN,
  TOGGLE_USEDITEM_PICK,
} from './MarketDetail.queries'
import {
  IMutation,
  IMutationCreatePointTransactionOfBuyingAndSellingArgs,
  IMutationToggleUseditemPickArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from '@/common/types/generated/types'
import { useAuth } from '@/common/hooks/useAuth'
import { visitedPageState } from '@/common/stores'
import PointChargeModal from '@/components/common/pointChargeModal/PointChargeModal'

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
  const [createPointTransactionOfBuyingAndSelling] = useMutation<
    Pick<IMutation, 'createPointTransactionOfBuyingAndSelling'>,
    IMutationCreatePointTransactionOfBuyingAndSellingArgs
  >(CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING)
  const { data: UserData } = useQuery<Pick<IQuery, 'fetchUserLoggedIn'>>(FETCH_USER_LOGGED_IN)

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
  const onClickPayment = async () => {
    // ** 로그인 체크
    if (!accessToken) {
      // ** 방문 페이지 기록
      setVisitedPage(`/market/detail/${router.query.useditemId}`)

      Modal.error({ content: '로그인 후 이용 가능합니다.' })
      router.push('/login/login')
      return
    }

    // ** 포인트가 모자르면 포인트 충전
    const price = UseditemData?.fetchUseditem?.price
    const point = UserData?.fetchUserLoggedIn.userPoint?.amount
    if (price && point && price > point) {
      PointChargeModal()
      return
    }

    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: { useritemId: String(router.query.useditemId) },
      })
      Modal.success({ content: '구매가 완료 되었습니다.' })
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  return <MarketDetailUI UseditemData={UseditemData} onClickPayment={onClickPayment} onClickPick={onClickPick} />
}
