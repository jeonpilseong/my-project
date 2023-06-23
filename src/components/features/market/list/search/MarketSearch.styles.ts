import styled from '@emotion/styled'
import { Button, Input } from 'antd'

export const Wrapper = styled.div`
  width: 60%;
`

export const TitleSearch = styled(Input)`
  height: 5.2rem;
  border-color: var(--gray-2);
`

export const Btn = styled(Button)`
  width: 10%;
  font-weight: 500;
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-radius: 10px;
  cursor: pointer;
`
