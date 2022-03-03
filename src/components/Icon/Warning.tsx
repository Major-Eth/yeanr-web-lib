import * as React from "react";
import { SVGProps } from "react";

const SvgWarning = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 6.5c.506 0 .917.41.917.917v5.5a.917.917 0 0 1-1.834 0v-5.5c0-.507.41-.917.917-.917Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.15 1.268A.917.917 0 0 1 7.8 1H16.2c.243 0 .476.097.648.268l5.883 5.883a.917.917 0 0 1 .268.648V16.2a.917.917 0 0 1-.268.648l-5.883 5.883a.917.917 0 0 1-.648.268H7.8a.917.917 0 0 1-.648-.268l-5.883-5.883A.917.917 0 0 1 1 16.201V7.8c0-.243.097-.476.268-.648l5.883-5.883ZM8.18 2.833 2.833 8.18v7.642l5.346 5.346h7.642l5.346-5.346V8.18L15.82 2.833H8.18Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 15.658c.506 0 .917.41.917.916v.01a.917.917 0 1 1-1.834 0v-.01c0-.506.41-.916.917-.916Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgWarning;
