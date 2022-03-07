import React, { ReactElement } from "react";
import styled from "styled-components";
import { Heading1, Text } from "../../typography";

export interface CardStatsDetails {
  label: string;
  value: string;
}

export interface CardStatsProps {
  details: CardStatsDetails[];
}

export const CardStats = ({ ...props }: CardStatsProps): ReactElement => (
  <CardStatContainer cols={props.details?.length || 0}>
    {props.details.map((detail) => (
      <div key={`${detail.label}`}>
        <StyledText>{detail.label}</StyledText>
        <StyledHeading1 bold forwardedAs={"p"}>
          {detail.value}
        </StyledHeading1>
      </div>
    ))}
  </CardStatContainer>
);

export interface ColsProps {
  cols: number;
}
const CardStatContainer = styled.div<ColsProps>`
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
