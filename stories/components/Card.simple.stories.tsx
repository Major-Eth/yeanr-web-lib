/* eslint-disable no-console */
import React, { MouseEventHandler, ReactElement } from "react";
import { ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Card, Text, Icon } from "../../src";
import { IconDirection } from "../../src/components/Icon/Direction";

interface ExtendedCardProps {
  title: string;
  body: string;
  onClick?: MouseEventHandler | null;
}

export default {
  title: "Components/Card/Simple",
  component: Card,
} as ComponentMeta<typeof Card>;

export interface ColsProps {
  cols: number;
}
const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.texts};
`;
const StyledChevron = styled(Icon.Chevron)`
  color: ${({ theme }) => theme.colors.primary};
`;
const StyledIcon = styled.span`
  color: ${({ theme }) => theme.colors.icons.primary};
  transition-property: color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.icons.variant};
  }
`;

export const WithTitle = ({ title, body }: ExtendedCardProps): ReactElement => {
  return (
    <Card>
      <Card.Head title={title} />
      <StyledText>{body}</StyledText>
    </Card>
  );
};
WithTitle.args = {
  title: "Vault",
  body: `There are many like it, but this one is yours. You can always return here for a bird's-eye view of your holdings. The cards below show the total balance and utilization of your wallet, and the holdings and performance for every Yearn product you use.`,
  onClick: null,
};

export const WithoutTitle = ({ body }: ExtendedCardProps): ReactElement => (
  <Card>
    <StyledText>{body}</StyledText>
  </Card>
);
WithoutTitle.args = {
  body: `There are many like it, but this one is yours. You can always return here for a bird's-eye view of your holdings. The cards below show the total balance and utilization of your wallet, and the holdings and performance for every Yearn product you use.`,
  onClick: null,
};

export const WithTitleAndGlobalAction = ({
  onClick,
  title,
  body,
}: ExtendedCardProps): ReactElement => (
  <Card onClick={onClick}>
    <Card.Head title={title}>
      <StyledChevron direction={IconDirection.Right} />
    </Card.Head>
    <StyledText>{body}</StyledText>
  </Card>
);
WithTitleAndGlobalAction.args = {
  title: "Vault",
  body: `There are many like it, but this one is yours. You can always return here for a bird's-eye view of your holdings. The cards below show the total balance and utilization of your wallet, and the holdings and performance for every Yearn product you use.`,
  onClick: () => console.info("click"),
};

export const WithTitleAndSpecificActions = ({
  title,
  body,
}: ExtendedCardProps): ReactElement => (
  <Card>
    <Card.Head title={title}>
      <div>
        <StyledIcon onClick={() => console.info("Click add")}>
          <Icon.Add />
        </StyledIcon>
        <StyledIcon onClick={() => console.info("Click link out")}>
          <Icon.LinkOut />
        </StyledIcon>
      </div>
    </Card.Head>
    <StyledText>{body}</StyledText>
  </Card>
);
WithTitleAndSpecificActions.args = {
  title: "Vault",
  body: `There are many like it, but this one is yours. You can always return here for a bird's-eye view of your holdings. The cards below show the total balance and utilization of your wallet, and the holdings and performance for every Yearn product you use.`,
};
