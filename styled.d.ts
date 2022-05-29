import 'styled-components';

import { DefaultThemeColorsType, DefaultThemeFontsType } from 'Utils/theme';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface DefaultTheme {
    colors: DefaultThemeColorsType;
    fonts: DefaultThemeFontsType;
  }
}
