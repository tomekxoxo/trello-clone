import TopBar from 'Components/organisms/TopBar/TopBar';
import { createGlobalStyle, css, ThemeProvider } from 'styled-components';
import { normalize } from 'styled-normalize';
import theme from 'Utils/theme';

const GlobalStyle = createGlobalStyle`
${css`
  ${normalize};
  html {
    font-family: 'Noto Sans';
    font-family: 'Poppins';
    font-size: 10px;
  }
  * {
    box-sizing: border-box;
  }

  #__next {
    bottom: 0;
    display: flex;
    flex-direction: column;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
`}`;

interface ILayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: ILayoutProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <TopBar />
    {children}
  </ThemeProvider>
);

export default Layout;
