import { gql } from "@apollo/client"

export const SIGNUP_MUTATION = gql`
  mutation signup($firstName: String!, $lastName: String, $email: String!, $password: String!) {
    signup(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      _id
      firstName
      lastName
      email
      password
    }
  }
`;