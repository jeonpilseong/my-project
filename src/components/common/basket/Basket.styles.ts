import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 13%;
  height: 67rem;
  border: 1px solid var(--gray-3);
  position: sticky;
  top: 10rem;
`

export const Title = styled.h3`
  font-weight: 700;
  font-size: 1.8rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  height: 20rem;
  border: 1px solid var(--gray-3);
  margin-bottom: 1.5rem;
  cursor: pointer;
`

export const PickContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

export const PickWrapper = styled.div`
  margin-top: 1.2rem;
  display: flex;
  gap: 0.5rem;
`

export const PickImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`

export const PickCount = styled.span`
  font-weight: 500;
  font-size: 12px;
  margin-right: 1rem;
`

export const ProductImg = styled.img`
  margin-top: 1.2rem;
  margin-bottom: 0.8rem;
  width: 80%;
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
  color: #4f4f4f;
`

export const Price = styled.div`
  font-weight: 400;
  font-size: 1.2rem;
`
