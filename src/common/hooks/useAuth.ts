import { Modal } from 'antd'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const useAuth = () => {
  const router = useRouter()

  useEffect(() => {
    if (localStorage.getItem('accessToken') === null) {
      Modal.error({ content: '로그인이 필요합니다' })
      router.push('/login')
    }
  }, [])
}
