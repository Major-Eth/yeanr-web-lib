import React, { ReactElement } from "react";
import { ComponentMeta } from "@storybook/react";
import { Button as ButtonComponent, ButtonProps } from "../../src";

export default {
  title: "Components/Button",
  component: ButtonComponent,
  argTypes: {
    children: {
      name: "label",
    },
    onClick: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof ButtonComponent>;

export const Button = (args: ButtonProps): ReactElement => (
  <ButtonComponent {...args} />
);

Button.args = {
  variant: "filled",
  children: "Label",
  loading: false,
  disabled: false,
  style: {
    width: 220,
    height: 40,
  },
};
