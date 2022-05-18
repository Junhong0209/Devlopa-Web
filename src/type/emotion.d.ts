import "@emotion/react";
import { theme } from "src/styles/theme";

type customThemeType = typeof theme;

declare module "@emotion/react" {
  export interface Theme extends customThemeType {}
}
