import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Layout from 'Components/Layout/Layout';
import Snackbar from 'Components/molecules/Snackbar/Snackbar';
import useSnackbar from 'Hooks/useSnackbar';
import type { AppProps } from 'next/app';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: '/api/graphql',
});

interface MyAppProps extends AppProps {
  pageProps: {
    session: Session | null;
  };
}

function MyApp({ Component, pageProps: { session, ...pageProps } }: MyAppProps) {
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
