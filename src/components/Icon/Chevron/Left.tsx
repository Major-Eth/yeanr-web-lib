import * as React from "react";
import { SVGProps } from "react";

const SvgLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.753 19.659a1 1 0 0 1-1.412.094l-8-7a1 1 0 0 1 0-1.506l8-7a1 1 0 0 1 1.318 1.506L9.518 12l7.14 6.247a1 1 0 0 1 .094 1.412Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgLeft;
