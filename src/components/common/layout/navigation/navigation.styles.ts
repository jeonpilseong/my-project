import styled from '@emotion/styled'
import { Layout, Menu } from 'antd'

const { Header } = Layout

export const NavHeader = styled(Header)`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--blue-1);
`

export const NavMenu = styled(Menu)`
  width: 80%;
  font-weight: 600;
  font-size: 1.6rem;
  background: white;

  color: var(--blue-1);
  display: flex;
  justify-content: center;
  border-top: 1px solid var(--blue-1);
`
