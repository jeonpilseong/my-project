import { useForm } from 'react-hook-form'
import { Address, useDaumPostcodePopup } from 'react-daum-postcode'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Modal, UploadProps } from 'antd'
import { RcFile, UploadFile } from 'antd/es/upload'
import { useMutation } from '@apollo/client'
import { yupResolver } from '@hookform/resolvers/yup'

import MarketWriteUI from './MarketWrite.presenter'
import { MarketWriteSchema } from '@/common/validation/validation'
import { CREATE_USEDITEM } from './MarketWrite.queries'
import { IMutation, IMutationCreateUseditemArgs, IMutationUploadFileArgs } from '@/common/types/generated/types'
import { UPLOAD_FILE } from '../../board/write/BoardWrite.queries'

// **** 이미지 임시 url 생성 - 미리보기 용도
const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = error => reject(error)
  })

export default function MarketWrite() {
  const router = useRouter()

  // **** 상태값
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
    resolver: yupResolver(MarketWriteSchema),
    mode: 'onChange',
  })

  // **** garphql api 요청
  const [createUseditem] = useMutation<Pick<IMutation, 'createUseditem'>, IMutationCreateUseditemArgs>(CREATE_USEDITEM)
  const [uploadFile] = useMutation<Pick<IMutation, 'uploadFile'>, IMutationUploadFileArgs>(UPLOAD_FILE)

  // **** 게시글 등록
  const onClickSubmit = handleSubmit(async data => {
    // ** 클라우드에 이미지 업로드
    const tempOriginFiles = [...fileList.map(el => el.originFileObj)]
    orignFiles = [...tempOriginFiles]

    const results = await Promise.all(orignFiles.map(async (el: any) => await uploadFile({ variables: { file: el } })))
    imageUrls = [...results.map(el => el.data?.uploadFile?.url)]

    // ** 게시글 등록
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags: [''],
            images: imageUrls,
            useditemAddress: {
              zipcode,
              address,
              addressDetail: data.addressDetail,
            },
          },
        },
      })
      router.push(`/market/detail/${result.data?.createUseditem._id}`)
      Modal.success({ content: '상품이 등록 되었습니다.' })
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
    <MarketWriteUI
      control={control}
      formState={formState}
      onClickSubmit={onClickSubmit}
      onclickAddress={onclickAddress}
      address={address}
      zipcode={zipcode}
      isClickAddress={isClickAddress}
      handleCancel={handleCancel}
      handlePreview={handlePreview}
      handleChange={handleChange}
      previewOpen={previewOpen}
      previewImage={previewImage}
      previewTitle={previewTitle}
      fileList={fileList}
    />
  )
}
