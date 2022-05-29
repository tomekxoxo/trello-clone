import TobBar from 'Components/TopBar/TobBar';
import type { AppProps } from 'next/app';
import { createGlobalStyle, css, ThemeProvider } from 'styled-components';
import { normalize } from 'styled-normalize';
import theme from 'Utils/theme';

const GlobalStyle = createGlobalStyle`
${css`
  ${normalize};
  html {
    font-size: 10px;
    font-family: 'Noto Sans';
    font-family: 'Poppins';
  }
  * {
    box-sizing: border-box;
  }
`}`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <TobBar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
