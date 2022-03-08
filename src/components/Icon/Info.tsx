import * as React from "react";
import { IconProps } from "./Icon";

const SvgInfo = (props: IconProps): React.ReactElement => (
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
        "M12 7.417c.506 0 .917.41.917.916v.01a.917.917 0 0 1-1.834 0v-.01c0-.506.41-.916.917-.916ZM12 10.167c.506 0 .917.41.917.916v5.5a.917.917 0 1 1-1.834 0v-5.5c0-.506.41-.916.917-.916Z"
      }
      fill={"currentcolor"}
    />
    <path
      fillRule={"evenodd"}
      clipRule={"evenodd"}
      d={
        "M19.778 4.222c-4.296-4.296-11.26-4.296-15.556 0-4.296 4.296-4.296 11.26 0 15.556 4.296 4.296 11.26 4.296 15.556 0 4.296-4.296 4.296-11.26 0-15.556ZM5.518 5.518a9.167 9.167 0 1 1 12.964 12.964A9.167 9.167 0 1 1 5.518 5.518Z"
      }
      fill={"currentcolor"}
    />
  </svg>
);

export default SvgInfo;
