import * as React from "react";
import { IconDirectionProps, IconDirection } from "./Direction";
import { IconProps } from "./Icon";

const rotationDegree = {
  [IconDirection.Down]: "0",
  [IconDirection.Left]: "90",
  [IconDirection.Up]: "180",
  [IconDirection.Right]: "270",
};

const Svg = (props: IconDirectionProps & IconProps): React.ReactElement => (
  <svg
    width={props.size ?? 24}
    height={props.size ?? 24}
    fill={"none"}
    xmlns={"http://www.w3.org/2000/svg"}
    viewBox={"0 0 24 24"}
    transform={"rotate(" + rotationDegree[props.direction] + ")"}
    {...props}
  >
    <path
      fillRule={"evenodd"}
      clipRule={"evenodd"}
      d={
        "M19.659 7.247a1 1 0 0 1 .094 1.412l-7 8a1 1 0 0 1-1.506 0l-7-8a1 1 0 0 1 1.506-1.317L12 14.482l6.247-7.14a1 1 0 0 1 1.412-.095Z"
      }
      fill={"currentcolor"}
    />
  </svg>
);

export default Svg;
