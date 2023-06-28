import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { Modal } from 'antd'
import { useRecoilState } from 'recoil'
import { useState } from 'react'

import MarketDetailUI from './MarketDetail.presenter'
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  DELETE_USEDITEM,
  FETCH_USEDITEM,
  FETCH_USER_LOGGED_IN,
  TOGGLE_USEDITEM_PICK,
} from './MarketDetail.queries'
import {
  IMutation,
  IMutationCreatePointTransactionOfBuyingAndSellingArgs,
  IMutationDeleteUseditemArgs,
  IMutationToggleUseditemPickArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from '@/common/types/generated/types'
import { useAuth } from '@/common/hooks/useAuth'
import { isModalOpenState, visitedPageState } from '@/common/stores'
import PointChargeModal from '@/components/common/pointChargeModal/PointChargeModal'
import { FETCH_USEDITEMS } from '../list/MarketList.queries'
import { FETCH_USEDITEMS_IPICKED } from '../myPage/myBasket/MyBasket.queries'
import { FETCH_POINT_TRANSACTIONS_OF_BUYING } from '../myPage/myOrder/MyOrder.queries'

export default function MarketDetail() {
  const router = useRouter()

  // **** 상태값
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const [isPaymentOpen, setIsPaymentOpen] = useState(false)
  const [, setVisitedPage] = useRecoilState(visitedPageState)
  const [, setIsPointModalOpen] = useRecoilState(isModalOpenState)

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
  const [deleteUseditem] = useMutation<Pick<IMutation, 'deleteUseditem'>, IMutationDeleteUseditemArgs>(DELETE_USEDITEM)

  // **** 수정하기 클릭
  const onClickEdit = () => router.push(`/market/edit/${router.query.useditemId}`)

  // **** 삭제 모달창 생성
  const onClickDelete = () => setIsDeleteOpen(true)

  // **** 삭제 모달창 ok 누르면 상품 삭제
  const deleteOk = async () => {
    try {
      await deleteUseditem({
        variables: {
          useditemId: String(router.query.useditemId),
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEMS,
            variables: {
              isSoldout: false,
              search: '',
              page: 1,
            },
          },
        ],
      })
      Modal.success({ content: '삭제 되었습니다.' })
      router.push('/')
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
      setIsDeleteOpen(false)
    }
  }

  // **** 삭제 모달창 취소
  const deleteCancel = () => {
    setIsDeleteOpen(false)
  }

  // **** 로그인 체크
  const { accessToken } = useAuth()

  // **** 장바구니 넣기
  const onClickPick = async () => {
    if (accessToken) {
      await toggleUseditemPick({
        variables: {
          useditemId: String(router.query.useditemId),
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM,
            variables: { useditemId: String(router.query.useditemId) },
          },
          {
            query: FETCH_USEDITEMS_IPICKED,
            variables: {
              search: '',
            },
          },
        ],
      })
    }
  }

  // **** 결제 모달창 생성
  const showPayment = () => {
    setIsPaymentOpen(true)
  }

  // **** 결제 모달창 ok 누르면 결제하기
  const paymentOk = async () => {
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: { useritemId: String(router.query.useditemId) },
        refetchQueries: [
          {
            query: FETCH_USEDITEMS,
            variables: {
              isSoldout: false,
              search: '',
              page: 1,
            },
          },
          {
            query: FETCH_USEDITEMS,
            variables: {
              isSoldout: true,
              search: '',
              page: 1,
            },
          },
          {
            query: FETCH_POINT_TRANSACTIONS_OF_BUYING,
          },
          {
            query: FETCH_USEDITEM,
            variables: { useditemId: String(router.query.useditemId) },
          },
        ],
      })

      Modal.success({ content: '구매가 완료 되었습니다.' })
      router.push(`/market/myPage/myOrder`)
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
    setIsPaymentOpen(false)
  }

  // **** 결제 모달창 취소
  const paymentCancel = () => {
    setIsPaymentOpen(false)
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
      setIsPointModalOpen(true)
      return
    }

    // ** 상품 결제하기
    showPayment()
  }

  return (
    <>
      <MarketDetailUI
        UseditemData={UseditemData}
        UserData={UserData}
        onClickPayment={onClickPayment}
        onClickPick={onClickPick}
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}
      />
      <PointChargeModal />
      {isPaymentOpen && (
        <Modal title="상품 결제" open={isPaymentOpen} onOk={paymentOk} onCancel={paymentCancel}>
          <div style={{ fontSize: '1.8rem' }}>결제 하시겠습니까?</div>
        </Modal>
      )}

      {isDeleteOpen && (
        <Modal title="상품 삭제" open={isDeleteOpen} onOk={deleteOk} onCancel={deleteCancel}>
          <div style={{ fontSize: '1.8rem' }}>삭제 하시겠습니까?</div>
        </Modal>
      )}
    </>
  )
}
