import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {
  Button as ButtonComponent,
  ButtonIconProps,
  ButtonProps,
  Icon as IconComponent,
} from "../../src/components";
import { IconDirection } from "../../src/components/Icon/Direction";

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

export const Icon: ComponentStory<typeof ButtonComponent.Icon> = (
  args: ButtonIconProps
) => <ButtonComponent.Icon {...args} />;

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
  icon: <IconComponent.Chevron direction={IconDirection.Left} />,
  loading: false,
  disabled: false,
  buttonSize: 24,
};
