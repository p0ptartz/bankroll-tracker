import { gql } from "@apollo/client"

export const LOGIN_MUTATION = gql`
mutation login($email: String!, $password: String!){
login(email: $email, password: $password){
    id
    firstName
    lastName
    email
    password
    entries {
        
        date
        location
        buyIn
        cashOut
        hours
        stake
        gameType
      }
}
}
`