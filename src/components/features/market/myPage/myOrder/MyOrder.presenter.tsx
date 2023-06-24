import { useScroll } from '@/common/hooks/useScroll'
import * as S from './MyOrder.styles'
import { IMyOrderUIProps } from './MyOrder.types'
import { useMoneyFormat } from '@/common/hooks/useMoneyFormat'
import Pagination from '@/components/common/pagination/Pagination'
import { useMoveToPage } from '@/common/hooks/useMoveToPage'

export default function MyOrderUI(props: IMyOrderUIProps) {
  // **** 커스텀 훅
  const { scrollRef } = useScroll()
  const { MoneyFormat } = useMoneyFormat()
  const { onClickMoveToPage } = useMoveToPage()

  return (
    <S.Wrapper ref={scrollRef}>
      <S.MyHeaderWrapper>
        <S.MyHeaderTextWrapper>
          <S.myPointText id="myPoint" isClickHistory={props.isClickHistory} onClick={props.onClickMyPurchase}>
            충전내역
          </S.myPointText>
          <S.MyPurchaseText id="myPurchase" isClickHistory={props.isClickHistory} onClick={props.onClickMyPurchase}>
            구매내역
          </S.MyPurchaseText>
          <S.MySalesText id="mySales" isClickHistory={props.isClickHistory} onClick={props.onClickMyPurchase}>
            판매내역
          </S.MySalesText>
        </S.MyHeaderTextWrapper>
      </S.MyHeaderWrapper>

      {props.isClickHistory[0] && (
        <>
          <S.OrderHeader>
            <S.ColumnDate>충전일</S.ColumnDate>
            <S.ColumnID>결제 ID</S.ColumnID>
            <S.ColumnAmount>충전내역</S.ColumnAmount>
            <S.ColumnBalance>충전 후 잔액</S.ColumnBalance>
          </S.OrderHeader>

          {props.PointData?.fetchPointTransactionsOfLoading.map(el => (
            <S.Row key={el._id}>
              <S.ColumnDate>{el.createdAt.slice(0, 10)}</S.ColumnDate>
              <S.ColumnID>{el.impUid}</S.ColumnID>
              <S.ColumnAmount style={{ color: 'var(--blue-1)', fontWeight: '700' }}>
                {`+${MoneyFormat(el.amount)}`}
              </S.ColumnAmount>
              <S.ColumnBalance>{`￦${MoneyFormat(el.balance)}`}</S.ColumnBalance>
            </S.Row>
          ))}

          <S.PageWrapper>
            <Pagination
              refetch={props.PointDataRefetch}
              ItemsCount={props.PointDataCount?.fetchPointTransactionsCountOfLoading}
            />
          </S.PageWrapper>
        </>
      )}

      {props.isClickHistory[1] && (
        <>
          <S.OrderHeader>
            <S.ColumnDate>거래일</S.ColumnDate>
            <S.ColumnProduct>상품명</S.ColumnProduct>
            <S.ColumnAmount>거래내역</S.ColumnAmount>
            <S.ColumnBalance>거래 후 잔액</S.ColumnBalance>
          </S.OrderHeader>

          {props.BuyingData?.fetchPointTransactionsOfBuying.map(el => (
            <S.Row key={el._id}>
              <S.ColumnDate>{el.createdAt.slice(0, 10)}</S.ColumnDate>
              <S.ColumnProduct onClick={onClickMoveToPage(`/market/detail/${el.useditem?._id}`)}>
                {el.useditem?.name}
              </S.ColumnProduct>
              <S.ColumnAmount style={{ color: 'var(--blue-1)', fontWeight: '700' }}>
                {MoneyFormat(el.amount)}
              </S.ColumnAmount>
              <S.ColumnBalance>{`￦${MoneyFormat(el.balance)}`}</S.ColumnBalance>
            </S.Row>
          ))}

          <S.PageWrapper>
            <Pagination
              refetch={props.BuyingDataRefetch}
              ItemsCount={props.BuyingDataCount?.fetchPointTransactionsCountOfBuying}
            />
          </S.PageWrapper>
        </>
      )}

      {props.isClickHistory[2] && (
        <>
          <S.OrderHeader>
            <S.ColumnDate>거래일</S.ColumnDate>
            <S.ColumnProduct>상품명</S.ColumnProduct>
            <S.ColumnAmount>거래내역</S.ColumnAmount>
            <S.ColumnBalance>거래 후 잔액</S.ColumnBalance>
          </S.OrderHeader>

          {props.SellingData?.fetchPointTransactionsOfSelling.map(el => (
            <S.Row key={el._id}>
              <S.ColumnDate>{el.createdAt.slice(0, 10)}</S.ColumnDate>
              <S.ColumnProduct onClick={onClickMoveToPage(`/market/detail/${el.useditem?._id}`)}>
                {el.useditem?.name}
              </S.ColumnProduct>
              <S.ColumnAmount style={{ color: 'var(--blue-1)', fontWeight: '700' }}>
                {`+${MoneyFormat(el.amount)}`}
              </S.ColumnAmount>
              <S.ColumnBalance>{`￦${MoneyFormat(el.balance)}`}</S.ColumnBalance>
            </S.Row>
          ))}

          <S.PageWrapper>
            <Pagination
              refetch={props.SellingDataRefetch}
              ItemsCount={props.SellingDataCount?.fetchPointTransactionsCountOfSelling}
            />
          </S.PageWrapper>
        </>
      )}
    </S.Wrapper>
  )
}
