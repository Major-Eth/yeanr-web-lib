import React from "react";
import { ComponentMeta } from "@storybook/react";
import {
  Heading1 as Heading1Component,
  Heading2 as Heading2Component,
  Heading3 as Heading3Component,
  Text as TextComponent,
  Caption as CaptionComponent,
  TypographyProps,
} from "../src/typography";
import ThemeProvider from "../src/providers";
import themes from "./themes";

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

export const Heading1 = (props: TypographyProps) => (
  <Heading1Component {...props} />
);

export const Heading2 = (props: TypographyProps) => (
  <Heading2Component {...props} />
);

export const Heading3 = (props: TypographyProps) => (
  <Heading3Component {...props} />
);

export const Text = (props: TypographyProps) => <TextComponent {...props} />;

export const Caption = (props: TypographyProps) => (
  <CaptionComponent {...props} />
);

Heading1.args = {
  children: "Heading 1",
  bold: false,
  underlined: false,
  theme: themes.light,
};

Heading2.args = {
  children: "Heading 2",
  bold: false,
  underlined: false,
  theme: themes.light,
};

Heading3.args = {
  children: "Heading 3",
  bold: false,
  underlined: false,
  theme: themes.light,
};

Text.args = {
  children: "Text",
  bold: false,
  underlined: false,
  theme: themes.light,
};

Caption.args = {
  children: "Caption",
  bold: false,
  underlined: false,
  theme: themes.light,
};
