import React, { ReactElement } from "react";
import styled from "styled-components";
import { Heading2 } from "../../typography";

export interface CardHeadProps {
  title: string;
  children?: ReactElement;
}

export const CardHead = ({ title, children }: CardHeadProps): ReactElement => {
  return (
    <CardHeadContainer>
      <StyledHeading2 bold>{title}</StyledHeading2>
      {children}
    </CardHeadContainer>
  );
};

const CardHeadContainer = styled.div`
  padding-bottom: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const StyledHeading2 = styled(Heading2)`
  color: ${({ theme }) => theme.colors.titles};
`;
