import styled from '@emotion/styled'
import { Button, Input, Upload } from 'antd'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'

import { breakPoints } from '@/common/styles/globalStyles'

// **** 프리렌더링 시점에서 import 불러오기 방지
const ReactQuill = dynamic(async () => await import('react-quill'), { ssr: false })

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`

export const Wrapper = styled.div`
  width: 95%;
  max-width: 120rem;
  margin-top: 10rem;
  margin-bottom: 10rem;
  box-shadow: 0px 0px 10px gray;

  @media ${breakPoints.PC} {
    padding: 8rem 10.2rem 10rem 10.2rem;
  }

  @media ${breakPoints.TABLET} {
    padding: 5rem 2.5rem;
  }

  @media ${breakPoints.MOBILE} {
    padding: 5rem 2.5rem;
  }
`

export const Title = styled.div`
  font-size: 3.6rem;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media ${breakPoints.MOBILE} {
    font-size: 2.4rem;
  }
`

export const Label = styled.div`
  margin-top: 4rem;
  font-size: 1.6rem;
  font-weight: bold;
  padding-bottom: 1.6rem;
`

export const BasicInput = styled(Input)`
  height: 5.2rem;
  border: 1px solid var(--gray-4);
`

export const TextEditor = styled(ReactQuill)`
  height: 32rem;
  padding-bottom: 4rem;
`

export const ZipcodeWrapper = styled.div``

export const ZipcodeInput = styled(Input)`
  width: 7.7rem;
  height: 5.2rem;
  text-align: center;
  color: var(--gray-4);
  border: 1px solid var(--gray-4);
`

export const ZicodeBtn = styled(Button)`
  width: 12.4rem;
  height: 5.2rem;
  margin-left: 1.6rem;
  background: black;
  color: white;
  cursor: pointer;
`

export const AddressInput = styled(Input)`
  height: 5.2rem;
  border: 1px solid var(--gray-4);
  margin-top: 1.6rem;
`

export const ImgWrapper = styled.div``

export const ImgUploadBtn = styled(Upload)``

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.4rem;
  padding-top: 8rem;
`

export const SubmitBtn = styled(Button)`
  font-size: 1.6rem;
  width: 17.9rem;
  height: 5.2rem;
`

export const Error = styled.div`
  margin-top: 0.3rem;
  color: var(--error-red);
  font-size: 1.6rem;
`
