import { DownOutlined, UserOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Dropdown, Space } from 'antd'
import { useRouter } from 'next/router'

import * as S from './DropDown.styles'

export function DropDownBtn(props: any) {
  const router = useRouter()

  const items: MenuProps['items'] = [
    {
      key: '0',
      label: (
        <S.Wrapper>
          {props.UserData?.fetchUserLoggedIn?.picture ? (
            <S.AvatarIcon src={`https://storage.googleapis.com/${props.UserData.fetchUserLoggedIn.picture}`} />
          ) : (
            <S.AvatarIcon icon={<UserOutlined />} />
          )}

          <S.ProfileWrapper>
            <S.Name>{`${props.UserData?.fetchUserLoggedIn.name} 님`}</S.Name>
            <S.PointWrapper>
              <S.PointImg src="/images/logo/point.png" />
              <S.Point>{`${props.UserData?.fetchUserLoggedIn?.UserPoint?.amount ?? 0} P`}</S.Point>
            </S.PointWrapper>
          </S.ProfileWrapper>
        </S.Wrapper>
      ),
    },
    {
      key: '1',
      label: <S.Text>포인트 충전하기</S.Text>,
    },
    {
      key: '2',
      label: <S.Text>마이페이지</S.Text>,
    },
    {
      key: '3',
      label: <S.Text>로그아웃</S.Text>,
    },
  ]

  const handleMenuClick: MenuProps['onClick'] = e => {
    if (e.key === '2') router.push(`/market/myPage/myBasket`, undefined, { scroll: false })
    if (e.key === '3') props.onClickLogout()
  }

  return (
    <Dropdown
      menu={{
        items,
        onClick: handleMenuClick,
      }}>
      <a onClick={e => e.preventDefault()}>
        <Space style={{ fontSize: '1.6rem' }}>
          <h3>{`${props.UserData.fetchUserLoggedIn.name} 님`}</h3>
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  )
}
