import React from "react";
import { ComponentMeta } from "@storybook/react";
import {
  Heading1 as H1,
  Heading2 as H2,
  Heading3 as H3,
  HeadingProps,
} from "../src/typography";
import ThemeProvider from "../src/providers";

export default {
  title: "Typography/Headings",
  component: H1,
  argTypes: {
    children: {
      name: "label",
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof H1>;

export const Heading1 = (props: HeadingProps) => <H1 {...props} />;

export const Heading2 = (props: HeadingProps) => <H2 {...props} />;

export const Heading3 = (props: HeadingProps) => <H3 {...props} />;

Heading1.args = {
  children: "Heading 1",
  bold: false,
};

Heading2.args = {
  children: "Heading 2",
  bold: false,
};

Heading3.args = {
  children: "Heading 3",
  bold: false,
};
