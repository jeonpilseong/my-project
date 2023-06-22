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
import { FETCH_USER_LOGGED_IN } from '@/components/common/layout/header/Header.queries'

// **** window 안에 IMP가 있음을 선언
declare const window: typeof globalThis & {
  IMP: any
}

export default function MarketDetail() {
  const router = useRouter()

  // **** 상태값
  const [, setVisitedPage] = useRecoilState(visitedPageState)

  // **** graphql api 요청
  const { data: UserData } = useQuery<Pick<IQuery, 'fetchUserLoggedIn'>>(FETCH_USER_LOGGED_IN)
  const [toggleUseditemPick] = useMutation<Pick<IMutation, 'toggleUseditemPick'>, IMutationToggleUseditemPickArgs>(
    TOGGLE_USEDITEM_PICK,
  )
  const { data: UseditemData } = useQuery<Pick<IQuery, 'fetchUseditem'>, IQueryFetchUseditemArgs>(FETCH_USEDITEM, {
    variables: {
      useditemId: String(router.query.useditemId),
    },
  })
  // const [createPointTransactionOfLoading] = useMutation<Pick<IMutation,'createPointTransactionOfLoading'>,IMutationCreatePointTransactionOfLoadingArgs>(CREATE_POINT_TRANSACTION_OF_LOADING)

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

    const IMP = window.IMP
    IMP.init('imp28728643')

    IMP.request_pay(
      {
        // param
        pg: 'kakaopay',
        pay_method: 'card',
        // merchant_uid: "ORD20180131-0000011", // 주문번호
        name: UseditemData?.fetchUseditem.name,
        amount: UseditemData?.fetchUseditem.price,
        buyer_email: UserData?.fetchUserLoggedIn.email,
        buyer_name: UserData?.fetchUserLoggedIn.name,
        // buyer_tel: '010-4242-4242',
        // buyer_addr: '서울특별시 강남구 신사동',
        // buyer_postcode: '01181',
        m_redirect_url: 'http://localhost:3000', // 모바일 결제 후 해당 페이지로 리다이렉트
      },
      async (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          // ** if 포인트 모자르면 포인트 충전
          // await createPointTransactionOfLoading({
          //   variables:{
          //     impUid: rsp.imp_uid
          //   }
          // })
          // ** else 포인트 안모자르면 결제
        } else {
          // 결제 실패 시 로직,
          console.log(rsp)
        }
      },
    )
  }

  return <MarketDetailUI UseditemData={UseditemData} onClickPayment={onClickPayment} onClickPick={onClickPick} />
}
