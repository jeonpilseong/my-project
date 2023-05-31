import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@apollo/client'

import BoardWriteUI from './BoardWrite.presenter'
import { schema } from '../../../src/common/validation/validation'
import { CREATE_BOARD } from './BoardWrite.queries'

export default function BoardWrite() {
  // **** react-hook-form, yup
  const { handleSubmit, control, formState } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })

  // **** graphql api 요청
  const [createBoard] = useMutation(CREATE_BOARD)

  // **** 이벤트 핸들러 함수
  const onClickSubmit = handleSubmit(async data => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: data.writer,
          password: data.password,
          title: data.title,
          contents: data.contents,
        },
      },
    })
    console.log(result)
  })

  return (
    <BoardWriteUI handleSubmit={handleSubmit} control={control} onClickSubmit={onClickSubmit} formState={formState} />
  )
}
