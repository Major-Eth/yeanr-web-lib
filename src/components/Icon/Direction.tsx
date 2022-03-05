import { SVGProps } from "react";

export enum IconDirection {
  Up = "up",
  Down = "down",
  Left = "left",
  Right = "right",
}

export interface IconDirectionProps extends SVGProps<SVGSVGElement> {
  direction: IconDirection;
}
