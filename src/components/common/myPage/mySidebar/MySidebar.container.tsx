import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import { useRouter } from 'next/router'

import MySideUI from './MySidebar.presenter'
import { isClickMyBasketState, isClickMyOrderState, isClickMyProfileState } from '@/common/stores'

export default function MySide() {
  const router = useRouter()

  // **** 상태값
  const [imageUrl, setImageUrl] = useState('')
  const [isClickMyBasket, setIsClickMyBasket] = useRecoilState(isClickMyBasketState)
  const [isClickMyOrder, setIsClickMyOrder] = useRecoilState(isClickMyOrderState)
  const [isClickMyProfile, setIsClickMyProfile] = useRecoilState(isClickMyProfileState)

  // **** 태그 저장
  const fileRef = useRef<HTMLInputElement>(null)

  // **** 이미지 임시 업로드
  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event?.target.files?.[0]
    if (!file) return

    // ** 임시 이미지 url 생성
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = event => {
      if (typeof event.target?.result === 'string') setImageUrl(event.target?.result)
    }
  }

  // **** 이미지 버튼 클릭 시 input 태그 클릭됨
  const onClickImage = () => {
    fileRef.current?.click()
  }

  // **** 버튼 페이지 이동
  const onClickmyBtn = (event: MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget.id === 'myBasket') {
      setIsClickMyBasket(true)
      setIsClickMyOrder(false)
      setIsClickMyProfile(false)
    }
    if (event.currentTarget.id === 'myOrder') {
      setIsClickMyBasket(false)
      setIsClickMyOrder(true)
      setIsClickMyProfile(false)
    }
    if (event.currentTarget.id === 'myProfile') {
      setIsClickMyBasket(false)
      setIsClickMyOrder(false)
      setIsClickMyProfile(true)
    }
  }

  useEffect(() => {
    if (isClickMyBasket) router.push('/market/myPage/myBasket')
    if (isClickMyOrder) router.push('/market/myPage/myOrder')
    if (isClickMyProfile) router.push('/market/myPage/myProfile')
  }, [isClickMyBasket, isClickMyOrder, isClickMyProfile])

  return (
    <MySideUI
      onChangeFile={onChangeFile}
      onClickImage={onClickImage}
      fileRef={fileRef}
      imageUrl={imageUrl}
      isClickMyBasket={isClickMyBasket}
      isClickMyOrder={isClickMyOrder}
      isClickMyProfile={isClickMyProfile}
      onClickmyBtn={onClickmyBtn}
    />
  )
}
