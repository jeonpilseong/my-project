import { Button } from 'antd'
import styled from '@emotion/styled'

export const Container = styled.div`
  width: 95%;
  max-width: 120rem;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
`

export const Logo = styled.img`
  width: 60px;
  height: 60px;
  cursor: pointer;
`

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

export const Btn = styled(Button)``
