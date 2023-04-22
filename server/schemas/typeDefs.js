const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
  _id: ID!
  firstName: String!
  lastName: String
  email: String!
  password: String!
}

type AuthPayload {
    token: String!
    expiresIn: Int!
    user: User!
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
}


type Query {
  entries: [Entry]
}

type Mutation {
  signup(firstName: String!, lastName: String, email: String!, password: String!, profilePicture: String): AuthPayload
  login(email: String!, password: String!): AuthPayload
  logout: String
  addEntry(date: String!, location: String!, buyIn: Float!, cashOut: Float!, hours: Float!, stake: String!): Entry
}
`;

module.exports = typeDefs