import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import { useMutation } from '@apollo/client'
import { Modal } from 'antd'

import LoginUI from './Login.presenter'
import { LOGIN_USER } from './Login.queries'
import { IMutation, IMutationLoginUserArgs } from '@/common/types/generated/types'
import { loginSchema } from '@/common/validation/validation'
import { useRecoilState } from 'recoil'
import { accessTokenState, logoutState, visitedPageState } from '@/common/stores'
import { useEffect } from 'react'

export default function Login() {
  const router = useRouter()

  // **** 상태값
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState)
  const [visitedPage] = useRecoilState(visitedPageState)
  const [, setIsLogout] = useRecoilState(logoutState)

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
      const result = await loginUser({
        variables: {
          password: data.password,
          email: data.email,
        },
      })
      setIsLogout(false)
      setAccessToken(result.data?.loginUser.accessToken ?? '')
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  })

  // **** 로그인 후 accessToken 발급 받으면 페이지 이동
  useEffect(() => {
    if (accessToken) {
      if (visitedPage) {
        router.push(visitedPage)
        Modal.success({ content: '로그인이 완료 되었습니다.' })
      } else {
        router.push('/')
        Modal.success({ content: '로그인이 완료 되었습니다.' })
      }
    }
  }, [accessToken])

  return <LoginUI control={control} formState={formState} onClickLogin={onClickLogin} />
}
