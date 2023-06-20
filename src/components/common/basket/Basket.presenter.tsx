import { useEffect, useState } from 'react'

import * as S from './Basket.styles'
import { IUseditem } from '@/common/types/generated/types'
import { useMoneyFormat } from '@/common/hooks/useMoneyFormat'
import { useMoveToPage } from '@/common/hooks/useMoveToPage'

export default function BasketUI() {
  // **** 상태값
  const [baskets, setBaskets] = useState<IUseditem[]>([])

  // **** 커스텀 훅
  const { onClickMoveToPage } = useMoveToPage()
  const { MoneyFormat } = useMoneyFormat()

  // **** 컴포넌트 마운트 시 장바구니 불러오기
  useEffect(() => {
    if (localStorage.getItem('baskets')) setBaskets(JSON.parse(localStorage.getItem('baskets') ?? ''))
  }, [])

  return (
    <>
      {!baskets[0] ? (
        <S.Wrapper>
          <S.Title>최근에 본 상품</S.Title>
        </S.Wrapper>
      ) : (
        <S.Wrapper>
          <S.Title>최근에 본 상품</S.Title>

          {baskets.map((el, index) => (
            <S.ProductWrapper key={index} onClick={onClickMoveToPage(`/market/detail/${el._id}`)}>
              <S.ProductImg
                src={el.images ? `https://storage.googleapis.com/${el.images[0]}` : `/images/market/productDefault.jpg`}
              />
              <S.Name>{el.name}</S.Name>
              <S.Remarks>{el.remarks}</S.Remarks>
              <S.Price>{`${MoneyFormat(el.price ?? 0)}원`}</S.Price>
            </S.ProductWrapper>
          ))}
        </S.Wrapper>
      )}
    </>
  )
}
