import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Toggle as ToggleComponent } from "../../src/components/Toggle";

export default {
  title: "Components/Toggle",
  component: ToggleComponent,
} as ComponentMeta<typeof ToggleComponent>;

const Template: ComponentStory<typeof ToggleComponent> = (props) => {
  const [isChecked, _setChecked] = useState<boolean>(false)
  return (
    <ToggleComponent
      checked={isChecked}
      onCheck={_setChecked}
      height={props.height}
      width={props.width} />
  )
};

export const Toggle = Template.bind({});
Toggle.args = {
  width: 74,
  height: 38,
};
