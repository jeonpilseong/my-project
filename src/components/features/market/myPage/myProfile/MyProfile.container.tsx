import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@apollo/client'
import { Modal } from 'antd'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

import MyProfileUI from './MyProfile.presenter'
import { EditPasswordSchema } from '@/common/validation/validation'
import { RESET_USER_PASSWORD } from './MyProfile.queries'
import { IMutation, IMutationResetUserPasswordArgs } from '@/common/types/generated/types'
import { isClickMySideState } from '@/common/stores'

export default function MyProfile() {
  // **** 상태값
  const [, setIsClickMySide] = useRecoilState(isClickMySideState)

  // **** 페이지 마운트 시 사이드 메뉴 상태값 초기화
  useEffect(() => {
    setIsClickMySide([false, false, true])
  }, [])

  // **** react-hook-form, yup
  const { handleSubmit, control, formState } = useForm({
    resolver: yupResolver(EditPasswordSchema),
    mode: 'onChange',
  })

  // **** graphql api 요청
  const [resetUserPassword] = useMutation<Pick<IMutation, 'resetUserPassword'>, IMutationResetUserPasswordArgs>(
    RESET_USER_PASSWORD,
  )

  // **** 비밀번호 수정
  const onClickEditPassword = handleSubmit(async data => {
    try {
      await resetUserPassword({
        variables: { password: data.newPassword },
      })
      Modal.success({ content: '비밀번호가 변경 되었습니다.' })
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  })

  return (
    <MyProfileUI
      handleSubmit={handleSubmit}
      control={control}
      formState={formState}
      onClickEditPassword={onClickEditPassword}
    />
  )
}
