import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

import MarketDetailUI from './MarketDetail.presenter'
import { FETCH_USEDITEM } from './MarketDetail.queries'
import { IQuery, IQueryFetchUseditemArgs } from '@/common/types/generated/types'

// **** window 안에 IMP가 있음을 선언
declare const window: typeof globalThis & {
  IMP: any
}

export default function MarketDetail() {
  const router = useRouter()

  // **** graphql api 요청
  const { data: UseditemData } = useQuery<Pick<IQuery, 'fetchUseditem'>, IQueryFetchUseditemArgs>(FETCH_USEDITEM, {
    variables: {
      useditemId: String(router.query.useditemId),
    },
  })

  // **** 상품 결제
  const onClickPayment = () => {
    const IMP = window.IMP // 생략 가능
    IMP.init('imp28728643') // 예: imp00000000a

    IMP.request_pay(
      {
        // param
        pg: 'kakaopay',
        pay_method: 'card',
        // merchant_uid: "ORD20180131-0000011", // 주문번호
        name: '마우스',
        amount: 100,
        buyer_email: 'gildong@gmail.com',
        buyer_name: '홍길동',
        buyer_tel: '010-4242-4242',
        buyer_addr: '서울특별시 강남구 신사동',
        buyer_postcode: '01181',
        m_redirect_url: 'http://localhost:3000', // 모바일 결제 후 해당 페이지로 리다이렉트
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          console.log(rsp)
          // 결제 성공 시 로직,
        } else {
          // 결제 실패 시 로직,
        }
      },
    )
  }

  return <MarketDetailUI UseditemData={UseditemData} onClickPayment={onClickPayment} />
}
