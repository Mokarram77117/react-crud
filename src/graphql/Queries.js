import { gql } from "@apollo/client";

export const QUERY_ALL_USERS = gql`
query Query {
    users {
      _id
      name
      age
      title
    }
  }
`

export const  QUERY_ONE_USER = gql`
query Query($id: String!) {
  user(_id: $id) {
    _id
    name
    age
    title
  }
}

`
