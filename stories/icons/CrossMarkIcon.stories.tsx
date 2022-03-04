import React, { ReactElement } from "react";
import { ComponentMeta } from "@storybook/react";
import { CrossMarkIcon as CrossMarkIconComponent } from "../../src";
import type { CrossMarkProps } from "../../src";

export default {
  title: "Icons/Cross Mark",
  component: CrossMarkIconComponent,
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
} as ComponentMeta<typeof CrossMarkIconComponent>;

export const CrossMark = (args: CrossMarkProps): ReactElement => (
  <CrossMarkIconComponent {...args} />
);

CrossMark.args = {
  size: 14,
  color: "#0657F9",
};
