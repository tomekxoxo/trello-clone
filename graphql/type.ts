import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  input UserRegisterInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  input UserLoginInput {
    email: String!
    password: String!
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  type AuthPayload {
    token: String
    user: User
  }

  type Query {
    users: [User!]!
  }

  type Mutation {
    register(user: UserRegisterInput!): AuthPayload
    login(user: UserLoginInput!): AuthPayload
  }
`;
