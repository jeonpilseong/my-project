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
  isClickHistory: boolean[]
}

export const myPointText = styled.h3`
  color: ${(props: IMyheaderTextProps) => (props.isClickHistory[0] ? 'black' : 'var(--gray-2)')};
  cursor: pointer;
`

export const MyPurchaseText = styled.h3`
  color: ${(props: IMyheaderTextProps) => (props.isClickHistory[1] ? 'black' : 'var(--gray-2)')};
  cursor: pointer;
`

export const MySalesText = styled.h3`
  color: ${(props: IMyheaderTextProps) => (props.isClickHistory[2] ? 'black' : 'var(--gray-2)')};
  cursor: pointer;
`
