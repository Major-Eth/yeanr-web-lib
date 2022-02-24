import React, { ReactElement, ReactNode } from "react";
import { createGlobalStyle } from "styled-components";
import RobotoWoff from "../fonts/roboto-v29-latin-regular.woff";
import RobotoWoff2 from "../fonts/roboto-v29-latin-regular.woff2";

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

export default ({ children }: { children: ReactNode }): ReactElement => (
  <>
    <GlobalStyles />
    {children}
  </>
);
