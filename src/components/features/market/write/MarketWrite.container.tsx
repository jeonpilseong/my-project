import { useForm } from 'react-hook-form'

import MarketWriteUI from './MarketWrite.presenter'
import { yupResolver } from '@hookform/resolvers/yup'
import { MarketWriteSchema } from '@/common/validation/validation'

export default function MarketWrite() {
  // **** react-hook-form, yup
  const { handleSubmit, control, formState } = useForm({
    resolver: yupResolver(MarketWriteSchema),
    mode: 'onChange',
  })

  const onClickSubmit = handleSubmit(data => {
    console.log(data)
  })
  return <MarketWriteUI control={control} formState={formState} onClickSubmit={onClickSubmit} />
}
