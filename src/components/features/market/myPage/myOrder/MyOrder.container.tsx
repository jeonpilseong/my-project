import { MouseEvent, useState } from 'react'
import MyOrderUI from './MyOrder.presenter'

export default function MyOrder() {
  // **** 상태값
  const [isClickMyPurchase, setIsClickMyPurchase] = useState(true)

  // **** 구매내역 클릭
  const onClickMyPurchase = (event: MouseEvent<HTMLHeadingElement>) => {
    if (event.currentTarget.id === 'myPurchase') setIsClickMyPurchase(true)
    if (event.currentTarget.id === 'mySales') setIsClickMyPurchase(false)
  }

  return <MyOrderUI isClickMyPurchase={isClickMyPurchase} onClickMyPurchase={onClickMyPurchase} />
}
