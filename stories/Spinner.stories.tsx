import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Spinner } from "../src/components/Spinner";

export default {
  title: "Spinner",
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (props) => (
  <Spinner size={25} color="#0657F9" {...props} />
);

export const SpinnerStory = Template.bind({});
SpinnerStory.args = {};
