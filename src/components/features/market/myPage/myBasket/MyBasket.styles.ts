import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
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

export const ColumnProduct = styled.div`
  width: 60%;
  cursor: pointer;
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
  color: #4f4f4f;
  padding: 1.4rem 1.4rem;
  border-bottom: 1px solid var(--gray-3);
  display: flex;
  align-items: center;
`
