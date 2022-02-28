import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Button as ButtonComponent, ButtonProps } from "../src";
import themes from "./themes";

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
    theme: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof ButtonComponent>;

export const Button = (args: ButtonProps) => <ButtonComponent {...args} />;

Button.args = {
  variant: "filled",
  children: "Label",
  theme: themes.light,
  loading: false,
  disabled: false,
  style: {
    width: 220,
    height: 40,
  },
};
