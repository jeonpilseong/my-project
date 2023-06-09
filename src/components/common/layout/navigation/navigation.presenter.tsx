import { Layout } from 'antd'

import * as S from './navigation.styles'

export default function NavigationUI() {
  return (
    <Layout>
      <S.NavHeader>
        <S.NavMenu
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={['자유게시판', '중고마켓', '마이페이지'].map((menu, index) => {
            const key = index + 1
            return {
              key,
              label: `${menu}`,
            }
          })}
        />
      </S.NavHeader>
    </Layout>
  )
}
