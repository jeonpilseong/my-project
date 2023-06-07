import { useRecoilState } from 'recoil'

import BoardWrite from '@/components/features/board/write/BoardWrite.container'
import { isEditState } from '@/common/stores/index'
import { useEffect } from 'react'

export default function BoardEditPage() {
  // **** 상태값
  const [, setIsEdit] = useRecoilState(isEditState)

  useEffect(() => {
    setIsEdit(true)
  }, [])

  return <BoardWrite />
}
