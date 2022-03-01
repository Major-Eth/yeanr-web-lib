import React from "react";
import styled, { css } from "styled-components";
import { ThemeType } from "../types";

export interface TypographyProps {
  children: string;
  theme: ThemeType;
  bold?: boolean;
  color?: string;
  underlined?: boolean;
}

export const Heading1 = ({ children, ...props }: TypographyProps) => (
  <H1 {...props}>{children}</H1>
);

export const Heading2 = ({ children, ...props }: TypographyProps) => (
  <H2 {...props}>{children}</H2>
);

export const Heading3 = ({ children, ...props }: TypographyProps) => (
  <H3 {...props}>{children}</H3>
);

export const Text = ({ children, ...props }: TypographyProps) => (
  <T {...props}>{children}</T>
);

export const Caption = ({ children, ...props }: TypographyProps) => (
  <C {...props}>{children}</C>
);

const TypographyStyle = ({
  color,
  bold,
  underlined,
  theme,
}: TypographyProps) => css`
  font-family: Roboto;
  font-style: normal;
  color: ${color ?? theme.colors.titles};
  font-weight: ${bold ? "700" : "400"};
  text-decoration: ${underlined ? "underline" : undefined};
`;

const H1 = styled.h1<TypographyProps>`
  ${TypographyStyle}
  font-size: 24px;
  line-height: 32px;
`;

const H2 = styled.h2<TypographyProps>`
  ${TypographyStyle}
  font-size: 20px;
  line-height: 32px;
`;

const H3 = styled.h3<TypographyProps>`
  ${TypographyStyle}
  font-size: 16px;
  line-height: 24px;
`;

const T = styled.p<TypographyProps>`
  ${TypographyStyle}
  font-size: 16px;
  line-height: 24px;
`;

const C = styled.caption<TypographyProps>`
  ${TypographyStyle}
  font-size: 12px;
  line-height: 16px;
`;
