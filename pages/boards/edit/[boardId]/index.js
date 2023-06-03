import { useRecoilState } from 'recoil'

import BoardWrite from '../../../../src/components/features/board/write/BoardWrite.container'
import { isEditState } from '../../../../src/common/stores/index'
import { useEffect } from 'react'

export default function BoardEditPage() {
  // **** 상태값
  const [isEdit, setIsEdit] = useRecoilState(isEditState)

  useEffect(() => {
    setIsEdit(true)
  }, [])

  return <BoardWrite isEdit={isEdit} />
}
