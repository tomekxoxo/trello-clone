import { ApolloServer, gql } from 'apollo-server-micro';
import Cors from 'micro-cors';
import { PageConfig } from 'next';

const typeDefs = gql`
  type Query {
    getUsers: [User!]!
  }
  type User {
    name: String
  }
`;

const resolvers = {
  Query: {
    getUsers() {
      return [{ name: 'Nextjs' }];
    },
  },
};

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
