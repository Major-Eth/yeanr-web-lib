import React, { MouseEvent, ReactNode, ReactElement } from "react";
import styled, { css } from "styled-components";

export interface CardWrapperProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Wrapper = ({
  children,
  ...props
}: CardWrapperProps): ReactElement => {
  return <StyledCardWrapper {...props}>{children}</StyledCardWrapper>;
};

const StyledCardWrapper = styled.section<CardWrapperProps>`
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => `0px 0px 0px ${theme.colors.background}00`};
  border-radius: 0.5rem;
  padding: 1.5rem;
  transition-property: background box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;
      &:hover {
        background: ${({ theme }) => theme.colors.surfaceVariant};
        box-shadow: ${({ theme }) => `0px 0px 24px ${theme.colors.surface}19`};
      }
    `}
`;
