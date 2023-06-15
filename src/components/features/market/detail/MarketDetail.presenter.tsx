import { Tooltip } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import Dompurify from 'dompurify' // XSS 공격 방어

import * as S from './MarketDetail.styles'
import KakaoMap from '@/components/common/kakaoMap/kakaoMap'

export default function MarketDetailUI(props: any) {
  // **** 카카오 맵
  KakaoMap(props.UseditemData?.fetchUseditem?.useditemAddress?.address)

  return (
    <S.Wrapper>
      <S.Header>
        <S.ProfileWrapper>
          <S.AvatarIcon size={50} icon={<UserOutlined />} />
          <S.WriterWrapper>
            <S.Writer>{props.UserData?.fetchUserLoggedIn?.name}</S.Writer>
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
        <S.HalfDiv>
          <S.ProductRemarks>{props.UseditemData?.fetchUseditem?.remarks}</S.ProductRemarks>
          <S.ProductName>{props.UseditemData?.fetchUseditem?.name}</S.ProductName>
        </S.HalfDiv>
      </S.ProductWrapper>
      <S.ProductPrice>{`${props.UseditemData?.fetchUseditem?.price}원`}</S.ProductPrice>

      <S.ImageWrapper>
        {props.UseditemData?.fetchUseditem.images?.map((el: string, index: number) => (
          <S.Image key={index} src={`https://storage.googleapis.com/${el}`} />
        ))}
      </S.ImageWrapper>

      {typeof window !== 'undefined' && (
        <>
          <S.Contents
            dangerouslySetInnerHTML={{
              __html: Dompurify.sanitize(props.UseditemData?.fetchUseditem?.contents),
            }}></S.Contents>
        </>
      )}

      <div id="map" style={{ height: 400 }}></div>
    </S.Wrapper>
  )
}
