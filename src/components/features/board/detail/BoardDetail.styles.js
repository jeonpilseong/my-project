import styled from '@emotion/styled'
import { Avatar, Button } from 'antd'

import { breakPoints } from '../../../../../src/common/styles/globalStyles'

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

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--gray-3);
`

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`

export const AvatarIcon = styled(Avatar)``

export const WriterWrapper = styled.div`
  margin-left: 1.67rem;
`

export const Writer = styled.div`
  font-weight: 500;
  font-size: 2.4rem;
`

export const Date = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: var(--gray-2);
  line-height: 24px;
`

export const AddressWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const AddressIcon = styled.img`
  width: 1.86rem;
  height: 2.67rem;
  cursor: pointer;
`

export const ClipIcon = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  margin-right: 2.93rem;
  cursor: pointer;
`

export const Title = styled.div`
  margin-top: 8rem;
  font-weight: 700;
  font-size: 3.6rem;
  line-height: 5.3rem;
`

export const Image = styled.div`
  margin-top: 4rem;
  height: 480px;
  background: #eee;
`

export const Contents = styled.div`
  margin-top: 4rem;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.4rem;
  margin-bottom: 12rem;
`

export const Youtube = styled.div`
  margin: auto;
  width: 60%;
  height: 240px;
  background: #eee;
`

export const UpDownWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`

export const UpBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 3rem;
`

export const DownBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const UpBtn = styled.img`
  width: 2rem;
  height: 1.8rem;
  margin-bottom: 0.4rem;
  margin: auto;
  cursor: pointer;
`

export const UpCount = styled.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #ffd600;
`

export const DownBtn = styled.img`
  width: 2rem;
  height: 1.8rem;
  margin-bottom: 0.4rem;
  margin: auto;
  cursor: pointer;
`

export const DownCount = styled.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #828282;
  text-align: center;
`

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`

export const Btn = styled(Button)`
  width: 17.9rem;
  height: 5.2rem;
  margin-right: 2.4rem;
`
