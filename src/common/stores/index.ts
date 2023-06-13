import { atom } from 'recoil'
import { v1 } from 'uuid'

// **** 수정, 등록 페이지 상태값
export const isEditState = atom({
  key: `isEditState/${v1()}`,
  default: true,
})
