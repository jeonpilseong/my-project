import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
  border-left: 1px solid var(--gray-4);
  padding-left: 6rem;
`

export const MyHeaderWrapper = styled.div`
  margin-bottom: 2rem;
`

export const MyHeaderTextWrapper = styled.div`
  display: flex;
  gap: 2.5rem;
  font-weight: 400;
  font-size: 16px;
`

interface IMyheaderTextProps {
  isClickMyPurchase: boolean
}

export const MyPurchaseText = styled.h3`
  color: ${(props: IMyheaderTextProps) => (props.isClickMyPurchase ? 'black' : 'var(--gray-2)')};
  cursor: pointer;
`

export const MySalesText = styled.h3`
  color: ${(props: IMyheaderTextProps) => (!props.isClickMyPurchase ? 'black' : 'var(--gray-2)')};
  cursor: pointer;
`
