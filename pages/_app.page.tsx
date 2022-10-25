import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Layout from 'Components/Layout/Layout';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: '/api/graphql',
});

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={apolloClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </SessionProvider>
  );
}

export default MyApp;
