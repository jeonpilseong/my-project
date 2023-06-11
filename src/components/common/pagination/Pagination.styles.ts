import styled from '@emotion/styled'
interface IPageProps {
  isActive?: boolean
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`

export const Page = styled.span`
  font-size: 1.6rem;
  color: ${(props: IPageProps) => (props.isActive ? 'var(--blue-1)' : 'default')};
  font-weight: ${(props: IPageProps) => (props.isActive ? 'bold' : 'normal')};
  cursor: pointer;
`
