import React, { ReactElement } from "react";
import { ComponentMeta } from "@storybook/react";
import {
  Dropdown as DropdownComponent,
  DropdownOption,
  DropdownProps,
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
  {
    value: "default",
    label: "Default Option",
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

Dropdown.args = {
  defaultOption: options[2],
};
