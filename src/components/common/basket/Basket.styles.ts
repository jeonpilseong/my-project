import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 19.6rem;
  height: 61rem;
  border: 1px solid var(--gray-3);
  position: sticky;
  top: 10rem;
`

export const Title = styled.h3`
  font-weight: 700;
  font-size: 1.8rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15.6rem;
  height: 18rem;
  border: 1px solid var(--gray-3);
  margin-bottom: 1rem;
  cursor: pointer;
`

export const ProductImg = styled.img`
  margin-top: 1.5rem;
  margin-bottom: 0.8rem;
  width: 9rem;
  height: 9rem;
`

export const Name = styled.div`
  font-weight: 500;
  font-size: 1.2rem;
`

export const Remarks = styled.div`
  font-weight: 400;
  font-size: 1.2rem;
  margin-bottom: 0.4rem;
`

export const Price = styled.div`
  font-weight: 400;
  font-size: 1.2rem;
`
