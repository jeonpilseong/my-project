import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
  border-left: 1px solid var(--gray-4);
  padding-left: 6rem;
  position: relative;
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
  isClickMyProduct: boolean
}

export const MyProductText = styled.h3`
  color: ${(props: IMyheaderTextProps) => (props.isClickMyProduct ? 'black' : 'var(--gray-2)')};
  cursor: pointer;
`

export const MyPickText = styled.h3`
  color: ${(props: IMyheaderTextProps) => (!props.isClickMyProduct ? 'black' : 'var(--gray-2)')};
  cursor: pointer;
`

export const BasketHeader = styled.div`
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

interface ICoumnProductProps {
  isClickMyProduct: boolean
}

export const ColumnProduct = styled.div`
  width: ${(props: ICoumnProductProps) => (props.isClickMyProduct ? '60%' : '45%')};
  cursor: pointer;
`

export const CoulmeSeller = styled.div`
  width: 15%;
`

export const ColumnPrice = styled.div`
  width: 15%;
`

export const ColumnDate = styled.div`
  width: 15%;
`

export const Row = styled.div`
  text-align: center;
  font-weight: 400;
  font-size: 1.6rem;
  height: 5rem;
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
