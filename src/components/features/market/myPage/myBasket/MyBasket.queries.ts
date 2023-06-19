import { gql } from '@apollo/client'

export const FETCH_USEDITEMS = gql`
  query fetchUseditems($isSoldout: Boolean, $page: Int) {
    fetchUseditems(isSoldout: $isSoldout, page: $page) {
      _id
      name
      price
      createdAt
      seller {
        _id
      }
    }
  }
`

export const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      _id
    }
  }
`
