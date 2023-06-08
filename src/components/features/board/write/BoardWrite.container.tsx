import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation, useQuery } from '@apollo/client'
import { Modal } from 'antd'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { useState } from 'react'
import { Address, useDaumPostcodePopup } from 'react-daum-postcode'

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
  const [address, setAddress] = useState<string>('')
  const [zipcode, setZipcode] = useState<string>('')
  const [isClick, setIsClick] = useState<boolean>(false)

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
            boardAddress: {
              zipcode,
              address,
              addressDetail: data.addressDetail,
            },
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
    const variables: IVariables = {
      updateBoardInput: {},
      password: data.password,
      boardId: String(router.query.boardId),
    }
    if (data.title) variables.updateBoardInput.title = data.title
    if (data.contents) variables.updateBoardInput.contents = data.contents
    if (data.youtubeUrl) variables.updateBoardInput.youtubeUrl = data.youtubeUrl
    if (address || zipcode || data.addressDetail) {
      variables.updateBoardInput.boardAddress = {}
      if (address) variables.updateBoardInput.boardAddress.address = address
      if (zipcode) variables.updateBoardInput.boardAddress.zipcode = zipcode
      if (data.addressDetail) variables.updateBoardInput.boardAddress.addressDetail = data.addressDetail
    }

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

  // **** 주소 검색 버튼 클릭 여부
  const open = useDaumPostcodePopup()
  const onclickAddress = () => {
    open({ onComplete })
  }

  // **** 주소 검색 완료
  const onComplete = (data: Address) => {
    setIsClick(true)
    setAddress(data.address)
    setZipcode(data.zonecode)
  }

  return (
    <BoardWriteUI
      BoardData={BoardData}
      address={address}
      zipcode={zipcode}
      isClick={isClick}
      handleSubmit={handleSubmit}
      control={control}
      onClickSubmit={onClickSubmit}
      formState={formState}
      onClickUpdate={onClickUpdate}
      onclickAddress={onclickAddress}
      onComplete={onComplete}
    />
  )
}
