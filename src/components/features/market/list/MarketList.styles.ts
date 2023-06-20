import styled from '@emotion/styled'

import { breakPoints } from '@/common/styles/globalStyles'
import { Avatar, Button } from 'antd'

export const Container = styled.div`
  margin: auto;
  width: 95%;
  display: flex;
  padding-top: 10rem;
`

export const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  margin-bottom: 10rem;
  max-width: 120rem;
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

export const MarketHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`

interface ISoldoutText {
  issoldout: string
}

export const TextWrapper = styled.div`
  display: flex;
  align-self: center;
`

export const SellingText = styled.div`
  font-weight: 500;
  font-size: 18px;
  margin-right: 2rem;
  color: ${(props: ISoldoutText) => (props.issoldout === 'false' ? 'black' : 'var(--gray-3)')};
  cursor: pointer;
`

export const SoldoutText = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: ${(props: ISoldoutText) => (props.issoldout === 'true' ? 'black' : 'var(--gray-3)')};
  margin-right: 2rem;
  cursor: pointer;
`

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
  padding-bottom: 2rem;
  border-top: 1px solid var(--gray-4);
  border-bottom: 1px solid var(--gray-4);
  cursor: pointer;
`

export const ImageWrapper = styled.img`
  width: 16rem;
  height: 16rem;
  object-fit: cover;
`

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 65%;
`

export const ItemName = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
`

export const ItemRemarks = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 5.6rem;
`
export const ProfileWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`

export const AvatarIcon = styled(Avatar)``

export const UserName = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`

export const UserImg = styled.img``

export const PriceWrapper = styled.div`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Price = styled.div`
  font-weight: 700;
  font-size: 24px;
`

export const Btn = styled(Button)`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 1.4rem 1.6rem;
  border-radius: 10px;
  cursor: pointer;
`

export const BtnText = styled.div`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.4rem;
  text-align: center;
`
