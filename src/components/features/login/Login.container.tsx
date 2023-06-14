import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import { useMutation } from '@apollo/client'
import { Modal } from 'antd'

import LoginUI from './Login.presenter'
import { LOGIN_USER } from './Login.queries'
import { IMutation, IMutationLoginUserArgs } from '@/common/types/generated/types'
import { loginSchema } from '@/common/validation/validation'

export default function Login() {
  const router = useRouter()

  // **** react-hook-form, yup
  const { handleSubmit, control, formState } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onChange',
  })

  // **** graphql api 요청
  const [loginUser] = useMutation<Pick<IMutation, 'loginUser'>, IMutationLoginUserArgs>(LOGIN_USER)

  // **** 로그인
  const onClickLogin = handleSubmit(async data => {
    try {
      await loginUser({
        variables: {
          password: data.password,
          email: data.email,
        },
      })
      router.push('/boards/list')
      Modal.success({ content: '로그인이 완료 되었습니다.' })
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  })

  return <LoginUI control={control} formState={formState} onClickLogin={onClickLogin} />
}
