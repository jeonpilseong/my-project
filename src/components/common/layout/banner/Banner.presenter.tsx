import { Carousel } from 'antd'
import * as S from './Banner.styles'

export default function BannerUI() {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide)
  }

  return (
    <Carousel autoplay afterChange={onChange}>
      <S.Img1 />
      <S.Img2 />
      <S.Img3 />
    </Carousel>
  )
}
