import styled from '@emotion/styled'

import { breakPoints } from '@/common/styles/globalStyles'

export const MyPageContainer = styled.div`
  margin: auto;
  width: 95%;
  max-width: 120rem;
  margin-top: 10rem;
  margin-bottom: 10rem;
  box-shadow: 0px 0px 10px gray;
  display: flex;

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
