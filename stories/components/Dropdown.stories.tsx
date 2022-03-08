import React, { ReactElement } from "react";
import { ComponentMeta } from "@storybook/react";

import { Dropdown as DropdownComponent, DropdownProps } from "../../src";
import { EtheriumIcon } from "../Icon.stories";

const options = [
  {
    value: "foo",
    label: "Foo",
  },
  {
    value: "bar",
    label: "bar",
  },
];

export default {
  title: "Components/Dropdown",
  component: DropdownComponent,
  argTypes: {
    icon: {
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

export const Dropdown = (args: DropdownProps): ReactElement => (
  <DropdownComponent {...args} options={options} />
);

Dropdown.args = {
  icon: <EtheriumIcon size={22} />,
  label: "ETH",
};
