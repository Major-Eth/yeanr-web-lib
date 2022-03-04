import React, { ReactNode, ReactElement } from "react";
import styled, { css } from "styled-components";

export interface CardProps {
  children: ReactNode;
  withHover?: boolean;
}

export const Card = ({ children, ...props }: CardProps): ReactElement => (
  <StyledCard {...props}>{children}</StyledCard>
);

const StyledCard = styled.section<CardProps>`
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => `0px 0px 0px ${theme.colors.background}00`};
  border-radius: 0.5rem;
  padding: 1.5rem;
  transition-property: background box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  ${({ withHover }) =>
    withHover &&
    css`
      cursor: pointer;
      &:hover {
        background: ${({ theme }) => theme.colors.surfaceVariant};
        box-shadow: ${({ theme }) => `0px 0px 24px ${theme.colors.surface}19`};
      }
    `}
`;
