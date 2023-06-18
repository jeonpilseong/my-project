import styled from '@emotion/styled'
import { Layout, Menu } from 'antd'

const { Header } = Layout

export const NavHeader = styled(Header)`
  background: var(--blue-1);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NavMenu = styled(Menu)`
  width: 80%;
  font-size: 1.6rem;
  background: var(--blue-1);
  color: var(--blue-2);
  display: flex;
  justify-content: center;
  .ant-menu-item-selected {
    color: white !important;
  }
`
