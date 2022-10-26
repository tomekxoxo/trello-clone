import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Layout from 'Components/Layout/Layout';
import Snackbar from 'Components/molecules/Snackbar/Snackbar';
import useSnackbar from 'Hooks/useSnackbar';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: '/api/graphql',
});

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const isVisible = useSnackbar(state => state.isVisible);

  return (
    <SessionProvider session={session}>
      <ApolloProvider client={apolloClient}>
        <Layout>
          <>
            <Component {...pageProps} />
            {isVisible && <Snackbar />}
          </>
        </Layout>
      </ApolloProvider>
    </SessionProvider>
  );
}

export default MyApp;
