import React, { ReactElement } from "react";
import { Switch as SwitchHeadlessUI } from "@headlessui/react";
import styled, { css } from "styled-components";

export type SwitchProps = {
  onCheck: (enabled: boolean) => void;
  checked: boolean;
};

type SwitchButtonProps = {
  checked: boolean;
};

const width = 40;
const height = 24;
const borderRadius = 9999;
const borderWidth = 4;

const StyledSwitch = styled(SwitchHeadlessUI)<SwitchProps>`
  border-radius: ${borderRadius}px;
  background-color: ${({ checked, theme }) =>
    checked ? theme.colors.background : theme.colors.secondary};
  border-color: transparent;
  border-width: ${borderWidth + "px"};
  width: ${width + "px"};
  height: ${height + "px"};
  outline: solid;
  outline-color: ${({ theme }) => theme.colors.primary};
  outline-width: 1px;
  position: relative;
  display: inline-flex;
  flex-shrink: 0;
  padding: 0;
  cursor: pointer;
`;

const StyledSpan = styled.span`
  ${({ checked }: SwitchButtonProps) => css`
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: ${borderRadius}px;
    pointer-events: none;
    display: inline-block;
    height: ${height - borderWidth * 2}px;
    width: ${height - borderWidth * 2}px;
    transition-duration: 200ms;
    transform: ${checked ? "translateX(0px)" : "translateX(1rem)"};
  `}
`;

export const Switch = ({ checked, onCheck }: SwitchProps): ReactElement => {
  return (
    <StyledSwitch checked={checked} onChange={onCheck}>
      <StyledSpan checked={checked} aria-hidden={"true"} />
    </StyledSwitch>
  );
};
