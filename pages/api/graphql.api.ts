import { ApolloServer } from 'apollo-server-micro';
import Cors from 'micro-cors';
import { PageConfig } from 'next';
import { resolvers } from 'Pages/api/schema/resolver';
import { typeDefs } from 'Pages/api/schema/type';

const cors = Cors({
  allowCredentials: true,
  origin: 'https://studio.apollographql.com',
});

const apolloServer = new ApolloServer({ resolvers, typeDefs });

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
