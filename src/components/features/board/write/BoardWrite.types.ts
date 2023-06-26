import { MouseEvent } from 'react'
import { Address } from 'react-daum-postcode'

import { IQuery } from '@/common/types/generated/types'
import { UploadFile, UploadProps } from 'antd'

export interface IBoardWriteUIProps {
  address: string
  zipcode: string
  isClickAddress: boolean
  BoardData?: Pick<IQuery, 'fetchBoard'>
  handleSubmit: any
  control: any
  onClickSubmit: any
  formState: any
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void
  onclickAddress: () => void
  onComplete: (data: Address) => void
  fileList: UploadFile[]
  handlePreview: (file: UploadFile) => void
  handleChange: UploadProps['onChange']
  handleCancel: () => void
  previewOpen: boolean
  previewTitle: string
  previewImage: string
}

interface IBoardAddress {
  zipcode?: string
  address?: string
  addressDetail?: string
}

export interface IVariables {
  updateBoardInput: {
    title?: string
    contents?: string
    youtubeUrl?: string
    boardAddress?: IBoardAddress
    images?: string[]
  }
  password: string
  boardId: string
}

export interface ISubmitData {
  writer?: string
  password?: string
  title?: string
  contents?: string
  addressDetail?: string
  youtubeUrl?: string
}
