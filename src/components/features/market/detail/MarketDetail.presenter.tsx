import { Tooltip } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import Dompurify from 'dompurify' // XSS 공격 방어

import * as S from './MarketDetail.styles'
import KakaoMap from '@/components/common/kakaoMap/kakaoMap'
import { useMoveToPage } from '@/common/hooks/useMoveToPage'
import { useMoneyFormat } from '@/common/hooks/useMoneyFormat'
import { useScroll } from '@/common/hooks/useScroll'
import { IMarketDetailProps } from './MarketDetail.types'

export default function MarketDetailUI(props: IMarketDetailProps) {
  // **** custom hooks
  const { MoneyFormat } = useMoneyFormat()
  const { onClickMoveToPage } = useMoveToPage()
  const { scrollRef } = useScroll()

  // **** 카카오 맵
  KakaoMap(props.UseditemData?.fetchUseditem?.useditemAddress?.address ?? '')

  return (
    <S.Wrapper ref={scrollRef}>
      <S.Header>
        <S.ProfileWrapper>
          {props.UseditemData?.fetchUseditem?.seller?.picture ? (
            <S.AvatarIcon
              size={50}
              src={`https://storage.googleapis.com/${props.UseditemData?.fetchUseditem?.seller.picture}`}
            />
          ) : (
            <S.AvatarIcon size={50} icon={<UserOutlined />} />
          )}
          <S.WriterWrapper>
            <S.Writer>{props.UseditemData?.fetchUseditem?.seller?.name}</S.Writer>
            <S.Date>{props.UseditemData?.fetchUseditem.createdAt.slice(0, 10)}</S.Date>
          </S.WriterWrapper>
        </S.ProfileWrapper>

        <S.AddressWrapper>
          <S.ClipIcon src="/images/detail/Clip.png" />
          <Tooltip
            open={true}
            title={`${props.UseditemData?.fetchUseditem?.useditemAddress?.address} 
              ${props.UseditemData?.fetchUseditem?.useditemAddress?.addressDetail}`}>
            <S.AddressIcon src="/images/detail/Location.png" />
          </Tooltip>
        </S.AddressWrapper>
      </S.Header>

      <S.ProductWrapper>
        <S.ProductNameWrapper>
          <S.ProductRemarks>{props.UseditemData?.fetchUseditem?.remarks}</S.ProductRemarks>
          <S.ProductName>{props.UseditemData?.fetchUseditem?.name}</S.ProductName>
        </S.ProductNameWrapper>
        <S.PickWrapper>
          <S.PickImg onClick={props.onClickPick} src="/images/market/heart.png" />
          <S.PickCount>{props.UseditemData?.fetchUseditem?.pickedCount}</S.PickCount>
        </S.PickWrapper>
      </S.ProductWrapper>
      <S.ProductPrice>{`${MoneyFormat(props.UseditemData?.fetchUseditem?.price ?? 0)}원`}</S.ProductPrice>

      <S.ImageWrapper>
        {props.UseditemData?.fetchUseditem.images?.map(
          (el: string, index: number) => el && <S.Image key={index} src={`https://storage.googleapis.com/${el}`} />,
        )}
      </S.ImageWrapper>

      {typeof window !== 'undefined' && (
        <>
          <S.Contents
            dangerouslySetInnerHTML={{
              __html: Dompurify.sanitize(props.UseditemData?.fetchUseditem?.contents ?? ''),
            }}
          />
        </>
      )}

      <div id="map" style={{ height: 400 }}></div>

      <S.BtnWrapper>
        <S.Btn onClick={onClickMoveToPage(`/`)}>목록으로</S.Btn>
        {props.UseditemData?.fetchUseditem.buyer ? (
          <S.Btn disabled>판매완료</S.Btn>
        ) : (
          <S.Btn onClick={props.onClickPayment} type="primary">
            구매하기
          </S.Btn>
        )}
      </S.BtnWrapper>
    </S.Wrapper>
  )
}
