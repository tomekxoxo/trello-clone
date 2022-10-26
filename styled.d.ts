import 'styled-components';

import { DefaultThemeColors } from 'Utils/theme';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface DefaultTheme {
    colors: DefaultThemeColors;
  }
}
