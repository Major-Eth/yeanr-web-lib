/* eslint-disable no-console */
import React, { ReactElement } from "react";
import { ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Card, Icon } from "../../src";
import { IconDirection } from "../../src/components/Icon/Direction";
import { CardStatsDetails } from "../../src/components/Card/CardStats";

export default {
  title: "Components/Card/Complex",
  component: Card,
} as ComponentMeta<typeof Card>;

interface ExtendedCardProps {
  title: string;
  onClick?: () => void;
  details: CardStatsDetails[];
}

export interface ColsProps {
  cols: number;
}
const StyledChevron = styled(Icon.Chevron)`
  color: ${({ theme }) => theme.colors.primary};
`;

const StyledWrapper = styled.div<ColsProps>`
  display: grid;
  grid-template-columns: ${({ cols }) => `repeat(${cols}, minmax(0, 1fr))`};
  gap: 1rem;
`;

const WithLabels = ({
  onClick,
  title,
  details,
}: ExtendedCardProps): ReactElement => (
  <Card onClick={onClick}>
    <Card.Head title={title}>
      <span onClick={() => null}>
        <StyledChevron direction={IconDirection.Right} />
      </span>
    </Card.Head>
    <Card.Stats details={details} />
  </Card>
);

export const Cards = (props: ExtendedCardProps): ReactElement => (
  <StyledWrapper cols={1}>
    <StyledWrapper cols={2}>
      <WithLabels {...props} />

      <WithLabels
        onClick={() => null}
        title={"Iron Bank"}
        details={[
          { label: "Supplied", value: "$ 0.00" },
          { label: "Borrow limit used", value: "0.00 %" },
        ]}
      />
    </StyledWrapper>
  </StyledWrapper>
);
Cards.args = {
  onClick: () => null,
  title: "Vaults",
  details: [
    { label: "Holdings", value: "$ 12,803.19" },
    { label: "APY", value: "0.35 %" },
  ],
};
