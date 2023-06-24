import styled from '@emotion/styled'
import { Button, Input } from 'antd'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15%;
  margin-right: 6rem;
`

export const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 4.8rem;
`

export const UploadImageBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.8rem;
  align-items: center;
  width: 10rem;
  height: 10rem;
  border-radius: 5rem;
  background: #fafafa;
  border: 1px dashed var(--gray-3);
  overflow: hidden;
  cursor: pointer;
  &:hover {
    border: 1px dashed var(--blue-1);
  }
`

export const UploadTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const UploadText = styled.div`
  margin-top: 1rem;
  font-size: 1.3rem;
`

export const Writer = styled.h2`
  font-weight: 700;
  font-size: 24px;
`

export const WriterEditWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 6rem;
`

export const WriterInput = styled(Input)``

export const WriterBtn = styled(Button)`
  height: auto;
  font-size: 1.6rem;
`

export const MyBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: 400;
  font-size: 1.8rem;
`
interface IMySide {
  isClickMySide: boolean[]
}

export const MyBasket = styled.div`
  color: ${(props: IMySide) => (props.isClickMySide[0] ? 'black' : 'var(--gray-2)')};
  cursor: pointer;
  margin-bottom: 2.3rem;
`

export const MyOrder = styled.div`
  color: ${(props: IMySide) => (props.isClickMySide[1] ? 'black' : 'var(--gray-2)')};
  cursor: pointer;
  margin-bottom: 2.3rem;
`

export const MyProfile = styled.div`
  color: ${(props: IMySide) => (props.isClickMySide[2] ? 'black' : 'var(--gray-2)')};
  cursor: pointer;
  margin-bottom: 2.3rem;
`
