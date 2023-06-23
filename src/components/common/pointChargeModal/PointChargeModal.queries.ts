import { gql } from '@apollo/client'

export const FETCH_USER_LOGGED_IN = gql`
  query {
    email
    name
    fetchUserLoggedIn {
      _id
      userPoint {
        amount
      }
    }
  }
`

export const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      amount
    }
  }
`
