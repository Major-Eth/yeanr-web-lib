import React from "react";
import styled, { css } from "styled-components";

export interface TextProps {
  bold?: boolean;
  children: string;
  color?: string;
  underlined?: boolean;
}

export const Heading1 = ({ children, ...props }: TextProps) => (
  <H1 {...props}>{children}</H1>
);

export const Heading2 = ({ children, ...props }: TextProps) => (
  <H2 {...props}>{children}</H2>
);

export const Heading3 = ({ children, ...props }: TextProps) => (
  <H3 {...props}>{children}</H3>
);

export const Text = ({ children, ...props }: TextProps) => (
  <T {...props}>{children}</T>
);

export const Caption = ({ children, ...props }: TextProps) => (
  <C {...props}>{children}</C>
);

Heading1.defaultProps = {
  bold: false,
  color: "#001746",
};

Heading2.defaultProps = {
  bold: false,
  color: "#001746",
};

Heading3.defaultProps = {
  bold: false,
  color: "#001746",
};

Text.defaultProps = {
  bold: false,
  color: "#001746",
};

Caption.defaultProps = {
  bold: false,
  color: "#001746",
};

const CommonStyle = css<TextProps>`
  font-family: Roboto;
  font-style: normal;
  color: ${({ color }) => color};
  font-weight: ${({ bold }) => (bold ? "700" : "400")};
  text-decoration: ${({ underlined }) =>
    underlined ? "underline" : undefined};
`;

const H1 = styled.h1<TextProps>`
  ${CommonStyle}
  font-size: 24px;
  line-height: 32px;
`;

const H2 = styled.h2<TextProps>`
  ${CommonStyle}
  font-size: 20px;
  line-height: 32px;
`;

const H3 = styled.h3<TextProps>`
  ${CommonStyle}
  font-size: 16px;
  line-height: 24px;
`;

const T = styled.p<TextProps>`
  ${CommonStyle}
  font-size: 16px;
  line-height: 24px;
`;

const C = styled.caption<TextProps>`
  ${CommonStyle}
  font-size: 12px;
  line-height: 16px;
`;
