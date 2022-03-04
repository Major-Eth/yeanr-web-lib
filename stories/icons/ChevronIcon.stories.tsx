import React, { ReactElement } from "react";
import { ComponentMeta } from "@storybook/react";
import { ChevronIcon as ChevronIconComponent } from "../../src";
import type { ChevronProps } from "../../src";

export default {
  title: "Icons/Chevron",
  component: ChevronIconComponent,
  argTypes: {
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
    as: {
      table: {
        disable: true,
      },
    },
    forwardedAs: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof ChevronIconComponent>;

export const Chevron = (args: ChevronProps): ReactElement => (
  <ChevronIconComponent {...args} />
);

Chevron.args = {
  size: 16,
  color: "#0657F9",
  disabled: false,
  disabledColor: "#CED5E3",
};
