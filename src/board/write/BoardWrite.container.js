import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import BoardWriteUI from './BoardWrite.presenter'
import { schema } from '../../../src/common/validation/validation'

export default function BoardWrite() {
  // **** react-hook-form
  const { handleSubmit, control, formState } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })

  // **** 이벤트 핸들러 함수
  const onClickSubmit = handleSubmit(data => {
    console.log(data)
  })
  return (
    <BoardWriteUI handleSubmit={handleSubmit} control={control} onClickSubmit={onClickSubmit} formState={formState} />
  )
}
