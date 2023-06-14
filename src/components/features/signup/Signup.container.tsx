import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@apollo/client'
import { Modal } from 'antd'

import SignUpUI from './Signup.presenter'
import { signupSchema } from '@/common/validation/validation'
import { CREATE_USER } from './Signup.queries'
import { IMutation, IMutationCreateUserArgs } from '@/common/types/generated/types'
import { useRouter } from 'next/router'

export default function Signup() {
  const router = useRouter()

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

  return <SignUpUI control={control} formState={formState} onClickSignup={onClickSignup} />
}
