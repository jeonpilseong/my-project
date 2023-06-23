import InfiniteScroll from 'react-infinite-scroller'
import { UserOutlined } from '@ant-design/icons'

import { useMoveToPage } from '@/common/hooks/useMoveToPage'
import * as S from './MarketList.styles'
import { IMarketListUIProps } from './MarketList.types'
import { useMoneyFormat } from '@/common/hooks/useMoneyFormat'
import Basket from './basket/Basket.container'
import { IQuery } from '@/common/types/generated/types'

export default function MarketListUI(props: IMarketListUIProps) {
  // **** 커스텀 훅
  const { onClickMoveToPage } = useMoveToPage()
  const { MoneyFormat } = useMoneyFormat()

  // **** 무한스크롤 실행
  const onLoadMore = () => {
    if (!props.UsedItemsData) return

    props.fetchMore({
      variables: { page: Math.ceil((props.UsedItemsData?.fetchUseditems.length ?? 10) / 10) + 1 },
      updateQuery: (prev: Pick<IQuery, 'fetchUseditems'>, { fetchMoreResult }: any) => {
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
    <S.Container>
      <S.Wrapper>
        <S.MarketHeader>
          <S.TextWrapper>
            <S.SellingText onClick={props.isClickSelling} issoldout={String(props.isSoldout)}>
              판매 중 상품
            </S.SellingText>
            <S.SoldoutText onClick={props.isClickSoldout} issoldout={String(props.isSoldout)}>
              판매된 상품
            </S.SoldoutText>
          </S.TextWrapper>
          <S.BtnWrapper>
            <S.Btn type="primary" onClick={onClickMoveToPage(`/market/new`)}>
              <S.BtnText>상품 등록하기</S.BtnText>
            </S.Btn>
          </S.BtnWrapper>
        </S.MarketHeader>

        <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
          {props?.UsedItemsData ? (
            props?.UsedItemsData?.fetchUseditems
              .filter(el => el.images?.[0] !== '')
              .map(el => (
                <S.ItemWrapper key={el._id} onClick={props.onClickBasket(el)}>
                  {!el.images?.[0] ? (
                    <S.ImageWrapper src="/images/market/productDefault.jpg" />
                  ) : (
                    <S.ImageWrapper src={`https://storage.googleapis.com/${el.images[0]}`} />
                  )}
                  <S.ContentsWrapper>
                    <S.ProductDetail>
                      <S.ProductName>{el.name}</S.ProductName>
                      <S.ProductRemarks>{el.remarks}</S.ProductRemarks>
                    </S.ProductDetail>
                    <S.ProfileContainer>
                      <S.Address>{el?.useditemAddress?.address ?? ''}</S.Address>
                      <S.ProfileWrapper>
                        {el.seller?.picture ? (
                          <S.AvatarIcon src={`https://storage.googleapis.com/${el.seller.picture}`} />
                        ) : (
                          <S.AvatarIcon icon={<UserOutlined />} />
                        )}
                        <S.UserName>{el.seller?.name}</S.UserName>
                        <S.PickImg src="/images/market/heart.png" />
                        <S.PickCount>{el.pickedCount}</S.PickCount>
                      </S.ProfileWrapper>
                    </S.ProfileContainer>
                  </S.ContentsWrapper>

                  <S.PriceContainer>
                    <S.PriceWrapper>
                      <S.PriceImg src="/images/market/money.png" />
                      <S.Price>{`${MoneyFormat(el.price ?? 0)}원`}</S.Price>
                    </S.PriceWrapper>
                  </S.PriceContainer>
                </S.ItemWrapper>
              ))
          ) : (
            <></>
          )}
        </InfiniteScroll>
      </S.Wrapper>
      <Basket />
    </S.Container>
  )
}
