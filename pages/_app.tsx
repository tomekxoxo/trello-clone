import { Normalize } from "styled-normalize";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Normalize />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
