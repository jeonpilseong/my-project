import { useRouter } from 'next/router'

interface IUseMoveToPageReturn {
  onClickMoveToPage: (path: string) => () => void
}

// **** 커스텀 훅 - 페이지 이동
export const useMoveToPage = (): IUseMoveToPageReturn => {
  const router = useRouter()

  const onClickMoveToPage = (path: string) => () => {
    void router.push(path, undefined, { scroll: false })
  }

  return { onClickMoveToPage }
}
