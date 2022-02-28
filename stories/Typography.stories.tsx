import React from "react";
import { ComponentMeta } from "@storybook/react";
import {
  Heading1 as Heading1Component,
  Heading2 as Heading2Component,
  Heading3 as Heading3Component,
  Text as TextComponent,
  Caption as CaptionComponent,
  TextProps,
} from "../src/typography";
import ThemeProvider from "../src/providers";

export default {
  title: "Typography",
  component: Heading1Component,
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
} as ComponentMeta<typeof Heading1Component>;

export const Heading1 = (props: TextProps) => <Heading1Component {...props} />;

export const Heading2 = (props: TextProps) => <Heading2Component {...props} />;

export const Heading3 = (props: TextProps) => <Heading3Component {...props} />;

export const Text = (props: TextProps) => <TextComponent {...props} />;

export const Caption = (props: TextProps) => <CaptionComponent {...props} />;

Heading1.args = {
  children: "Heading 1",
  bold: false,
  underlined: false,
};

Heading2.args = {
  children: "Heading 2",
  bold: false,
  underlined: false,
};

Heading3.args = {
  children: "Heading 3",
  bold: false,
  underlined: false,
};

Text.args = {
  children: "Text",
  bold: false,
  underlined: false,
};

Caption.args = {
  children: "Caption",
  bold: false,
  underlined: false,
};
