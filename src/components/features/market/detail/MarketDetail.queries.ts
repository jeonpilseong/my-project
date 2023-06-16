import { gql } from '@apollo/client'

export const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      createdAt
      price
      images
      useditemAddress {
        zipcode
        address
        addressDetail
      }
      seller {
        name
        picture
      }
    }
  }
`
