import { IconProps } from "./Icon";

export enum IconDirection {
  Up = "up",
  Down = "down",
  Left = "left",
  Right = "right",
}

export interface IconDirectionProps extends IconProps {
  direction: IconDirection;
}
