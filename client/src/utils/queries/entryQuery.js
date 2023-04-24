import { gql } from "@apollo/client";

export const GET_ENTRIES = gql`
query 
  getEntries($userId: ID!) {
    date
    location
    buyIn
    cashOut
    hours
    stake
    gameType
  }


`

