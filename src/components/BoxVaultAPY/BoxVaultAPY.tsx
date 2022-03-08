import React, { MouseEvent, ReactElement } from "react";
import Token from "@yearn/yearn-web-assets";
import styled, { css } from "styled-components";
import { Heading1, Text } from "../../typography";
import { Icon } from "..";
import { IconDirection } from "../Icon/Direction";

export interface BoxVaultAPYProps {
  address: string;
  chainID?: "1" | "250" | "42161";
  imgFormat?: "img" | "svg";
  label: string;
  value: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const BoxVaultAPY = ({
  address,
  chainID,
  label,
  value,
  imgFormat,
  ...props
}: BoxVaultAPYProps): ReactElement => (
  <StyledBox {...props}>
    <StyledCol>
      <div style={{ marginRight: "1rem" }}>
        <Token
          format={imgFormat ?? "svg"}
          address={address}
          chainID={chainID ?? "1"}
          width={64}
          height={64}
        />
      </div>
      <div>
        <StyledText>{label}</StyledText>
        <StyledHeading1 bold forwardedAs={"p"}>
          {value}
        </StyledHeading1>
      </div>
    </StyledCol>
    <div>
      <StyledChevron direction={IconDirection.Right} />
    </div>
  </StyledBox>
);

const StyledBox = styled.section`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 2px;
  padding: 1rem;
  padding-right: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 19.5rem;
  ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;
      &:hover {
        background: ${({ theme }) => `${theme.colors.background}E6`};
        box-shadow: ${({ theme }) => `0px 0px 24px ${theme.colors.surface}19`};
      }
    `}
`;
const StyledCol = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.texts};
  margin-bottom: 0.5rem;
`;
const StyledHeading1 = styled(Heading1)`
  color: ${({ theme }) => theme.colors.titles};
  font-variant-numeric: tabular-nums;
`;
const StyledChevron = styled(Icon.Chevron)`
  color: ${({ theme }) => theme.colors.primary};
`;
