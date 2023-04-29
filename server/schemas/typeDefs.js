const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
  id: ID!
  firstName: String!
  lastName: String
  email: String!
  password: String!
  entries: [Entry]
}

 type Entry {
  id: ID!
  date: String!
  location: String!
  buyIn: Float!
  cashOut: Float!
  hours: Float!
  stake: String!
  gameType: String!
  user: User
}


type Query {
  entries: [Entry]
  getUser(userId: ID!): User
  getEntries(userId: ID!): [Entry]
}

type Mutation {
  signup(firstName: String!, lastName: String, email: String!, password: String!, profilePicture: String): User
  login(email: String!, password: String!): User
  logout: String
  addEntry(userId: ID!, date: String!, location: String!, buyIn: Float!, cashOut: Float!, hours: Float!, stake: String!, gameType: String!): Entry
}
`;

module.exports = typeDefs