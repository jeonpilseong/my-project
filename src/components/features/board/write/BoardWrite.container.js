import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@apollo/client'
import { Modal } from 'antd'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'

import BoardWriteUI from './BoardWrite.presenter'
import { schema, schema_edit } from '../../../../../src/common/validation/validation'
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries'
import { isEditState } from '../../../../../src/common/stores/index'

export default function BoardWrite() {
  const router = useRouter()

  // **** 상태값
  const [isEdit] = useRecoilState(isEditState)

  // **** react-hook-form, yup
  const { handleSubmit, control, formState } = useForm({
    resolver: yupResolver(isEdit ? schema_edit : schema),
    mode: 'onChange',
  })

  // **** graphql api 요청
  const [createBoard] = useMutation(CREATE_BOARD)
  const [updateBoard] = useMutation(UPDATE_BOARD)

  // **** 이벤트 핸들러 함수 - 게시글 등록
  const onClickSubmit = handleSubmit(async data => {
    try {
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
      Modal.success({ content: '등록 되었습니다.' })
      router.push(`/boards/detail/${result.data?.createBoard._id}`)
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  })

  // **** 이벤트 핸들러 함수 - 게시글 수정
  const onClickUpdate = handleSubmit(async data => {
    // **** 업데이트 된 변수들
    const variables = {
      updateBoardInput: {},
      password: data.password,
      boardId: router.query.boardId,
    }
    if (data.title) variables.updateBoardInput.title = data.title
    if (data.contents) variables.updateBoardInput.contents = data.contents

    try {
      const result = await updateBoard({
        variables,
      })

      Modal.success({ content: '수정 되었습니다.' })
      router.push(`/boards/detail/${result.data?.updateBoard._id}`)
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  })

  return (
    <BoardWriteUI
      handleSubmit={handleSubmit}
      control={control}
      onClickSubmit={onClickSubmit}
      formState={formState}
      onClickUpdate={onClickUpdate}
    />
  )
}
