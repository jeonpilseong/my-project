import styled from '@emotion/styled'
import { breakPoints } from '@/common/styles/globalStyles'
import { Avatar } from 'antd'

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

export const ProductWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
`

export const HalfDiv = styled.div``

export const ProductRemarks = styled.h3`
  font-size: 1.8rem;
  line-height: 27px;
  color: var(--gray-3);
`

export const ProductName = styled.h2`
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 36px;
`

export const ProductPrice = styled.h1`
  font-weight: 700;
  line-height: 53px;
  font-size: 36px;
`

// export const UpBtnWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
// `

// export const UpBtn = styled.img`
//   width: 3rem;
//   height: 3rem;
//   margin: auto;
//   cursor: pointer;
// `

// export const UpCount = styled.span`
//   font-weight: 400;
//   font-size: 18px;
//   line-height: 27px;

//   text-align: center;
// `

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Image = styled.img`
  margin-top: 4rem;
  height: 40rem;
  object-fit: cover;
`

export const Contents = styled.div`
  margin-top: 4rem;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.4rem;
  margin-bottom: 12rem;
`
