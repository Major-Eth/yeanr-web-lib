import React, { ReactElement } from "react";
import styled, { css } from "styled-components";
import { Heading1, Text } from "../../typography";

export interface NavbarOption {
  value: string;
  label: string;
  icon: ReactElement;
}

export interface NavbarProps {
  options: NavbarOption[];
  logo: ReactElement;
  title: string;
  selected: string;
  setSelected: (option: string) => void;
}

export const Navbar = ({
  options,
  logo,
  title,
  selected,
  setSelected,
  ...props
}: NavbarProps): ReactElement | null => {
  return (
    <NavbarContainer {...props}>
      <NavbarHeading>
        <NavElemIcon>{React.cloneElement(logo)}</NavElemIcon>
        <StyledHeading1 bold>{title}</StyledHeading1>
      </NavbarHeading>
      <NavbarMenu>
        {options.map((option) => (
          <div key={option.value} onClick={() => setSelected(option.value)}>
            <StyledMenuItem active={selected === option.value}>
              <NavElemIcon>{React.cloneElement(option.icon)}</NavElemIcon>
              <NavElemText>{option.label}</NavElemText>
            </StyledMenuItem>
          </div>
        ))}
      </NavbarMenu>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.aside`
  width: 10rem;
  min-width: 10rem;
  padding-top: 1.5rem;
`;

const StyledHeading1 = styled(Heading1)`
  color: ${({ theme }) => theme.colors.primary};
  text-transform: lowercase;
`;

const NavbarMenu = styled.nav`
  margin-top: 3rem;
  & > div {
    margin-bottom: 1rem;
  }
  & > div:last-child {
    margin-bottom: 0rem;
  }
`;

const NavElemIcon = styled.div``;

const NavElemText = styled(Text)``;

const NavbarHeading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  & > ${NavElemIcon} {
    margin-right: 1rem;
  }
`;

const StyledMenuItem = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  & > ${NavElemIcon} {
    margin-right: 1rem;
  }
  & > ${NavElemIcon}, & > ${NavElemText} {
    color: ${({ theme }) => theme.colors.texts};
    transition-property: color;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    padding: 0.25rem 0;
  }
  ${({ active }) =>
    !active &&
    css`
      cursor: pointer;
      &:hover > ${NavElemIcon}, &:hover > ${NavElemText} {
        color: ${({ theme }) => `${theme.colors.primary}CC`};
        text-opacity: 0.9;
      }
    `}
  ${({ active }) =>
    active &&
    css`
      cursor: default;
      & > ${NavElemIcon}, & > ${NavElemText} {
        color: ${({ theme }) => theme.colors.primary};
      }
    `}
`;
