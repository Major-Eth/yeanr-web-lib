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
      d="m15.337 19.751-7.996-6.996a1.002 1.002 0 0 1 0-1.506l8-7a.995.995 0 0 1 .454-.227c.042-.006.085-.02.127-.02.039-.003.078-.001.118.001a.987.987 0 0 1 .695.322.997.997 0 0 1 .264.677v13.997a1 1 0 0 1-1.662.752Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgLeft;
