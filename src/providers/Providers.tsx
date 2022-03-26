import React, { ReactNode, ReactElement } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { defaultTheme, ThemeType } from "../themes";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

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
