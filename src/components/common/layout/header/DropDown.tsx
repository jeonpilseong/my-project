import { DownOutlined, UserOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Dropdown, Modal, Space } from 'antd'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import Script from 'next/script'

import * as S from './DropDown.styles'
import { useMoneyFormat } from '@/common/hooks/useMoneyFormat'
import { IMutation, IMutationCreatePointTransactionOfLoadingArgs } from '@/common/types/generated/types'
import { CREATE_POINT_TRANSACTION_OF_LOADING, FETCH_USER_LOGGED_IN } from './Header.queries'

// **** window 안에 IMP가 있음을 선언
declare const window: typeof globalThis & {
  IMP: any
}

export function DropDownBtn(props: any) {
  const router = useRouter()

  const { MoneyFormat } = useMoneyFormat()

  // **** 상태값
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [point, setPoint] = useState(0)

  // ** graphql api 요청
  const [createPointTransactionOfLoading] = useMutation<
    Pick<IMutation, 'createPointTransactionOfLoading'>,
    IMutationCreatePointTransactionOfLoadingArgs
  >(CREATE_POINT_TRANSACTION_OF_LOADING)

  // **** 모달창 생성
  const showModal = () => {
    setPoint(0)
    setIsModalOpen(true)
  }

  // **** 모달창 ok 클릭 시 포인트 충전
  const handleOk = () => {
    // ** 가맹점 식별 코드
    const IMP = window.IMP
    IMP.init('imp49910675')

    IMP.request_pay(
      {
        // param
        pg: 'kakaopay',
        pay_method: 'card',
        name: '충전',
        amount: point,
        buyer_email: props.UserData?.fetchUserLoggedIn.email,
        buyer_name: props.UserData?.fetchUserLoggedIn.name,
        m_redirect_url: 'http://localhost:3000', // 모바일 결제 후 해당 페이지로 리다이렉트
      },
      async (rsp: any) => {
        if (rsp.success) {
          // ** 포인트 충전
          await createPointTransactionOfLoading({
            variables: {
              impUid: rsp.imp_uid,
            },
            refetchQueries: [
              {
                query: FETCH_USER_LOGGED_IN,
              },
            ],
          })
          Modal.success({ content: '포인트가 충전 되었습니다.' })
        } else {
          // 결제 실패 시 로직,
          console.log(rsp)
        }
        setIsModalOpen(false)
      },
    )
  }

  // **** 모달창 cancel
  const handleCancel = () => setIsModalOpen(false)

  // ** 포인트 충전 DropDown 메뉴 목록
  const pointMenu: MenuProps['items'] = [
    {
      key: '0',
      label: (
        <>
          <S.Text>100 P</S.Text>
        </>
      ),
    },
    {
      key: '1',
      label: (
        <>
          <S.Text>500 P</S.Text>
        </>
      ),
    },
    {
      key: '2',
      label: (
        <>
          <S.Text>1000 P</S.Text>
        </>
      ),
    },
    {
      key: '3',
      label: (
        <>
          <S.Text>5000 P</S.Text>
        </>
      ),
    },
    {
      key: '4',
      label: (
        <>
          <S.Text>10000 P</S.Text>
        </>
      ),
    },
  ]

  // **** 프로필 DropDown 메뉴 목록
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
              <S.Point>{`${props.UserData?.fetchUserLoggedIn.userPoint.amount ?? 0} P`}</S.Point>
            </S.PointWrapper>
          </S.ProfileWrapper>
        </S.Wrapper>
      ),
    },
    {
      key: '1',
      label: (
        <>
          <S.Text>포인트 충전하기</S.Text>
        </>
      ),
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

  // **** 프로필 DropDown 메뉴 클릭
  const handleMenuClick: MenuProps['onClick'] = e => {
    if (e.key === '1') showModal()
    if (e.key === '2') router.push(`/market/myPage/myBasket`, undefined, { scroll: false })
    if (e.key === '3') props.onClickLogout()
  }

  // **** 포인트 충전 DropDown 메뉴 클릭
  const handlePointMenuClick: MenuProps['onClick'] = e => {
    if (e.key === '0') setPoint(100)
    if (e.key === '1') setPoint(500)
    if (e.key === '2') setPoint(1000)
    if (e.key === '3') setPoint(5000)
    if (e.key === '4') setPoint(10000)
  }

  return (
    <>
      <Dropdown
        menu={{
          items,
          onClick: handleMenuClick,
        }}>
        <a onClick={e => e.preventDefault()}>
          <Space style={{ fontSize: '1.8rem' }}>
            <h3>{`${props.UserData.fetchUserLoggedIn.name} 님`}</h3>
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>

      <Modal title="" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Dropdown
          menu={{
            items: pointMenu,
            onClick: handlePointMenuClick,
          }}>
          <a onClick={e => e.preventDefault()}>
            <Space style={{ fontSize: '1.8rem' }}>
              <h3>포인트 충전</h3>
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
        <h2 style={{ marginTop: '2rem', textAlign: 'end' }}>{`${MoneyFormat(point)} P`}</h2>
        <Script src="https://cdn.iamport.kr/v1/iamport.js"></Script>
      </Modal>
    </>
  )
}
