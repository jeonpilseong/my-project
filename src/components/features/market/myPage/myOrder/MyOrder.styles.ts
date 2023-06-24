import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
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

export const OrderHeader = styled.div`
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

export const ColumnDate = styled.div`
  width: 15%;
`

export const ColumnID = styled.div`
  width: 55%;
`

export const ColumnProduct = styled.div`
  width: 55%;
  cursor: pointer;
`

export const ColumnAmount = styled.div`
  width: 15%;
`

export const ColumnBalance = styled.div`
  width: 15%;
`

export const ColumnSeller = styled.div`
  width: 15%;
`

export const Row = styled.div`
  text-align: center;
  font-weight: 400;
  font-size: 1.6rem;
  color: #4f4f4f;
  padding: 1.4rem 1.4rem;
  border-bottom: 1px solid var(--gray-3);
  display: flex;
  align-items: center;
`

export const PageWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: calc(100% - 6rem);
`
