import React from "react";
import styled, { css } from "styled-components";

export interface TextProps {
  bold?: boolean;
  color?: string;
  children: string;
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

const CommonStyle = css`
  font-family: Roboto;
  font-style: normal;
`;

const H1 = styled.h1<TextProps>`
  ${CommonStyle}
  color: ${({ color }) => color};
  font-weight: ${({ bold }) => (bold ? "700" : "400")};
  font-size: 24px;
  line-height: 32px;
`;

const H2 = styled.h2<TextProps>`
  ${CommonStyle}
  color: ${({ color }) => color};
  font-weight: ${({ bold }) => (bold ? "700" : "400")};
  font-size: 20px;
  line-height: 32px;
`;

const H3 = styled.h3<TextProps>`
  ${CommonStyle}
  color: ${({ color }) => color};
  font-weight: ${({ bold }) => (bold ? "700" : "400")};
  font-size: 16px;
  line-height: 24px;
`;

const T = styled.p<TextProps>`
  ${CommonStyle}
  color: ${({ color }) => color};
  font-weight: ${({ bold }) => (bold ? "700" : "400")};
  font-size: 16px;
  line-height: 24px;
`;

const C = styled.caption<TextProps>`
  ${CommonStyle}
  color: ${({ color }) => color};
  font-weight: ${({ bold }) => (bold ? "700" : "400")};
  font-size: 12px;
  line-height: 16px;
`;
