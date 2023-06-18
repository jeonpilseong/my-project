import MyHeaderUI from './myHeader.presenter'

export default function MyHeader(props: any) {
  return <MyHeaderUI myBtns={props.myBtns} />
}
