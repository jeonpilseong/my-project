import * as S from './myHeader.styles'

export default function MyHeaderUI(props: any) {
  return (
    <S.MyHeaderWrapper>
      <S.TextWrapper>
        {props.myBtns.map((el: string, index: number) => (
          <S.HeaderBtn key={index}>{el}</S.HeaderBtn>
        ))}
      </S.TextWrapper>
    </S.MyHeaderWrapper>
  )
}
