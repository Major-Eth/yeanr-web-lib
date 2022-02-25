import React from "react";
import styled, { css } from "styled-components";

export interface HeadingProps {
  bold?: boolean;
  color?: string;
  children: string;
}

export const Heading1 = ({ children, ...props }: HeadingProps) => (
  <H1 {...props}>{children}</H1>
);

export const Heading2 = ({ children, ...props }: HeadingProps) => (
  <H2 {...props}>{children}</H2>
);

export const Heading3 = ({ children, ...props }: HeadingProps) => (
  <H3 {...props}>{children}</H3>
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

const CommonStyle = css`
  font-family: Roboto;
  font-style: normal;
`;

const H1 = styled.h1<HeadingProps>`
  ${CommonStyle}
  color: ${({ color }) => color};
  font-weight: ${({ bold }) => (bold ? "700" : "400")};
  font-size: 24px;
  line-height: 32px;
`;

const H2 = styled.h2<HeadingProps>`
  ${CommonStyle}
  color: ${({ color }) => color};
  font-weight: ${({ bold }) => (bold ? "700" : "400")};
  font-size: 20px;
  line-height: 32px;
`;

const H3 = styled.h3<HeadingProps>`
  ${CommonStyle}
  color: ${({ color }) => color};
  font-weight: ${({ bold }) => (bold ? "700" : "400")};
  font-size: 16px;
  line-height: 24px;
`;
