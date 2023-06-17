import { ChangeEvent } from 'react'

export interface ISignUpUIProps {
  control: any
  formState: any
  onClickSignup: () => void
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void
  onClickImage: () => void
  fileRef: any
  imageUrl?: string
}
