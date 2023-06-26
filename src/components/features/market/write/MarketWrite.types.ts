import { IQuery } from '@/common/types/generated/types'
import { UploadFile, UploadProps } from 'antd'
import { MouseEvent } from 'react'

export interface IMarketWriteUIProps {
  control: any
  formState: any
  onClickSubmit: any
  onclickAddress: () => void
  address: string
  zipcode: string
  isClickAddress: boolean
  handleCancel: () => void
  handlePreview: (file: UploadFile) => void
  handleChange: UploadProps['onChange']
  previewOpen: boolean
  previewImage: string
  previewTitle: string
  fileList: UploadFile[]
  isEditMarket: boolean
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void
  UseditemData?: Pick<IQuery, 'fetchUseditem'>
}

interface IUseditemAddress {
  zipcode?: string
  address?: string
  addressDetail?: string
}

export interface IVariables {
  updateUseditemInput: {
    name?: string
    remarks?: string
    contents?: string
    price?: number
    useditemAddress?: IUseditemAddress
    images?: string[]
  }
  useditemId: string
}

export interface ISubmitItemData {
  name?: string
  remarks?: string
  contents?: string
  price?: number
  addressDetail?: string
}
