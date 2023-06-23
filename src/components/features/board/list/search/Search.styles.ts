import styled from '@emotion/styled'
import { Button, Input, DatePicker } from 'antd'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
  height: 5.2rem;
`

export const TitleSearch = styled(Input)`
  width: 60%;
  border-color: var(--gray-2);
`

const { RangePicker } = DatePicker
export const Calendar = styled(RangePicker)`
  width: 23%;
  border-color: var(--gray-2);
`

export const Btn = styled(Button)`
  width: 10%;
  height: 5.2rem;
  font-size: 1.6rem;
`
