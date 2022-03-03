import React, { ReactNode } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import RobotoWoff from "../fonts/roboto-v29-latin-regular.woff";
import RobotoWoff2 from "../fonts/roboto-v29-latin-regular.woff2";
import { defaultTheme, ThemeType } from "../themes";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: local('Roboto'), local('Roboto'),
        url(${RobotoWoff}) format('woff');
        url(${RobotoWoff2}) format('woff2'),
        font-weight: 700;
        font-style: normal;
    }

    body {
      font-family: 'Roboto', ui-sans-serif, system-ui, -apple-system,
      BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans",
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
      "Noto Color Emoji";
    }
`;

interface WrapperProps {
  children: ReactNode,
  theme: ThemeType,
}

const Wrapper = ({children, theme}: WrapperProps) => (
  <ThemeProvider theme={theme || defaultTheme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);


export default Wrapper;