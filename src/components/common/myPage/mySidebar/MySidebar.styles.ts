import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 11%;
  margin-right: 6rem;
`

export const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 4.8rem;
`

export const UploadImageBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.8rem;
  align-items: center;
  width: 10rem;
  height: 10rem;
  border-radius: 5rem;
  background: #fafafa;
  border: 1px dashed var(--gray-3);
  overflow: hidden;
  cursor: pointer;
  &:hover {
    border: 1px dashed var(--blue-1);
  }
`

export const UploadTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const UploadText = styled.div`
  margin-top: 1rem;
  font-size: 1.3rem;
`

export const Writer = styled.h2`
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 6rem;
`
export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: 400;
  font-size: 18px;
`
interface IMySide {
  isClickMySide: boolean[]
}

export const MyBasket = styled.div`
  color: ${(props: IMySide) => (props.isClickMySide[0] ? 'black' : 'var(--gray-2)')};
  cursor: pointer;
  margin-bottom: 2.3rem;
`

export const MyOrder = styled.div`
  color: ${(props: IMySide) => (props.isClickMySide[1] ? 'black' : 'var(--gray-2)')};
  cursor: pointer;
  margin-bottom: 2.3rem;
`

export const MyProfile = styled.div`
  color: ${(props: IMySide) => (props.isClickMySide[2] ? 'black' : 'var(--gray-2)')};
  cursor: pointer;
  margin-bottom: 2.3rem;
`
