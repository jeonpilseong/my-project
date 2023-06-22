import { Avatar, Button } from 'antd'
import styled from '@emotion/styled'

export const Container = styled.div`
  width: 95%;
  max-width: 120rem;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2em;
`

export const Logo = styled.img`
  width: 6rem;
  height: 6rem;
  cursor: pointer;
`

export const AvatarIcon = styled(Avatar)``

export const ProfileName = styled.h3`
  font-size: 1.6rem;
`

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`

export const Btn = styled(Button)`
  width: 10rem;
  height: 4rem;
  font-size: 1.6rem;
`
