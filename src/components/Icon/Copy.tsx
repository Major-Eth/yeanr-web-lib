import * as React from "react";
import { SVGProps } from "react";

const SvgCopy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.2 5.583c0-1.518 1.209-2.75 2.7-2.75h3.6c1.491 0 2.7 1.232 2.7 2.75v7.334c0 1.518-1.209 2.75-2.7 2.75V17.5c2.485 0 4.5-2.052 4.5-4.583V5.583C21 3.053 18.985 1 16.5 1h-3.6c-2.485 0-4.5 2.052-4.5 4.583h1.8Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 6.5C5.015 6.5 3 8.552 3 11.083v7.334C3 20.947 5.015 23 7.5 23h3.6c2.485 0 4.5-2.052 4.5-4.583v-7.334c0-2.53-2.015-4.583-4.5-4.583H7.5Zm-2.7 4.583c0-1.518 1.209-2.75 2.7-2.75h3.6c1.491 0 2.7 1.232 2.7 2.75v7.334c0 1.518-1.209 2.75-2.7 2.75H7.5c-1.491 0-2.7-1.232-2.7-2.75v-7.334Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCopy;
