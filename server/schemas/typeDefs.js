const { gql } = require('apollo-server-express');

const typeDefs = gql`
 type Entry {
  id: ID!
  date: String!
  location: String!
  buyIn: Float!
  cashOut: Float!
  hours: Float!
  stake: String!
  gameType: String!
}

type Query {
  entries: [Entry]
}

type Mutation {
  addEntry(date: String!, location: String!, buyIn: Float!, cashOut: Float!, hours: Float!, stake: String!): Entry
}
`;

module.exports = typeDefs