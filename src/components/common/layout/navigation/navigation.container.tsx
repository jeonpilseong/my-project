import { useRouter } from 'next/router'
import { MenuProps } from 'antd'

import NavigationUI from './navigation.presenter'

export default function Navigation() {
  const router = useRouter()

  const onClickMenu: MenuProps['onClick'] = event => {
    router.push(event.key, undefined, { scroll: false })
  }
  return <NavigationUI onClickMenu={onClickMenu} />
}
