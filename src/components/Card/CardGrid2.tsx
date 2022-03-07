import React, { MouseEvent, ReactElement } from "react";
import styled from "styled-components";
import { Heading1, Text } from "../../typography";
import { CardHead } from "./CardHead";
import { Wrapper } from "./Wrapper";
import { Icon } from "..";
import { IconDirection } from "../Icon/Direction";

interface CardDetailsProps {
  label: string;
  value: string;
}

export interface CardProps {
  title?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  details: CardDetailsProps[];
}

export const CardGrid2 = ({
  title,
  onClick,
  ...props
}: CardProps): ReactElement => (
  <Wrapper {...props} onClick={onClick}>
    {title ? (
      <CardHead title={title}>
        <span onClick={() => null}>
          <StyledChevron direction={IconDirection.Right} />
        </span>
      </CardHead>
    ) : null}
    <BodyRowContainer cols={props.details?.length || 0}>
      {props.details.map((detail) => (
        <div key={`${detail.label}`}>
          <StyledText>{detail.label}</StyledText>
          <StyledHeading1 bold forwardedAs={"p"}>
            {detail.value}
          </StyledHeading1>
        </div>
      ))}
    </BodyRowContainer>
  </Wrapper>
);

const StyledChevron = styled(Icon.Chevron)`
  color: ${({ theme }) => theme.colors.primary};
`;
export interface ColsProps {
  cols: number;
}
const BodyRowContainer = styled.div<ColsProps>`
  display: grid;
  grid-template-columns: ${({ cols }) => `repeat(${cols}, minmax(0, 1fr))`};
  gap: 1rem;
`;
const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.texts};
`;
const StyledHeading1 = styled(Heading1)`
  color: ${({ theme }) => theme.colors.titles};
  font-variant-numeric: tabular-nums;
`;
