import * as React from "react";
import { IconDirectionProps, IconDirection } from "./Direction";
import { IconProps } from "./Icon";

export const rotationDegree = {
  [IconDirection.DOWN]: "0",
  [IconDirection.LEFT]: "90",
  [IconDirection.UP]: "180",
  [IconDirection.RIGHT]: "270",
};

const SvgUp = (props: IconDirectionProps & IconProps) => (
  <svg
    width={props.size ?? 24}
    height={props.size ?? 24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox={"0 0 24 24"}
    transform={"rotate(" + rotationDegree[props.direction] + ")"}
    {...props}
  >
    <path
      d="m4.249 8.662 6.996 7.997a1.002 1.002 0 0 0 1.506 0l7-8a.994.994 0 0 0 .226-.455c.007-.041.02-.085.02-.126.003-.04.002-.079 0-.119a.987.987 0 0 0-.323-.695.99.99 0 0 0-.677-.264H5a.998.998 0 0 0-.882 1.47c.035.067.078.13.13.192Z"
      fill="currentcolor"
    />
  </svg>
);

export default SvgUp;
