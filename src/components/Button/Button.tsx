import React, { MouseEvent } from "react";
import styled, { css } from "styled-components";

export interface ButtonProps {
  children: string;
  variant: "filled" | "outlined";
  theme: "light" | "dark" | "blue";
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
  color: #ffffff;
  background-color: #0657f9;
  font-weight: 700;
  transition-property: background-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:hover {
    background-color: #004adf;
  }

  &:disabled {
    color: #ced5e3;
    background-color: #f4f7fb;
    cursor: not-allowed;
  }
`;

const OUTLINED = ({ theme }) => css`
  color: #0657f9;
  background-color: transparent;
  font-weight: 400;
  border: 1px solid #0657f9;
  box-sizing: border-box;
  transition-property: background-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:hover {
    background-color: #e0eaff;
  }

  &:disabled {
    color: #ced5e3;
    background-color: transparent;
    border: 1px solid #ced5e3;
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
