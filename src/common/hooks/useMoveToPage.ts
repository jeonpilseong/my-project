import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'

import { visitedPageState } from '../stores'

interface IUseMoveToPageReturn {
  visitedPage: string
  onClickMoveToPage: (path: string) => () => void
}

// **** 커스텀 훅 - 페이지 이동
export const useMoveToPage = (): IUseMoveToPageReturn => {
  const router = useRouter()
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState)

  const onClickMoveToPage = (path: string) => () => {
    if (path !== '/login/login') setVisitedPage(path)
    void router.push(path)
  }

  return { visitedPage, onClickMoveToPage }
}
