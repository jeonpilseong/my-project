import styled from '@emotion/styled'
import { Button } from 'antd'

import { breakPoints } from '@/common/styles/globalStyles'

export const Wrapper = styled.div`
  width: 95%;
  margin: auto;
  max-width: 120rem;
  margin-top: 10rem;
  margin-bottom: 10rem;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);

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

export const BoardHeader = styled.div`
  padding: 1.1rem 1.4rem;
  height: 5.2rem;
  display: flex;
  align-items: center;
  border-top: 1px solid var(--gray-1);
  border-bottom: 1px solid var(--gray-3);
  font-weight: 500;
  font-size: 1.8rem;
  text-align: center;
`

export const ColumnNumber = styled.div`
  width: 10%;
`

export const ColumnTitle = styled.div`
  width: 60%;
  cursor: pointer;
`

export const ColumnWriter = styled.div`
  width: 15%;
`

export const ColumnDate = styled.div`
  width: 15%;
`

export const Row = styled.div`
  text-align: center;
  font-weight: 400;
  font-size: 1.6rem;
  /* height: 6rem; */
  color: #4f4f4f;
  padding: 1.4rem 1.4rem;
  border-bottom: 1px solid var(--gray-3);
  display: flex;
  align-items: center;
`

export const BoardFooter = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
`

export const HiddenDiv = styled.div``

export const Btn = styled(Button)`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 1.4rem 1.6rem;
  border-radius: 10px;
  cursor: pointer;
`

export const BtnImg = styled.img`
  margin-right: 1.1rem;
`

export const BtnText = styled.div`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.4rem;
  text-align: center;
`
