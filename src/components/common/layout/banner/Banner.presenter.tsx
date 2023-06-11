import { Carousel } from 'antd'
import * as S from './Banner.styles'

export default function BannerUI() {
  return (
    <Carousel autoplay>
      <S.Img1 />
      <S.Img2 />
      <S.Img3 />
    </Carousel>
  )
}
