import InfiniteScroll from 'react-infinite-scroller'

import { useMoveToPage } from '@/common/hooks/useMoveToPage'
import * as S from './MarketList.styles'
import { IMarketListUIProps } from './MarketList.types'

export default function MarketListUI(props: IMarketListUIProps) {
  const { onClickMoveToPage } = useMoveToPage()

  const onLoadMore = () => {
    if (!props.UsedItemsData) return

    props.fetchMore({
      variables: { page: Math.ceil((props.UsedItemsData?.fetchUseditems.length ?? 10) / 10) + 10 },
      updateQuery: (prev: any, { fetchMoreResult }: any) => {
        if (!fetchMoreResult.fetchUseditems) {
          return {
            fetchUseditems: [...prev.fetchUseditems],
          }
        }

        return {
          fetchUseditems: [...prev.fetchUseditems, ...fetchMoreResult.fetchUseditems],
        }
      },
    })
  }

  return (
    <S.Wrapper>
      <S.MarketHeader>
        <S.TextWrapper>
          <S.SellingText onClick={props.isClickSelling} issoldout={String(props.isSoldout)}>
            판매중상품
          </S.SellingText>
          <S.SoldoutText onClick={props.isClickSoldout} issoldout={String(props.isSoldout)}>
            판매된상품
          </S.SoldoutText>
        </S.TextWrapper>
        <S.Btn type="primary" onClick={onClickMoveToPage(`/market/new`)}>
          <S.BtnText>상품 등록하기</S.BtnText>
        </S.Btn>
      </S.MarketHeader>

      <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
        {props.UsedItemsData?.fetchUseditems.map((el: any) => (
          <S.ItemWrapper key={el._id} onClick={onClickMoveToPage(`/market/detail/${el._id}`)}>
            {!el.images[0] ? (
              <S.ImagaWrapper src="/images/market/productDefault.jpg" />
            ) : (
              <S.ImagaWrapper src={`https://storage.googleapis.com/${el.images[0]}`} />
            )}
            <S.ContentsWrapper>
              <S.ItemName>{el.name}</S.ItemName>
              <S.ItemRemarks>{el.remarks}</S.ItemRemarks>
              <S.UserName>{el.seller.name}</S.UserName>
            </S.ContentsWrapper>
            <S.PriceWrapper>
              <S.Price>{`${el.price}원`}</S.Price>
            </S.PriceWrapper>
          </S.ItemWrapper>
        ))}
      </InfiniteScroll>
    </S.Wrapper>
  )
}
