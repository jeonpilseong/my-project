import LayoutHeader from './header/Header.container'

interface ILayoutProps {
  children: JSX.Element
}

export default function Layout(props: ILayoutProps) {
  return (
    <>
      <LayoutHeader />
      {props.children}
    </>
  )
}
