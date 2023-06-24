import { MouseEvent, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'

import MyOrderUI from './MyOrder.presenter'
import { isClickMySideState } from '@/common/stores'

export default function MyOrder() {
  // **** 상태값
  const [isClickHistory, SetIsClickHistory] = useState([true, false, false])
  const [, setIsClickMySide] = useRecoilState(isClickMySideState)

  // **** 페이지 마운트 시 사이드 메뉴 상태값 초기화
  useEffect(() => {
    setIsClickMySide([false, true, false])
  }, [])

  // **** 구매내역 클릭
  const onClickMyPurchase = (event: MouseEvent<HTMLHeadingElement>) => {
    if (event.currentTarget.id === 'myPoint') SetIsClickHistory([true, false, false])
    if (event.currentTarget.id === 'myPurchase') SetIsClickHistory([false, true, false])
    if (event.currentTarget.id === 'mySales') SetIsClickHistory([false, false, true])
  }

  return <MyOrderUI isClickHistory={isClickHistory} onClickMyPurchase={onClickMyPurchase} />
}
