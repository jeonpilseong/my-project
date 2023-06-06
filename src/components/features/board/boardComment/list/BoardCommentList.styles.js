import styled from '@emotion/styled'
import { Avatar, Rate } from 'antd'

export const Wrapper = styled.div`
  display: flex;
  width: 95%;
  max-width: 120rem;
  margin: auto;
  margin-bottom: 2.2rem;
  position: relative;
  border-bottom: 1px solid #bdbdbd;
`
export const AvatarWrapper = styled.div`
  margin-right: 1.6rem;
`

export const AvatarIcon = styled(Avatar)`
  margin-bottom: 6.4rem;
`

export const ContentsWrapper = styled.div``

export const Contents = styled.div`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: #4f4f4f;
  margin-bottom: 20px;
  margin-top: 4px;
  word-break: break-all;
`

export const ProfileWrapper = styled.div`
  display: flex;
`

export const RateIcon = styled(Rate)`
  line-height: 1rem;
`

export const Writer = styled.div`
  font-weight: 500;
  font-size: 1.6rem;
  text-align: center;
  margin-right: 1.8rem;
`

export const Date = styled.div`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.8rem;
  margin-bottom: 2.1rem;
  color: #bdbdbd;
`

export const EditWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
`

export const EditIcon = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  margin-right: 1.6rem;
  cursor: pointer;
`

export const DeleteIcon = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  cursor: pointer;
`
