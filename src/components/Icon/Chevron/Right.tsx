import * as React from "react";
import { SVGProps } from "react";

const SvgRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.247 4.342a1 1 0 0 1 1.412-.095l8 7a1 1 0 0 1 0 1.506l-8 7a1 1 0 1 1-1.317-1.506L14.482 12l-7.14-6.247a1 1 0 0 1-.095-1.411Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgRight;
