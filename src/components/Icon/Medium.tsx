import * as React from "react";
import { IconProps } from "./Icon";

const SvgMedium = (props: IconProps) => (
  <svg
    width={props.size ?? 24}
    height={props.size ?? 24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox={"0 0 24 24"}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12ZM6.484 7.954a.611.611 0 0 1 .176.494v6.68a.81.81 0 0 1-.19.664L5 17.718v.254h4.17v-.254L7.7 15.792a.838.838 0 0 1-.203-.663V9.35l3.66 8.62h.425l3.143-8.62v6.871c0 .184 0 .219-.11.339l-1.131 1.185V18h5.49v-.254l-1.092-1.157a.367.367 0 0 1-.124-.339v-8.5a.367.367 0 0 1 .124-.34L19 6.255V6h-3.87l-2.758 7.429L9.236 6H5.176v.254l1.308 1.7Z"
      fill="currentcolor"
    />
  </svg>
);

export default SvgMedium;
