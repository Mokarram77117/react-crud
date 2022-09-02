import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`

mutation Mutation($createUserInput: CreateUserInput!) {
  createUser(createUserInput: $createUserInput) {
    _id
    name
    title
    age
  }
}
`

export const UPDATE_USER_MUTATION = gql`
mutation Mutation($id: String!, $updateUserInput: UpdateUserInput!) {
  updateUser(_id: $id, updateUserInput: $updateUserInput) {
    _id
    name
    age
    title
  }
}
`

export const DELETE_USER_MUTATION =gql`
mutation Mutation($id: String!) {
  deleteUser(_id: $id) {
    _id
    name
    age
    title
  }
}
`
