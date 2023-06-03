const { atom } = require('recoil')

// **** 수정, 등록 페이지 상태값
export const isEditState = atom({
  key: 'isEditState',
  default: true,
})
