import { mutation } from 'graphql/resolvers/mutation';
import { query } from 'graphql/resolvers/query';
import { Resolvers } from 'graphql/typesGen';

const resolvers: Resolvers = {
  Mutation: mutation,
  Query: query,
};

export default resolvers;
