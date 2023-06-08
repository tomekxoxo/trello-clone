import { Resolvers } from 'graphql/generated/resolvers';
import { mutation } from 'graphql/resolvers/mutation';
import { query } from 'graphql/resolvers/query';

const resolvers: Resolvers = {
  Mutation: mutation,
  Query: query,
};

export default resolvers;
