import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Spinner as SpinnerComponent } from "../../src/components/Spinner";

export default {
  title: "Components/Spinner",
  component: SpinnerComponent,
} as ComponentMeta<typeof SpinnerComponent>;

const Template: ComponentStory<typeof SpinnerComponent> = (props) => (
  <SpinnerComponent {...props} />
);

export const Spinner = Template.bind({});
Spinner.args = {
  color: "#0657F9",
  gap: 4,
  thickness: 4,
  size: 24,
};
