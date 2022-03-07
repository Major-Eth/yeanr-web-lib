import * as React from "react";
import { IconProps } from "./Icon";

const SvgCheckmark = (props: IconProps) => (
  <svg
    width={props.size ?? 24}
    height={props.size ?? 24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox={"0 0 24 24"}
    {...props}
  >
    <path
      d="m4 14 6 4L20 6"
      stroke="currentcolor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgCheckmark;
