import { gql } from "@apollo/client"

export const ADD_ENTRY = gql`
  mutation addEntry($userId: ID!, $date: String!, $location: String!, $buyIn: Float!, $cashOut: Float!, $hours: Float!, $stake: String!, $gameType: String!) {
    addEntry(userId: $userId, date: $date, location: $location, buyIn: $buyIn, cashOut: $cashOut, hours: $hours, stake: $stake, gameType: $gameType) {
      id
      date
      location
      buyIn
      cashOut
      hours
      stake
      gameType
    }
  }
`;