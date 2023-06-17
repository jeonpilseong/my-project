import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@apollo/client'
import { Modal } from 'antd'
import { ChangeEvent, useRef, useState } from 'react'
import { useRouter } from 'next/router'

import SignUpUI from './Signup.presenter'
import { signupSchema } from '@/common/validation/validation'
import { CREATE_USER } from './Signup.queries'
import { IMutation, IMutationCreateUserArgs } from '@/common/types/generated/types'

export default function Signup() {
  const router = useRouter()

  // **** 상태값
  const [imageUrl, setImageUrl] = useState('')

  // **** 태그 저장
  const fileRef = useRef<HTMLInputElement>(null)

  // **** react-hook-form, yup
  const { handleSubmit, control, formState } = useForm({
    resolver: yupResolver(signupSchema),
    mode: 'onChange',
  })

  // **** graphql api 요청
  const [createUser] = useMutation<Pick<IMutation, 'createUser'>, IMutationCreateUserArgs>(CREATE_USER)

  // **** 회원가입
  const onClickSignup = handleSubmit(async data => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            email: data.email,
            password: data.password,
            name: data.name,
          },
        },
      })
      router.push('/login/login')
      Modal.success({ content: '회원 가입이 완료 되었습니다.' })
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  })

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

  return (
    <SignUpUI
      control={control}
      formState={formState}
      onClickSignup={onClickSignup}
      onChangeFile={onChangeFile}
      onClickImage={onClickImage}
      fileRef={fileRef}
      imageUrl={imageUrl}
    />
  )
}
