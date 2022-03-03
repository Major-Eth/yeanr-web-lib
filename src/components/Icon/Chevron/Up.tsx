import * as React from "react";
import { SVGProps } from "react";

const SvgUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.342 16.753a1 1 0 0 1-.095-1.412l7-8a1 1 0 0 1 1.506 0l7 8a1 1 0 1 1-1.506 1.318L12 9.518l-6.247 7.14a1 1 0 0 1-1.411.094Z"
      fill="currentcolor"
    />
  </svg>
);

export default SvgUp;
