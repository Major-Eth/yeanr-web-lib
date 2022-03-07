import * as React from "react";
import { IconProps } from "./Icon";

const SvgLinkOut = (props: IconProps): React.ReactElement => (
  <svg
    width={props.size ?? 24}
    height={props.size ?? 24}
    fill={"none"}
    xmlns={"http://www.w3.org/2000/svg"}
    viewBox={"0 0 24 24"}
    {...props}
  >
    <path
      d={
        "M7 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1a1 1 0 1 1 2 0v1a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5h1a1 1 0 0 1 0 2H7Z"
      }
      fill={"currentcolor"}
    />
    <path
      d={
        "M14.3 2a1.1 1.1 0 0 0 0 2.2h3.944l-9.122 9.122a1.1 1.1 0 1 0 1.556 1.556L19.8 5.756V9.7a1.1 1.1 0 0 0 2.2 0V3.1a1.095 1.095 0 0 0-.32-.775v-.002h-.002l-.002-.002A1.097 1.097 0 0 0 20.9 2h-6.6ZM21.321 2.083Z"
      }
      fill={"currentcolor"}
    />
  </svg>
);

export default SvgLinkOut;
