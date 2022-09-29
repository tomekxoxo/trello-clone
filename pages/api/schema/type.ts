import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  type Query {
    getUsers: [User!]!
  }

  type Mutation {
    createUser(user: UserInput!): String!
  }

  type User {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }
`;
