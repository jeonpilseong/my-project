import Banner from './banner/Banner.container'
import LayoutHeader from './header/Header.container'
import Navigation from './navigation/navigation.container'

interface ILayoutProps {
  children: JSX.Element
}

export default function Layout(props: ILayoutProps) {
  return (
    <>
      <LayoutHeader />
      <Banner />
      <Navigation />
      {props.children}
    </>
  )
}
