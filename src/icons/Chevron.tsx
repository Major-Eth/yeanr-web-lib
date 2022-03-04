import React, { SVGAttributes, ReactSVGElement } from "react";
import styled from "styled-components";

export interface ChevronProps {
  size?: number;
  color?: string;
  disabled?: boolean;
  disabledColor?: string;
}

const Icon: React.FC<SVGAttributes<ReactSVGElement> & ChevronProps> = ({
  size = 16,
  color = "#0657F9",
  disabled = false,
  disabledColor = "#CED5E3",
  ...props
}: ChevronProps) => (
  <svg
    width={size}
    height={size}
    fill={"none"}
    xmlns={"http://www.w3.org/2000/svg"}
    viewBox={"0 0 16 16"}
    {...props}
  >
    <path
      fillRule={"evenodd"}
      clipRule={"evenodd"}
      d={
        "M9.753 15.659a1 1 0 0 1-1.412.094l-8-7a1 1 0 0 1 0-1.506l8-7a1 1 0 0 1 1.317 1.506L2.518 8l7.14 6.247a1 1 0 0 1 .095 1.412Z"
      }
      fill={disabled ? disabledColor : color}
    />
  </svg>
);

export const ChevronIcon = styled(Icon)`
  &:hover {
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  }
`;
