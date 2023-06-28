import { DownOutlined } from '@ant-design/icons'
import { Dropdown, MenuProps, Modal, Space } from 'antd'
import Script from 'next/script'

import { useMoneyFormat } from '@/common/hooks/useMoneyFormat'
import { useState } from 'react'
import styled from '@emotion/styled'
import { useMutation } from '@apollo/client'
import { IMutation, IMutationCreatePointTransactionOfLoadingArgs } from '@/common/types/generated/types'
import { CREATE_POINT_TRANSACTION_OF_LOADING } from './PointChargeModal.queries'
import { useRecoilState } from 'recoil'
import { isModalOpenState } from '@/common/stores'
import { IPointChargeModalProps } from './PointChargeModal.types'

const { MoneyFormat } = useMoneyFormat()

const Text = styled.div`
  font-size: 1.8rem;
`
const pointMenuList = [100, 500, 1000, 5000, 10000, 50000, 100000]

// ** 포인트 충전 DropDown 메뉴 목록
const pointMenu: MenuProps['items'] = [
  ...pointMenuList.map((el, index) => ({
    key: String(index),
    label: (
      <>
        <Text>{`${MoneyFormat(el)} P`}</Text>
      </>
    ),
  })),
]

// **** window 안에 IMP가 있음을 선언
declare const window: typeof globalThis & {
  IMP: any
}

export default function PointChargeModal(props: IPointChargeModalProps) {
  // **** 상태값
  const [isModalOpen, setIsModalOpen] = useRecoilState(isModalOpenState)
  const [point, setPoint] = useState(0)

  // ** graphql api 요청
  const [createPointTransactionOfLoading] = useMutation<
    Pick<IMutation, 'createPointTransactionOfLoading'>,
    IMutationCreatePointTransactionOfLoadingArgs
  >(CREATE_POINT_TRANSACTION_OF_LOADING)

  // **** 포인트 충전 DropDown 메뉴 클릭
  const handlePointMenuClick: MenuProps['onClick'] = e => {
    pointMenuList.forEach((el, index) => {
      if (e.key === String(index)) setPoint(el)
    })
  }

  // **** 모달창 cancel
  const handleCancel = () => {
    setIsModalOpen(false)
    setPoint(0)
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
            // ** 아폴로 캐시에 충전된 포인트로 반영하여 수정
            update(cache) {
              cache.modify({
                fields: {
                  fetchUserLoggedIn: () => {},
                },
              })
            },
          })
          Modal.success({ content: '포인트가 충전 되었습니다.' })
        } else {
          // 결제 실패 시 로직,
          console.log(rsp)
        }
        setIsModalOpen(false)
        setPoint(0)
      },
    )
  }

  return (
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
  )
}
