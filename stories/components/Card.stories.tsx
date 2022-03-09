import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Card as CardComponent, Text } from "../../src";

export default {
  title: "Components/Card",
  component: CardComponent,
} as ComponentMeta<typeof CardComponent>;

const StyledTitle = styled(Text)`
  color: ${({ theme }) => theme.colors.titles};
  margin-bottom: 0.5rem;
`;
const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.texts};
`;

const Template: ComponentStory<typeof CardComponent> = (props) => (
  <CardComponent {...props}>
    <StyledTitle>{"This is my title"}</StyledTitle>
    <StyledText>{`There are many like it, but this one is yours. You can always return here for a bird's-eye view of your holdings. The cards below show the total balance and utilization of your wallet, and the holdings and performance for every Yearn product you use.`}</StyledText>
  </CardComponent>
);

export const Card = Template.bind({});
Card.args = {
  withHover: true,
};
