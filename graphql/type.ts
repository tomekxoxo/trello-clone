import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    emailVerified: String
    password: String
    image: String
    origin: String!
  }

  input registerInput {
    name: String!
    email: String!
    password: String!
  }

  type Query {
    users: [User]!
  }

  type Mutation {
    register(credentials: registerInput!): User!
  }
`;
