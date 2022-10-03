import { ApolloServer } from 'apollo-server-micro';
import { createContext } from 'graphql/context';
import resolvers from 'graphql/resolvers';
import Cors from 'micro-cors';
import { PageConfig } from 'next';

import { typeDefs } from '../../graphql/type';

const cors = Cors({
  allowCredentials: true,
  origin: 'https://studio.apollographql.com',
});

const apolloServer = new ApolloServer({
  context: createContext,
  resolvers,
  typeDefs,
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
