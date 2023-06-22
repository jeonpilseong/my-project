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
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
    }
  }
`

export const FETCH_USEDITEMS_IPICKED = gql`
  query fetchUseditemsIPicked($page: Int, $search: String) {
    fetchUseditemsIPicked(page: $page, search: $search) {
      _id
      name
      price
      seller {
        _id
        name
      }
      createdAt
    }
  }
`

export const FETCH_USEDITEMS_COUNT_IPICKED = gql`
  query fetchUseditemsCountIPicked {
    fetchUseditemsCountIPicked
  }
`
