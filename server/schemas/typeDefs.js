const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Bankroll {
    id: ID!
    name: String!
    amount: Float!
  }

  type Query {
    bankrolls: [Bankroll!]!
  }

  type Mutation {
    addBankroll(name: String!, amount: Float!): Bankroll!
  }
`;

module.exports = typeDefs