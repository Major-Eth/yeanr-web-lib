import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BoxVaultAPY as BoxVaultAPYComponent } from "../../src";
import styled from "styled-components";

export default {
  title: "Components/Box Vault APY",
  component: BoxVaultAPYComponent,
} as ComponentMeta<typeof BoxVaultAPYComponent>;

interface ColsProps {
  cols: number;
}
const StyledWrapper = styled.div<ColsProps>`
  display: grid;
  grid-template-columns: ${({ cols }) => `repeat(${cols}, minmax(0, 1fr))`};
  gap: 1rem;
`;

const Template: ComponentStory<typeof BoxVaultAPYComponent> = (props) => (
  <StyledWrapper cols={6}>
    <BoxVaultAPYComponent {...props} />
    <BoxVaultAPYComponent
      onClick={() => null}
      address={"0x0DEC85e74A92c52b7F708c4B10207D9560CEFaf0"}
      chainID={"250"}
      label={"Some token Name"}
      value={"43.00 %"}
    />
    <BoxVaultAPYComponent
      onClick={() => null}
      address={"0x1CC481cE2BD2EC7Bf67d1Be64d4878b16078F309"}
      label={"Another token"}
      value={"24.54 %"}
    />
  </StyledWrapper>
);

export const BoxVaultAPY = Template.bind({});
BoxVaultAPY.args = {
  address: "0x06cb22615BA53E60D67Bf6C341a0fD5E718E1655",
  label: "Curve ibGBP",
  value: "46.37 %",
};
