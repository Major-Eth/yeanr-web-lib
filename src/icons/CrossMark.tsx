import React, { SVGAttributes, ReactSVGElement } from "react";
import styled from "styled-components";

export interface CrossMarkProps {
  size?: number;
  color?: string;
}

const Icon: React.FC<SVGAttributes<ReactSVGElement> & CrossMarkProps> = ({
  size = 14,
  color = "#0657F9",
  ...props
}: CrossMarkProps) => (
  <svg
    width={size}
    height={size}
    fill={"none"}
    xmlns={"http://www.w3.org/2000/svg"}
    viewBox={"0 0 14 14"}
    {...props}
  >
    <path
      d={
        "M1.707.293A1 1 0 0 0 .293 1.707L5.586 7 .293 12.293a1 1 0 1 0 1.414 1.414L7 8.414l5.293 5.293a1 1 0 0 0 1.414-1.414L8.414 7l5.293-5.293A1 1 0 0 0 12.293.293L7 5.586 1.707.293Z"
      }
      fill={color}
    />
  </svg>
);

export const CrossMarkIcon = styled(Icon)`
  &:hover {
    cursor: pointer;
  }
`;
