import React, { ReactElement } from "react";
import { ComponentMeta } from "@storybook/react";
import styled, { useTheme } from "styled-components";
import {
  Dropdown as DropdownComponent,
  DropdownOption,
  DropdownProps,
  Icon,
  Text,
} from "../../src";

const options: DropdownOption[] = [
  {
    value: "foo",
    label: "Foo",
  },
  {
    value: "bar",
    label: "I'm a very long dropdown option",
  },
];

export default {
  title: "Components/Dropdown",
  component: DropdownComponent,
  argTypes: {
    buttonContent: {
      table: {
        disable: true,
      },
    },
    selected: {
      table: {
        disable: true,
      },
    },
    setSelected: {
      table: {
        disable: true,
      },
    },
    options: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof DropdownComponent>;

const MenuButtonWithLabel = ({ label }: { label: string }): ReactElement => {
  const theme = useTheme();

  return <Text color={theme.colors.primary}>{label}</Text>;
};

const MenuButtonWithLabelAndIcon = ({
  icon,
  label,
}: {
  icon?: ReactElement;
  label: string;
}): ReactElement => {
  const theme = useTheme();

  return (
    <StyledMenuButtonIconLabelContainer>
      {icon && <StyledIconContainer>{icon}</StyledIconContainer>}
      <Text color={theme.colors.primary}>{label}</Text>
    </StyledMenuButtonIconLabelContainer>
  );
};

export const Dropdown = (args: DropdownProps): ReactElement => {
  const [selected, setSelected] = React.useState<DropdownOption>();

  return (
    <DropdownComponent
      {...args}
      selected={selected}
      setSelected={setSelected}
      options={options}
    />
  );
};

export const DropdownWithIcon = (args: DropdownProps): ReactElement => {
  const [selected, setSelected] = React.useState<DropdownOption>();

  return (
    <DropdownComponent
      {...args}
      selected={selected}
      setSelected={setSelected}
      options={options}
    />
  );
};

Dropdown.args = {
  buttonContent: <MenuButtonWithLabel label={"ETH"} />,
};

DropdownWithIcon.args = {
  buttonContent: (
    <MenuButtonWithLabelAndIcon
      label={"ETH"}
      icon={<Icon.Ethereum size={22} />}
    />
  ),
};

const StyledMenuButtonIconLabelContainer = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  margin-right: 0.5rem;
`;

const StyledIconContainer = styled.div`
  align-items: center;
  display: flex;
  padding-right: 0.3rem;
`;
