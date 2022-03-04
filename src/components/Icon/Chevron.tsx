import * as React from "react";
import { SVGProps } from "react";

export interface ChevronIconProps extends SVGProps<SVGSVGElement> {
  variant: "down" | "up" | "left" | "right"
};

const Svg = (props: ChevronIconProps) => {
  let rotateDeg = undefined;
  switch(props.variant) {
    case "down":
      rotateDeg = "0";
      break;
    case "left":
      rotateDeg = "90";
      break;
    case "up":
      rotateDeg = "180";
      break;
    case "right":
      rotateDeg = "270";
      break;
  }
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform={"rotate(" + rotateDeg + ")"}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.659 7.247a1 1 0 0 1 .094 1.412l-7 8a1 1 0 0 1-1.506 0l-7-8a1 1 0 0 1 1.506-1.317L12 14.482l6.247-7.14a1 1 0 0 1 1.412-.095Z"
        fill="currentcolor"
      />
    </svg>
  )
};

export default Svg;
