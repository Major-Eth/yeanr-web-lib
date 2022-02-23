import React, { MouseEvent } from "react";
import styled, { css } from "styled-components";

interface ThemeType {
  name: "light" | "dark" | "blue";
  colors: { [key: string]: string };
}

export interface ButtonProps {
  children: string;
  variant: "filled" | "outlined";
  theme: ThemeType;
  disabled: boolean;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ children, onClick, ...props }: ButtonProps) => {
  const onSafeClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (!props.disabled) {
      onClick(event);
    }
  };

  return (
    <StyledButton onClick={onSafeClick} {...props}>
      {children}
    </StyledButton>
  );
};

const FILLED = ({ theme }: ButtonProps) => css`
  color: ${theme.colors.surface};
  background-color: ${theme.colors.primary};
  font-weight: 700;
  transition-property: background-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:hover {
    background-color: ${theme.colors["primary-variant"]};
  }

  &:disabled {
    color: ${theme.colors.icons};
    background-color: ${theme.colors.background};
    cursor: not-allowed;
  }
`;

const OUTLINED = ({ theme }: ButtonProps) => css`
  color: ${theme.colors.primary};
  background-color: transparent;
  font-weight: 400;
  border: 1px solid ${theme.colors.primary};
  box-sizing: border-box;
  transition-property: background-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:hover {
    background-color: ${theme.colors.secondary};
  }

  &:disabled {
    color: ${theme.colors.icons};
    background-color: transparent;
    border: 1px solid ${theme.colors.icons};
    cursor: not-allowed;
  }
`;

const VARIANTS = {
  filled: FILLED,
  outlined: OUTLINED,
};

const StyledButton = styled.button`
  ${({ variant }: ButtonProps) => css`
    width: 220px;
    height: 40px;
    font-family: "Roboto";
    font-size: 16px;
    font-style: normal;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    border: 0;
    border-radius: 8px;
    padding: 8px 24px;
    cursor: pointer;
    display: inline-block;
    line-height: 1;

    ${VARIANTS[variant]}
  `}
`;
