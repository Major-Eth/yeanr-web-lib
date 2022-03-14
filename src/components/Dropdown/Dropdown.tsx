import React, { ReactElement } from "react";
import styled, { css } from "styled-components";
import { Menu } from "@headlessui/react";
import { IconDirection } from "../Icon/Direction";
import { Text } from "../../typography";
import { Button } from "../Button";
import Icon from "../Icon";

export interface DropdownOption {
  value: string;
  label: string;
}

export interface DropdownProps {
  options: DropdownOption[];
  defaultOption: DropdownOption;
  selected?: DropdownOption;
  setSelected: (option: DropdownOption) => void;
}

export const Dropdown = ({
  options,
  defaultOption,
  selected,
  setSelected,
}: DropdownProps): ReactElement => {
  const isDropdownOptionSelected = ({ value }: DropdownOption): boolean => {
    return value === selected?.value;
  };

  return (
    <Menu>
      {({ open }) => (
        <>
          <StyledMenuButton>
            <StyledLabel>{selected?.label || defaultOption.label}</StyledLabel>
            <ChevronComponent open={open} />
          </StyledMenuButton>
          <StyledMenuItems>
            {options.map((option) => (
              <Menu.Item key={option.value} onClick={() => setSelected(option)}>
                {({ active }) => (
                  <StyledMenuItem
                    active={active || isDropdownOptionSelected(option)}
                  >
                    {option.label}
                  </StyledMenuItem>
                )}
              </Menu.Item>
            ))}
          </StyledMenuItems>
        </>
      )}
    </Menu>
  );
};

const ChevronComponent = ({ open }: { open: boolean }): ReactElement => (
  <StyledButtonIcon
    icon={<Icon.Chevron direction={IconDirection.Down} size={16} />}
    open={open}
  />
);

const StyledMenuButton = styled(Menu.Button)`
  align-items: center;
  background: ${({ theme }) => theme.colors.backgroundVariant};
  border-radius: 0.5rem;
  border: 0;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  height: 2rem;
  justify-content: space-between;
  cursor: pointer;
  padding-left: 0.75rem;
  overflow: hidden;
  &:hover {
    background: ${({ theme }) => theme.colors.secondaryVariant};
  }
`;

const StyledButtonIcon = styled(Button.Icon)<{
  open: boolean;
}>`
  transform: rotate(0deg);
  transform: ${({ open }) => (open ? `rotate(180deg)` : "")};
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
`;

const StyledLabel = styled(Text)`
  color: ${({ theme }) => theme.colors.primary};
`;

const StyledMenuItems = styled(Menu.Items)`
  background: ${({ theme }) => theme.colors.backgroundVariant};
  border: 0;
  border-radius: 0.5rem;
  overflow-y: scroll;
  width: fit-content;
  max-height: 15rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
`;

const StyledMenuItem = styled(Text)<{
  active: boolean;
}>`
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  padding: 0.25rem 1rem 0.25rem 0.75rem;

  ${({ active }) =>
    active &&
    css`
      background: ${({ theme }) => theme.colors.secondaryVariant};
    `}
`;
