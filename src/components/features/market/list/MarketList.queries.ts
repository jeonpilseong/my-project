import { gql } from '@apollo/client'

export const FETCH_USEDITEMS = gql`
  query fetchUseditems($page: Int, $search: String, $isSoldout: Boolean) {
    fetchUseditems(page: $page, search: $search, isSoldout: $isSoldout) {
      _id
      name
      remarks
      contents
      price
      images
      pickedCount
      useditemAddress {
        address
      }
      seller {
        name
        picture
      }
    }
  }
`
