import { Normalize } from 'styled-normalize';
import type { AppProps } from 'next/app';
import TobBar from 'Components/TopBar/TobBar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Normalize />
      <TobBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
