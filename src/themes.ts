import * as themes from "@yearn/yearn-web-themes";
export interface ThemeType {
  name: "light" | "dark" | "blue";
  colors: {
    background: string;
    backgroundVariant: string;
    surface: string;
    surfaceVariant: string;
    primary: string;
    primaryVariant: string;
    secondary: string;
    secondaryVariant: string;
    titles: string;
    titlesVariant: string;
    texts: string;
    disabled: string;
    icons: {
      primary: string;
      variant: string;
    };
    button: {
      filled: {
        primary: string;
        variant: string;
        text: string;
      };
      outlined: {
        primary: string;
        variant: string;
        text: string;
      };
      disabled: {
        primary: string;
        text: string;
      };
    };
  };
}

export const defaultTheme: ThemeType = themes.light;
export const light: ThemeType = themes.light;
export const dark: ThemeType = themes.dark;
export const blue: ThemeType = themes.blue;
