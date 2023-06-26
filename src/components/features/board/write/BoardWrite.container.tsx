import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation, useQuery } from '@apollo/client'
import { Modal, UploadProps } from 'antd'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { useState } from 'react'
import { Address, useDaumPostcodePopup } from 'react-daum-postcode'
import { RcFile, UploadFile } from 'antd/es/upload'

import BoardWriteUI from './BoardWrite.presenter'
import { schema, schema_edit } from '@/common/validation/validation'
import { CREATE_BOARD, FETCH_BOARD, UPDATE_BOARD, UPLOAD_FILE } from './BoardWrite.queries'
import { isEditState } from '@/common/stores/index'
import { IVariables } from './BoardWrite.types'
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IMutationUploadFileArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from '@/common/types/generated/types'

// **** 이미지 임시 url 생성 - 미리보기 용도
const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = error => reject(error)
  })

export default function BoardWrite() {
  const router = useRouter()

  // **** 상태값
  const [isEdit, setIsEdit] = useRecoilState(isEditState)
  const [address, setAddress] = useState<string>('')
  const [zipcode, setZipcode] = useState<string>('')
  const [isClickAddress, setIsClickAddress] = useState<boolean>(false)

  // **** 이미지 상태값
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [previewTitle, setPreviewTitle] = useState('')
  const [fileList, setFileList] = useState<UploadFile[]>([])
  let orignFiles: any = []
  let imageUrls: string[] = []

  // **** react-hook-form, yup
  const { handleSubmit, control, formState } = useForm({
    resolver: yupResolver(isEdit ? schema_edit : schema),
    mode: 'onChange',
  })

  // **** graphql api 요청
  const [createBoard] = useMutation<Pick<IMutation, 'createBoard'>, IMutationCreateBoardArgs>(CREATE_BOARD)
  const [updateBoard] = useMutation<Pick<IMutation, 'updateBoard'>, IMutationUpdateBoardArgs>(UPDATE_BOARD)
  const [uploadFile] = useMutation<Pick<IMutation, 'uploadFile'>, IMutationUploadFileArgs>(UPLOAD_FILE)
  const { data: BoardData } = useQuery<Pick<IQuery, 'fetchBoard'>, IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: {
      boardId: String(router.query.boardId),
    },
  })

  // **** 게시글 등록
  const onClickSubmit = handleSubmit(async data => {
    // ** 클라우드에 이미지 업로드
    const tempOriginFiles = [...fileList.map(el => el.originFileObj)]
    orignFiles = [...tempOriginFiles]

    const results = await Promise.all(orignFiles.map(async (el: any) => await uploadFile({ variables: { file: el } })))
    imageUrls = [...results.map(el => el.data?.uploadFile?.url)]

    // ** 게시글 등록
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: String(data.writer),
            password: String(data.password),
            title: String(data.title),
            contents: String(data.contents),
            youtubeUrl: String(data.youtubeUrl),
            images: imageUrls,
            boardAddress: {
              zipcode,
              address,
              addressDetail: String(data.addressDetail),
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
    // ** 클라우드에 이미지 업로드
    const tempOriginFiles = [...fileList.map(el => el.originFileObj)]
    orignFiles = [...tempOriginFiles]

    const results = await Promise.all(orignFiles.map(async (el: any) => await uploadFile({ variables: { file: el } })))
    imageUrls = [...results.map(el => el.data?.uploadFile?.url)]

    // ** 업데이트 된 변수들
    const variables: IVariables = {
      updateBoardInput: {},
      password: data.password,
      boardId: String(router.query.boardId),
    }
    if (data.title) variables.updateBoardInput.title = data.title
    if (data.contents) variables.updateBoardInput.contents = data.contents
    if (data.youtubeUrl) variables.updateBoardInput.youtubeUrl = data.youtubeUrl
    if (orignFiles) variables.updateBoardInput.images = imageUrls
    if (!orignFiles[0]) variables.updateBoardInput.images = BoardData?.fetchBoard.images ?? []
    if (address || zipcode || data.addressDetail) {
      variables.updateBoardInput.boardAddress = {}
      if (address) variables.updateBoardInput.boardAddress.address = address
      if (zipcode) variables.updateBoardInput.boardAddress.zipcode = zipcode
      if (data.addressDetail) variables.updateBoardInput.boardAddress.addressDetail = data.addressDetail
    }

    // ** 게시글 수정
    try {
      const result = await updateBoard({
        variables,
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: {
              boardId: String(router.query.boardId),
            },
          },
        ],
      })
      setIsEdit(false)

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
    setIsClickAddress(true)
    setAddress(data.address)
    setZipcode(data.zonecode)
  }

  // **** 이미지 미리보기 및 삭제
  const handleCancel = () => setPreviewOpen(false)
  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile)
    }

    setPreviewImage(file.url || (file.preview as string))
    setPreviewOpen(true)
    setPreviewTitle(file.name)
  }

  // **** 이미지 업로드 목록 추가 및 삭제
  const handleChange: UploadProps['onChange'] = async ({ fileList: newFileList }) => {
    setFileList(newFileList)
  }

  return (
    <BoardWriteUI
      BoardData={BoardData}
      address={address}
      zipcode={zipcode}
      isClickAddress={isClickAddress}
      handleSubmit={handleSubmit}
      control={control}
      onClickSubmit={onClickSubmit}
      formState={formState}
      onClickUpdate={onClickUpdate}
      onclickAddress={onclickAddress}
      onComplete={onComplete}
      fileList={fileList}
      handlePreview={handlePreview}
      handleChange={handleChange}
      handleCancel={handleCancel}
      previewOpen={previewOpen}
      previewTitle={previewTitle}
      previewImage={previewImage}
    />
  )
}
