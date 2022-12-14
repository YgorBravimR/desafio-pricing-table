import "styled-components";
import { lightTheme, darkTheme } from "../styles/themes/themes";

type ThemeType = typeof lightTheme;

type ThemeType = typeof darkTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
