import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {
  Button as ButtonComponent,
  ButtonIcon,
  ButtonIconProps,
  ButtonProps,
  ChevronIcon,
} from "../../src";

export default {
  title: "Components/Button",
  component: ButtonComponent,
  argTypes: {
    children: {
      name: "label",
    },
    variant: {
      table: {
        disable: true,
      },
    },
    icon: {
      table: {
        disable: true,
      },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof ButtonComponent>;

export const Filled: ComponentStory<typeof ButtonComponent> = (
  args: ButtonProps
) => <ButtonComponent {...args} variant={"filled"} />;

export const Outlined: ComponentStory<typeof ButtonComponent> = (
  args: ButtonProps
) => <ButtonComponent {...args} variant={"outlined"} />;

export const Icon: ComponentStory<typeof ButtonIcon> = (
  args: ButtonIconProps
) => <ButtonComponent {...args} />;

Filled.args = {
  children: "Filled Button",
  loading: false,
  disabled: false,
  style: {
    width: 220,
    height: 40,
  },
};

Outlined.args = {
  children: "Outlined Button",
  loading: false,
  disabled: false,
  style: {
    width: 220,
    height: 40,
  },
};

Icon.args = {
  icon: <ChevronIcon />,
  loading: false,
  disabled: false,
  buttonSize: 24,
};
