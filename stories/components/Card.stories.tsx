import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Card as CardComponent, Text, Icon } from "../../src";
import { IconDirection } from "../../src/components/Icon/Direction";

export default {
  title: "Components/Card",
  component: CardComponent.Wrapper,
} as ComponentMeta<typeof CardComponent.Wrapper>;

export interface ColsProps {
  cols: number;
}
const StyledTtitle = styled(Text)`
  color: ${({ theme }) => theme.colors.titles};
  marginbottom: 0.5rem;
`;
const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.texts};
`;
const StyledChevron = styled(Icon.Chevron)`
  color: ${({ theme }) => theme.colors.primary};
`;
const StyledHeadAction = styled.div`
  color: ${({ theme }) => theme.colors.icons.primary};
`;
const StyledWrapper = styled.div<ColsProps>`
  display: grid;
  grid-template-columns: ${({ cols }) => `repeat(${cols}, minmax(0, 1fr))`};
  gap: 1rem;
`;

export const Card: ComponentStory<typeof CardComponent.Wrapper> = (props) => (
  <CardComponent.Wrapper {...props}>
    <StyledTtitle>{"This is my title"}</StyledTtitle>
    <StyledText>{`There are many like it, but this one is yours. You can always return here for a bird's-eye view of your holdings. The cards below show the total balance and utilization of your wallet, and the holdings and performance for every Yearn product you use.`}</StyledText>
  </CardComponent.Wrapper>
);

export const CardGrid2: ComponentStory<typeof CardComponent.CardGrid2> = (
  props
) => (
  <StyledWrapper cols={1}>
    <StyledWrapper cols={2}>
      <CardComponent.CardGrid2 {...props} />
      <CardComponent.CardGrid2
        onClick={() => null}
        title={"Iron Bank"}
        details={[
          { label: "Supplied", value: "$ 0.00" },
          { label: "Borrow limit used", value: "0.00 %" },
        ]}
      />
    </StyledWrapper>

    <StyledWrapper cols={2}>
      <CardComponent.Wrapper>
        <CardComponent.Head title={"Yearn Finance (YFI)"}>
          <span onClick={() => null}>
            <StyledChevron direction={IconDirection.Right} />
          </span>
        </CardComponent.Head>
      </CardComponent.Wrapper>
    </StyledWrapper>

    <StyledWrapper cols={1}>
      <CardComponent.CardGrid2
        details={[
          { label: "Total net worth ", value: "$ 21,275.55" },
          { label: "Available to deposit", value: "$ 8,471.33" },
          { label: "Vaults earnings", value: "$ 262.65" },
          { label: "Vaults est. yearly yield", value: "$ 45.03" },
        ]}
      />
    </StyledWrapper>

    <StyledWrapper cols={3}>
      <CardComponent.Wrapper>
        <CardComponent.Head title={"Yearn Finance (YFI)"}>
          <StyledHeadAction>
            <span style={{ marginRight: "0.5rem" }} onClick={() => null}>
              <Icon.Add />
            </span>
            <span onClick={() => null}>
              <Icon.LinkOut />
            </span>
          </StyledHeadAction>
        </CardComponent.Head>
      </CardComponent.Wrapper>
    </StyledWrapper>
  </StyledWrapper>
);

Card.args = {
  onClick: undefined,
};
CardGrid2.args = {
  onClick: () => null,
  title: "Vaults",
  details: [
    { label: "Holdings", value: "$ 12,803.19" },
    { label: "APY", value: "0.35 %" },
  ],
};
