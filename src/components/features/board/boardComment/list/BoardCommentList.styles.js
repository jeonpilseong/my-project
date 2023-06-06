import styled from '@emotion/styled'
import { Avatar, Button } from 'antd'

import { breakPoints } from '../../../../../../src/common/styles/globalStyles'

export const Wrapper = styled.div`
  width: 95%;
  margin: auto;
  max-width: 120rem;
  margin-top: 10rem;
  margin-bottom: 10rem;

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
