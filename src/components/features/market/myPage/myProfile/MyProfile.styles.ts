import styled from '@emotion/styled'
import { Button, Input } from 'antd'

export const Wrapper = styled.div`
  width: 100%;
  border-left: 1px solid var(--gray-4);
  padding-left: 6rem;
  position: relative;
`

export const Title = styled.h1`
  font-weight: 700;
  font-size: 2.4rem;
  margin-bottom: 4rem;
`

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

export const BtnText = styled.div`
  width: 20%;
  font-weight: 700;
  font-size: 1.6rem;
`

export const BasicInput = styled(Input)`
  width: 80%;
  height: 5.2rem;
  border: 1px solid var(--gray-4);
`
interface ISubmitBtnProps {
  isvalid: string
}

export const SubmitBtn = styled(Button)`
  font-size: 1.6rem;
  margin-top: 2rem;
  width: 18rem;
  height: 5.2rem;
  position: absolute;
  right: 0;
  background: ${(props: ISubmitBtnProps) => (props.isvalid === 'true' ? 'var(--blue-1)' : '')};
  color: ${(props: ISubmitBtnProps) => (props.isvalid === 'true' ? 'white' : 'black')};
`

export const ErrorWrapper = styled.div`
  margin-top: 0.3rem;
  display: flex;
  margin-bottom: 2rem;
`

export const HiddenDiv = styled.div`
  width: 20%;
`

export const Error = styled.div`
  color: var(--error-red);
  font-size: 1.6rem;
`
