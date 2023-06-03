import { useRouter } from 'next/router'

// **** 커스텀 훅 - 페이지 이동
export const useMoveToPage = () => {
  const router = useRouter()

  const onClickMoveToPage = path => () => {
    void router.push(path)
  }

  return { onClickMoveToPage }
}
