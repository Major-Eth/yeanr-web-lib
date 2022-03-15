import React, { ReactNode, ReactElement } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { defaultTheme, ThemeType } from "../themes";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: local('Roboto'), local('Roboto');
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
  children: ReactNode;
  theme: ThemeType;
}

const Wrapper = ({ children, theme }: WrapperProps): ReactElement => (
  <ThemeProvider theme={theme || defaultTheme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export { Wrapper as Providers };
export default Wrapper;
