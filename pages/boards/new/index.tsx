import { useRecoilState } from 'recoil'
import { useEffect } from 'react'

import { isEditState } from '@/common/stores/index'
import BoardWrite from '@/components/features/board/write/BoardWrite.container'

export default function BoardWritePage() {
  // **** 상태값
  const [isEdit, setIsEdit] = useRecoilState(isEditState)

  useEffect(() => {
    setIsEdit(false)
  }, [])

  return <BoardWrite />
}
