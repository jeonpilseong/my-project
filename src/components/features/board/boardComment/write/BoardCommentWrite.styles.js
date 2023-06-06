import styled from '@emotion/styled'
import { Input, Button } from 'antd'

export const Wrapper = styled.div`
  width: 95%;
  margin: auto;
  max-width: 120rem;
  margin-top: 10rem;
  margin-bottom: 6.5rem;
  padding-top: 4rem;
  border-top: 1px solid var(--gray-3);
`

export const EditWrapper = styled.div`
  width: 95%;
  margin: auto;
  max-width: 120rem;
  margin-bottom: 2.2rem;
  padding-bottom: 4rem;
  border-bottom: 1px solid var(--gray-3);
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4.2rem;
`

export const TitleImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 14px;
`

export const TitleText = styled.div`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.7rem;
`

const { TextArea } = Input
export const CommentInput = styled(TextArea)`
  margin-top: 2.2rem;
  border: 1px solid var(--gray-4);
`

export const Btn = styled(Button)`
  margin-top: 2.2rem;
`
