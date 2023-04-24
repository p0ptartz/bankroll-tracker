import { gql } from "@apollo/client";

export const GET_ENTRIES = gql`
query getEntries{
    entries{
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

`

