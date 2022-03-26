import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Switch as SwitchComponent } from "../../src/components/Switch";

export default {
  title: "Components/Switch",
  component: SwitchComponent,
} as ComponentMeta<typeof SwitchComponent>;

const Template: ComponentStory<typeof SwitchComponent> = (props) => {
  const [isChecked, _setChecked] = useState<boolean>(false)
  return (
    <SwitchComponent
      checked={isChecked}
      onCheck={_setChecked}
      height={props.height}
      width={props.width} />
  )
};

export const Switch = Template.bind({});
Switch.args = {
  width: 40,
  height: 24,
};
