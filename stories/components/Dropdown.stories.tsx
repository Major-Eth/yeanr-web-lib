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
  {
    value: "Faa",
    label: "Faa",
  },
  {
    value: "barr",
    label: "I'm another very long dropdown option",
  },
  {
    value: "Hello",
    label: "Hello world",
  },
  {
    value: "en",
    label: "English",
  },
  {
    value: "fr",
    label: "French",
  },
  {
    value: "es",
    label: "Spanish",
  },
  {
    value: "ru",
    label: "Russian",
  },
  {
    value: "Az",
    label: "Azerty",
  },
  {
    value: "qw",
    label: "Qwerty",
  },
  {
    value: "bep",
    label: "Bepo",
  },
  {
    value: "as",
    label: "Asdfg",
  },
  {
    value: "last",
    label: "One last Option",
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
