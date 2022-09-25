import 'styled-components';

import { DefaultThemeColorsType } from 'Utils/theme';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface DefaultTheme {
    colors: DefaultThemeColorsType;
  }
}
