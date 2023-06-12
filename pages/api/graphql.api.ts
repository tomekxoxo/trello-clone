import { ApolloServer } from 'apollo-server-micro';
import { createContext } from 'graphql/context';
import resolvers from 'graphql/resolvers';
import { makeExecutableSchema } from 'graphql-tools';
import Cors from 'micro-cors';
import { PageConfig } from 'next';

import { typeDefs } from '../../graphql/type';

const cors = Cors({
  allowCredentials: true,
  origin: 'https://studio.apollographql.com',
});

const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});

const apolloServer = new ApolloServer({
  context: createContext,
  schema,
});

const startServer = apolloServer.start();

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};

export default cors(async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }
  await startServer;
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
});
