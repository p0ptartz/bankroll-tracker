import { gql } from '@apollo/client';

export const GET_USER_ENTRIES = gql`
  query getUserEntries($userId: ID!) {
    getUserEntries(userId: $userId) {
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