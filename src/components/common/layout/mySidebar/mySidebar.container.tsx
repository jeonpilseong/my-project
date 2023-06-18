import { ChangeEvent, MouseEvent, useRef, useState } from 'react'
import MySideUI from './mySidebar.presenter'
import { useRouter } from 'next/router'

export default function MySide() {
  const router = useRouter()

  // **** 상태값
  const [imageUrl, setImageUrl] = useState('')
  const [myBtnId, setmyBtnId] = useState('1')

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
    if (event.currentTarget.id === '1') {
      setmyBtnId('1')
      router.push('/market/my/myProduct')
    }
    if (event.currentTarget.id === '2') {
      setmyBtnId('2')
      router.push('/market/my/myHistory')
    }
    if (event.currentTarget.id === '3') {
      setmyBtnId('3')
      router.push('/market/my/myProfile')
    }
  }

  return (
    <MySideUI
      onChangeFile={onChangeFile}
      onClickImage={onClickImage}
      fileRef={fileRef}
      imageUrl={imageUrl}
      myBtnId={myBtnId}
      onClickmyBtn={onClickmyBtn}
    />
  )
}
