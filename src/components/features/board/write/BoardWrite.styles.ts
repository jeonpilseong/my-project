import { Button, Input, Upload } from 'antd'
import styled from '@emotion/styled'

import { breakPoints } from '@/common/styles/globalStyles'

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

export const BoardTitle = styled.div`
  font-size: 3.6rem;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media ${breakPoints.MOBILE} {
    font-size: 2.4rem;
  }
`

export const ProfileWrapper = styled.div`
  padding-top: 4rem;

  @media ${breakPoints.PC} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  @media ${breakPoints.TABLET} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  @media ${breakPoints.MOBILE} {
    display: block;
  }
`

export const HalfBox = styled.div`
  @media ${breakPoints.PC} {
    width: calc(50% - 1.2rem);
  }

  @media ${breakPoints.TABLET} {
    width: calc(50% - 1.2rem);
  }

  @media ${breakPoints.MOBILE} {
    width: 100%;
  }
`

export const Label = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  padding-bottom: 1.6rem;
`

export const WriterInput = styled(Input)`
  height: 5.2rem;
  border: 1px solid var(--gray-4);

  @media ${breakPoints.MOBILE} {
    width: 100%;
    margin-bottom: 4rem;
  }
`

export const PasswordInput = styled(Input)`
  height: 5.2rem;
  border: 1px solid var(--gray-4);
`

export const TitleWrapper = styled.div`
  padding-top: 4rem;
`

export const TitleInput = styled(Input)`
  height: 5.2rem;
  border: 1px solid var(--gray-4);
`

export const ContentsWrapper = styled.div`
  padding-top: 4rem;
`

const { TextArea } = Input
export const ContentsInput = styled(TextArea)`
  border: 1px solid var(--gray-4);
`

export const ZipcodeWrapper = styled.div`
  padding-top: 4rem;
`

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

export const YoutubeWrapper = styled.div`
  padding-top: 4rem;
`

export const YoutubeUrlInput = styled(Input)`
  height: 5.2rem;
  border: 1px solid var(--gray-4);
`

export const ImgWrapper = styled.div`
  padding-top: 4rem;
`

export const ImgUploadWrapper = styled.div`
  width: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`
export const ImgUploadBtn = styled(Upload)``

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 4rem;
`

export const SubmitBtn = styled(Button)`
  width: 17.9rem;
  height: 5.2rem;
`

export const EditToListBtn = styled(Button)`
  width: 17.9rem;
  height: 5.2rem;
  margin-right: 2.4rem;
`

export const Error = styled.div`
  color: var(--error-red);
`
