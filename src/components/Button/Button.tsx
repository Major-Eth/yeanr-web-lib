import React from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
  primary?: boolean;
  children: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <StyledButton type="button" {...props}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  font-family: "Roboto";
  font-weight: "bold";
  border: 0;
  border-radius: 3em;
  padding: 8px 24px;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  color: white;
  ${({ primary }: ButtonProps) =>
    primary &&
    css`
      background-color: #0657f9;
    `}
`;
