import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation, useQuery } from '@apollo/client'
import { Modal } from 'antd'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'

import BoardWriteUI from './BoardWrite.presenter'
import { schema, schema_edit } from '@/common/validation/validation'
import { CREATE_BOARD, FETCH_BOARD, UPDATE_BOARD } from './BoardWrite.queries'
import { isEditState } from '@/common/stores/index'
import { IVariables } from './BoardWrite.types'
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from '@/common/types/generated/types'

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
  const [createBoard] = useMutation<Pick<IMutation, 'createBoard'>, IMutationCreateBoardArgs>(CREATE_BOARD)
  const [updateBoard] = useMutation<Pick<IMutation, 'updateBoard'>, IMutationUpdateBoardArgs>(UPDATE_BOARD)
  const { data: BoardData } = useQuery<Pick<IQuery, 'fetchBoard'>, IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: {
      boardId: String(router.query.boardId),
    },
  })

  // **** 게시글 등록
  const onClickSubmit = handleSubmit(async data => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
            youtubeUrl: data.youtubeUrl,
          },
        },
      })
      Modal.success({ content: '등록 되었습니다.' })
      router.push(`/boards/detail/${result.data?.createBoard._id}`)
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  })

  // **** 게시글 수정
  const onClickUpdate = handleSubmit(async data => {
    // **** 업데이트 된 변수들
    if (typeof router.query.boardId !== 'string') return
    const variables: IVariables = {
      updateBoardInput: {},
      password: data.password,
      boardId: router.query.boardId,
    }
    if (data.title) variables.updateBoardInput.title = data.title
    if (data.contents) variables.updateBoardInput.contents = data.contents
    if (data.youtubeUrl) variables.updateBoardInput.youtubeUrl = data.youtubeUrl
    try {
      const result = await updateBoard({
        variables,
      })
      console.log(result)

      Modal.success({ content: '수정 되었습니다.' })
      router.push(`/boards/detail/${result.data?.updateBoard._id}`)
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  })

  return (
    <BoardWriteUI
      BoardData={BoardData}
      handleSubmit={handleSubmit}
      control={control}
      onClickSubmit={onClickSubmit}
      formState={formState}
      onClickUpdate={onClickUpdate}
    />
  )
}
