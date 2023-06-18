import { Layout } from 'antd'

import * as S from './navigation.styles'
import { INavigationUIProps } from './navigation.types'

const NAVIGATION_MENUS = [
  { name: '자유게시판', page: '/boards/list' },
  { name: '중고마켓', page: '/' },
]

export default function NavigationUI(props: INavigationUIProps) {
  return (
    <Layout>
      <S.NavHeader>
        <S.NavMenu
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={NAVIGATION_MENUS.map(el => {
            return {
              key: `${el.page}`,
              label: `${el.name}`,
            }
          })}
          onClick={props.onClickMenu}
        />
      </S.NavHeader>
    </Layout>
  )
}
