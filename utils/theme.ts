import { DefaultTheme } from 'styled-components';

export type ThemeColorsType = keyof typeof colors;
export type ThemeFontsType = keyof typeof fonts;

export type DefaultThemeColorsType = typeof colors;
export type DefaultThemeFontsType = typeof fonts;

const colors = {
  blue1: 'rgba(47, 128, 237, 1)',
  blue2: 'rgba(218, 228, 253, 1)',
  blue3: 'rgba(86, 204, 242, 1)',
  boardColor: '#F8F9FD',
  brightYellow: 'rgba(252, 244, 219, 1)',
  dark: 'rgba(51, 51, 51, 1)',
  gray: '#F2F2F2',
  gray1: 'rgba(51, 51, 51, 1)',
  gray2: 'rgba(79, 79, 79, 1)',
  gray3: 'rgba(130, 130, 130, 1)',
  gray4: 'rgba(189, 189, 189, 1)',
  gray5: 'rgba(224, 224, 224, 1)',
  gray6: 'rgba(242, 242, 242, 1)',
  green1: 'rgba(33, 150, 83, 1)',
  green3: 'rgba(111, 207, 151, 1)',
  lightOrange: 'rgba(242, 153, 74, 0.2)',
  lightPurple: 'rgba(235, 220, 249, 1)',
  orange: 'rgba(242, 153, 74, 1)',
  purple1: 'rgba(155, 81, 224, 1)',
  red: 'rgba(235, 87, 87, 1)',
  white: 'rgba(255, 255, 255, 1)',
  yellow: 'rgba(242, 201, 76, 1)',
};

const fonts = {
  notoSans: 'Noto Sans',
  poppins: 'Poppins',
};

const theme: DefaultTheme = {
  colors,
  fonts,
};

export default theme;
